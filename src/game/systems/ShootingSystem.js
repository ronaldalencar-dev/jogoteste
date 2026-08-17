/* ShootingSystem — sistema de tiro realista com mira estilo Foxhole */
import * as THREE from 'three';
import { dist2, lerpAngle, clamp } from '../core/Util.js';
import { ITEMS } from '../data/items.js';

export class ShootingSystem {
  constructor(game) {
    this.game = game;
    this.canShoot = true;
    this.lastShotTime = 0;
    this.lastEmptyWarnTime = 0;
    
    /* mira estilo Foxhole */
    this.aimAngle = 0;
    this.isAiming = false;
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.aimTarget = new THREE.Vector3();
    this.aimEnd = new THREE.Vector3();
    this.currentRange = 18;

    /* animacao de recuo da arma */
    this.weaponRecoil = 0;
    this.recoilRecovery = 0;

    /* Three.js raycasting e objetos visuais de mira */
    this._raycaster = new THREE.Raycaster();
    this._groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.5);

    /* Linha branca de mira em 3D */
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 1)
    ]);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      linewidth: 2,
    });
    this.aimLine = new THREE.Line(lineGeo, lineMat);
    this.aimLine.visible = false;
    this.aimLine.renderOrder = 999;
    this.game.scene.add(this.aimLine);

    /* Retículo de impacto no solo (círculo alvo + ponto central) */
    this.reticleGroup = new THREE.Group();
    
    const outerRingGeo = new THREE.RingGeometry(0.24, 0.32, 24);
    outerRingGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const ringMesh = new THREE.Mesh(outerRingGeo, ringMat);

    const innerDotGeo = new THREE.CircleGeometry(0.08, 12);
    innerDotGeo.rotateX(-Math.PI / 2);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const dotMesh = new THREE.Mesh(innerDotGeo, dotMat);

    this.reticleGroup.add(ringMesh, dotMesh);
    this.reticleGroup.visible = false;
    this.reticleGroup.renderOrder = 999;
    this.game.scene.add(this.reticleGroup);
  }

  _getWeaponStats(weaponId) {
    switch (weaponId) {
      case 'pistola':
        return { name: 'Pistola 9mm', damage: 20, range: 18, spread: 0.04, count: 1, recoil: 0.14, fireRate: 220 };
      case 'escopeta':
        return { name: 'Escopeta Cal. 12', damage: 45, range: 11, spread: 0.28, count: 6, recoil: 0.45, fireRate: 850 };
      case 'rifle':
        return { name: 'Rifle 7.62mm', damage: 36, range: 35, spread: 0.012, count: 1, recoil: 0.24, fireRate: 420 };
      default:
        return { name: 'Desarmado', damage: 8, range: 12, spread: 0.08, count: 1, recoil: 0.1, fireRate: 350 };
    }
  }

  /* Atualiza a mira estilo Foxhole */
  updateAim(dt) {
    const g = this.game;
    if (g.state !== 'playing' || (g.drivingSystem && g.drivingSystem.active)) {
      this.aimLine.visible = false;
      this.reticleGroup.visible = false;
      this.isAiming = false;
      if (g.player) g.player.setAim(false);
      return;
    }

    const inp = g.input;
    const isHoldingAim = inp.isDown('Mouse2'); // Botão direito do mouse segurado
    const player = g.player;
    if (!player) return;

    if (!isHoldingAim) {
      this.aimLine.visible = false;
      this.reticleGroup.visible = false;
      this.isAiming = false;
      player.setAim(false);
      
      /* recupera recuo da arma suavemente */
      if (this.weaponRecoil > 0) {
        this.weaponRecoil -= this.recoilRecovery * dt;
        if (this.weaponRecoil < 0) this.weaponRecoil = 0;
      }
      this._updateWeaponVisual();
      return;
    }

    this.isAiming = true;
    player.setAim(true, this.aimAngle);

    const weaponId = g.inventory.equipped;
    const stats = this._getWeaponStats(weaponId);
    this.currentRange = stats.range;

    /* Raycasting do mouse 2D da tela para o plano 3D do chão */
    const ndcX = (this.mouseX / window.innerWidth) * 2 - 1;
    const ndcY = -(this.mouseY / window.innerHeight) * 2 + 1;

    this._raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), g.cameraRig.cam);
    this._raycaster.ray.intersectPlane(this._groundPlane, this.aimTarget);

    const dx = this.aimTarget.x - player.x;
    const dz = this.aimTarget.z - player.z;
    const mouseDist = Math.hypot(dx, dz);
    const targetAngle = Math.atan2(dx, dz);

    /* suaviza rotação do jogador em direção ao alvo */
    this.aimAngle = lerpAngle(this.aimAngle, targetAngle, 0.4);
    player.heading = this.aimAngle;
    player.rig.rotation.y = player.heading;

    /* limita a distância da linha de mira pelo alcance máximo da arma */
    const clampedDist = clamp(mouseDist, 0.8, stats.range);

    /* cálculo das pontas da linha de mira */
    const startX = player.x;
    const startY = 0.85;
    const startZ = player.z;

    let endX = player.x + Math.sin(this.aimAngle) * clampedDist;
    let endY = 0.85;
    let endZ = player.z + Math.cos(this.aimAngle) * clampedDist;

    /* colisão da linha de mira com edifícios ou obstáculos no caminho */
    const dirX = Math.sin(this.aimAngle);
    const dirZ = Math.cos(this.aimAngle);
    const step = 0.4;
    let traceX = startX;
    let traceZ = startZ;
    let actualDist = clampedDist;

    for (let d = 0.6; d < clampedDist; d += step) {
      traceX += dirX * step;
      traceZ += dirZ * step;

      const building = g.world.getBuildingAt(traceX, traceZ);
      if (building) {
        actualDist = d;
        endX = traceX;
        endZ = traceZ;
        break;
      }
    }

    this.aimEnd.set(endX, 0.85, endZ);

    /* atualiza vértices da linha branca */
    const positions = new Float32Array([
      startX, startY, startZ,
      endX, endY, endZ
    ]);
    this.aimLine.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.aimLine.geometry.attributes.position.needsUpdate = true;
    this.aimLine.visible = true;

    /* posiciona o retículo de mira no ponto final */
    this.reticleGroup.position.set(endX, 0.08, endZ);
    this.reticleGroup.visible = true;

    /* recupera recuo */
    if (this.weaponRecoil > 0) {
      this.weaponRecoil -= this.recoilRecovery * dt;
      if (this.weaponRecoil < 0) this.weaponRecoil = 0;
    }

    this._updateWeaponVisual();
  }

  _updateWeaponVisual() {
    const g = this.game;
    const player = g.player;
    if (!player) return;

    /* aplica recuo visual na arma */
    const equipped = player.weapons[player.equipped];
    if (equipped && this.weaponRecoil > 0.01) {
      equipped.position.z = 0.1 - this.weaponRecoil * 0.25;
      equipped.rotation.x = this.weaponRecoil * 0.4;
    } else if (equipped) {
      equipped.position.z = 0.1;
      equipped.rotation.x = 0;
    }
  }

  /* verifica se pode atirar */
  canFire(weaponId) {
    if (!weaponId) return { ok: false, reason: 'no_weapon' };
    const now = performance.now();
    const weapon = ITEMS[weaponId];
    if (!weapon || weapon.tipo !== 'arma') return { ok: false, reason: 'not_a_weapon' };

    /* verifica munição */
    if (!this.game.inventory.has('municao')) {
      return { ok: false, reason: 'no_ammo' };
    }

    /* cooldown entre tiros */
    const stats = this._getWeaponStats(weaponId);
    if (now - this.lastShotTime < stats.fireRate) return { ok: false, reason: 'cooldown' };

    return { ok: true, stats };
  }

  fire(isInitialPress = false) {
    const g = this.game;
    const weaponId = g.inventory.equipped;
    const check = this.canFire(weaponId);
    const now = performance.now();
    
    if (!check.ok) {
      if (check.reason === 'cooldown') return false;

      /* limita avisos para não floodar a tela se segurar o botão */
      if (now - this.lastEmptyWarnTime > 1600 || (isInitialPress && now - this.lastEmptyWarnTime > 600)) {
        this.lastEmptyWarnTime = now;
        if (check.reason === 'no_weapon') {
          g.ui.toast('Equipe uma arma no inventário [I] primeiro!', 'info', 2200);
        } else if (check.reason === 'no_ammo') {
          g.ui.toast('SEM MUNIÇÃO! Encontre caixas de munição.', 'danger', 2500);
          g.audio.engineDeny();
        }
      }
      return false;
    }

    const stats = check.stats;
    this.lastShotTime = now;
    
    /* consome 1 munição por disparo */
    g.inventory.counts.municao--;
    g.inventory._emit('municao');

    /* efeito sonoro */
    this._playShootSound(weaponId);

    /* recuo da arma */
    this.weaponRecoil = stats.recoil;
    this.recoilRecovery = stats.recoil * 4.5;

    /* recuo da câmera */
    g.cameraRig.addShake(stats.recoil * 2.8);

    /* flash do tiro e faíscas */
    this._muzzleFlash();

    /* ejeção de cartucho */
    this._ejectShell();

    /* disparo dos projéteis */
    for (let i = 0; i < stats.count; i++) {
      this._fireRay(stats, i);
    }

    return true;
  }

  _playShootSound(weaponId) {
    const g = this.game;
    switch (weaponId) {
      case 'pistola':
        g.audio._noise(0.12, 0.18, 1200, 'highpass');
        g.audio._tone('square', 180, 0.08, 0.12, 120);
        break;
      case 'escopeta':
        g.audio._noise(0.28, 0.32, 400, 'lowpass');
        g.audio._tone('sawtooth', 80, 0.16, 0.18, 50);
        break;
      case 'rifle':
        g.audio._noise(0.18, 0.24, 900, 'highpass');
        g.audio._tone('square', 140, 0.12, 0.16, 90);
        break;
    }
  }

  _muzzleFlash() {
    const g = this.game;
    const player = g.player;
    const dirX = Math.sin(this.aimAngle);
    const dirZ = Math.cos(this.aimAngle);
    
    /* flash luminoso na ponta do cano */
    g.particles.spawn(
      player.x + dirX * 0.85,
      0.95,
      player.z + dirZ * 0.85,
      {
        color: 0xffffaa,
        size: 0.65,
        vx: dirX * 0.6,
        vz: dirZ * 0.6,
        vy: 0.1,
        life: 0.08,
        opacity: 1,
        spark: true,
      }
    );

    /* faíscas de disparo */
    g.particles.burst(
      player.x + dirX * 0.85,
      0.95,
      player.z + dirZ * 0.85,
      0xffcc33,
      4
    );
  }

  _ejectShell() {
    const g = this.game;
    const player = g.player;
    
    /* ejeta cartucho para a direita do jogador */
    const rightX = Math.cos(player.heading);
    const rightZ = -Math.sin(player.heading);
    
    g.particles.spawn(
      player.x + rightX * 0.35,
      0.9,
      player.z + rightZ * 0.35,
      {
        color: 0xd4af37,
        size: 0.08,
        vx: rightX * 1.6 + (Math.random() - 0.5) * 0.4,
        vy: 1.4 + Math.random() * 0.6,
        vz: rightZ * 1.6 + (Math.random() - 0.5) * 0.4,
        life: 0.65,
        opacity: 0.9,
        gravity: 3.2,
        shell: true,
      }
    );
  }

  _fireRay(stats, pelletIndex = 0) {
    const g = this.game;
    const player = g.player;
    
    /* direção base + dispersão */
    const spreadAngle = (Math.random() - 0.5) * stats.spread;
    const angle = this.aimAngle + spreadAngle;
    
    const dirX = Math.sin(angle);
    const dirZ = Math.cos(angle);
    
    const stepSize = 0.45;
    let x = player.x;
    let z = player.z;
    let hit = false;
    
    for (let d = 0.5; d < stats.range && !hit; d += stepSize) {
      x += dirX * stepSize;
      z += dirZ * stepSize;
      
      if (x < 1.5 || z < 1.5 || x > g.world.size - 1.5 || z > g.world.size - 1.5) {
        break;
      }
      
      /* verifica impacto em edifícios */
      const building = g.world.getBuildingAt(x, z);
      if (building) {
        this._hitBuilding(building, x, z, stats.damage);
        hit = true;
        break;
      }
      
      /* verifica impacto em objetos destrutíveis */
      const prop = g.world.getPropAt(x, z);
      if (prop && prop.destructible) {
        this._hitProp(prop, x, z, stats.damage);
        hit = true;
        break;
      }
    }
    
    /* traçante de bala visível */
    this._bulletTracer(player.x, player.z, x, z);
  }

  _bulletTracer(x1, z1, x2, z2) {
    const g = this.game;
    const midX = (x1 + x2) / 2;
    const midZ = (z1 + z2) / 2;
    
    g.particles.spawn(midX, 0.9, midZ, {
      color: 0xffffff,
      size: 0.07,
      life: 0.12,
      opacity: 0.95,
      grow: 0,
      spark: true,
    });
  }

  _hitBuilding(building, x, z, damage) {
    const g = this.game;
    
    /* faíscas de ricochete */
    g.particles.burst(x, 0.8, z, 0xdddddd, 6);
    
    /* som de impacto na parede */
    g.audio._noise(0.08, 0.12, 900, 'highpass');
    g.audio._tone('square', 220, 0.04, 0.08, 160);
    
    /* marca de impacto temporária */
    g.particles.spawn(x, 0.85, z, {
      color: 0x222222,
      size: 0.18,
      life: 3.5,
      opacity: 0.85,
      grow: -0.02,
    });
  }

  _hitProp(prop, x, z, damage) {
    const g = this.game;
    prop.hp = (prop.hp || 100) - damage;
    
    /* detritos de madeira/metal */
    g.particles.burst(x, 0.6, z, 0x8b7355, 8);
    g.audio._noise(0.1, 0.15, 600, 'bandpass');
    
    if (prop.hp <= 0) {
      g.world.removePropById(prop.id);
      g.audio.crash();
      g.particles.burst(x, 0.4, z, 0x6d5a4b, 14);
      g.ui.toast('Objeto destruído!', 'loot', 1800);
    }
  }

  update(dt) {
    this.canShoot = true;
    this.updateAim(dt);
  }
  
  setMousePosition(x, y) {
    this.mouseX = x;
    this.mouseY = y;
  }
}
