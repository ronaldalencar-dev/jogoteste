/* ShootingSystem — sistema de tiro realista com mira estilo Foxhole */
import { dist2, lerpAngle } from '../core/Util.js';
import { ITEMS } from '../data/items.js';

export class ShootingSystem {
  constructor(game) {
    this.game = game;
    this.canShoot = true;
    this.lastShotTime = 0;
    this.raycastInterval = null;
    /* mira estilo Foxhole: angulo independente do corpo */
    this.aimAngle = 0;
    this.aiming = false;
    this.mouseX = 0;
    this.mouseY = 0;
    /* animacao de recuo da arma */
    this.weaponRecoil = 0;
    this.recoilRecovery = 0;
    /* ejecao de cartuchos */
    this.shellEjectionTimer = 0;
  }
  
  /* atualiza a mira baseada na posicao do mouse */
  updateAim(dt) {
    const g = this.game;
    if (g.state !== 'playing' || g.drivingSystem.active) return;
    
    /* calcula angulo da mira baseado no mouse relativo ao centro da tela */
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const dx = this.mouseX - centerX;
    const dy = this.mouseY - centerY;
    
    /* angulo alvo baseado na posicao do mouse */
    const targetAngle = Math.atan2(dx, -dy);
    
    /* suaviza transicao da mira */
    this.aimAngle = lerpAngle(this.aimAngle, targetAngle, 0.15);
    this.aiming = true;
    
    /* recupera recuo da arma */
    if (this.weaponRecoil > 0) {
      this.weaponRecoil -= this.recoilRecovery * dt;
      if (this.weaponRecoil < 0) this.weaponRecoil = 0;
    }
    
    /* atualiza visual da arma do jogador */
    this._updateWeaponVisual();
  }
  
  _updateWeaponVisual() {
    const g = this.game;
    const player = g.player;
    
    /* rotaciona o torso na direcao da mira */
    const aimDiff = this.aimAngle - player.heading;
    player.torso.rotation.y = aimDiff * 0.7;
    
    /* aplica recuo visual na arma */
    const equipped = player.weapons[player.equipped];
    if (equipped && this.weaponRecoil > 0.01) {
      equipped.position.z = 0.1 + this.weaponRecoil * 0.3;
      equipped.rotation.x = -this.weaponRecoil * 0.5;
    } else if (equipped) {
      equipped.position.z = 0.1;
      equipped.rotation.x = 0;
    }
  }
  
  /* verifica se pode atirar baseado na arma equipada */
  canFire(weaponId) {
    if (!weaponId) return false;
    const now = performance.now();
    const weapon = ITEMS[weaponId];
    if (!weapon || weapon.tipo !== 'arma') return false;

    /* verifica municao */
    if (!this.game.inventory.has('municao')) {
      return false;
    }

    /* cooldown entre tiros */
    const fireRate = this._getFireRate(weaponId);
    if (now - this.lastShotTime < fireRate) return false;

    return true;
  }

  _getFireRate(weaponId) {
    switch (weaponId) {
      case 'pistola': return 180;   // 180ms entre tiros
      case 'escopeta': return 900;  // 900ms (lenta)
      case 'rifle': return 450;     // 450ms
      default: return 500;
    }
  }

  _getWeaponStats(weaponId) {
    switch (weaponId) {
      case 'pistola':
        return { damage: 12, range: 25, spread: 0.08, count: 1, recoil: 0.15 };
      case 'escopeta':
        return { damage: 34, range: 12, spread: 0.35, count: 6, recoil: 0.45 };
      case 'rifle':
        return { damage: 26, range: 50, spread: 0.02, count: 1, recoil: 0.25 };
      default:
        return { damage: 10, range: 20, spread: 0.1, count: 1, recoil: 0.2 };
    }
  }

  fire() {
    const g = this.game;
    const weaponId = g.inventory.equipped;
    
    if (!this.canFire(weaponId)) {
      if (!g.inventory.equipped) {
        g.ui.toast('Equipe uma arma primeiro!', 'info');
      } else if (!g.inventory.has('municao')) {
        g.ui.toast('SEM MUNICAO! Encontre caixas de municao.', 'danger', 3500);
        g.audio.engineDeny();
      }
      return false;
    }

    const now = performance.now();
    const weapon = ITEMS[weaponId];
    const stats = this._getWeaponStats(weaponId);
    
    this.lastShotTime = now;
    
    /* consome 1 municao por tiro (escopeta usa 1 por disparo, nao por pellet) */
    g.inventory.counts.municao--;
    g.inventory._emit('municao');

    /* efeito sonoro */
    this._playShootSound(weaponId);

    /* recuo da arma (animacao) */
    this.weaponRecoil = stats.recoil;
    this.recoilRecovery = stats.recoil * 3.5; /* recuperacao por segundo */

    /* recuo da camera */
    g.cameraRig.addShake(stats.recoil * 2.5);

    /* flash do tiro */
    this._muzzleFlash();

    /* ejeção de cartucho */
    this._ejectShell();

    /* raycast para cada pellet usando o angulo da mira */
    for (let i = 0; i < stats.count; i++) {
      this._fireRay(stats, i);
    }

    /* particulas na direcao do tiro */
    const player = g.player;
    const dirX = Math.sin(this.aimAngle);
    const dirZ = -Math.cos(this.aimAngle);
    g.particles.burst(
      player.x + dirX * 0.8,
      1.1,
      player.z + dirZ * 0.8,
      0xffaa00,
      4
    );

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
        g.audio._noise(0.25, 0.28, 400, 'lowpass');
        g.audio._tone('sawtooth', 80, 0.15, 0.15, 60);
        break;
      case 'rifle':
        g.audio._noise(0.15, 0.22, 900, 'highpass');
        g.audio._tone('square', 140, 0.1, 0.14, 100);
        break;
    }
  }

  _muzzleFlash() {
    const g = this.game;
    const player = g.player;
    const dirX = Math.sin(this.aimAngle);
    const dirZ = -Math.cos(this.aimAngle);
    
    /* flash instantaneo */
    g.particles.spawn(
      player.x + dirX * 0.9,
      1.2,
      player.z + dirZ * 0.9,
      {
        color: 0xffff80,
        size: 0.6,
        vx: dirX * 0.5,
        vz: dirZ * 0.5,
        vy: 0.2,
        life: 0.08,
        opacity: 1,
        spark: true,
      }
    );
  }

  _ejectShell() {
    const g = this.game;
    const player = g.player;
    
    /* ejecta cartucho para direita do jogador */
    const rightX = Math.cos(player.heading);
    const rightZ = Math.sin(player.heading);
    
    g.particles.spawn(
      player.x + rightX * 0.4,
      0.9,
      player.z + rightZ * 0.4,
      {
        color: 0xd4af37,
        size: 0.08,
        vx: rightX * 1.5 + (Math.random() - 0.5) * 0.5,
        vy: 1.2 + Math.random() * 0.8,
        vz: rightZ * 1.5 + (Math.random() - 0.5) * 0.5,
        life: 0.6,
        opacity: 0.9,
        gravity: 2.5,
        shell: true,
      }
    );
  }

  _fireRay(stats, pelletIndex = 0) {
    const g = this.game;
    const player = g.player;
    
    /* direcao base + spread usando o angulo da mira */
    const baseAngle = this.aimAngle;
    const spreadAngle = (Math.random() - 0.5) * stats.spread;
    const angle = baseAngle + spreadAngle;
    
    const dirX = Math.sin(angle);
    const dirZ = -Math.cos(angle);
    
    /* raycast simples */
    const stepSize = 0.5;
    let x = player.x;
    let z = player.z;
    let hit = false;
    
    for (let d = 0; d < stats.range && !hit; d += stepSize) {
      x += dirX * stepSize;
      z += dirZ * stepSize;
      
      /* verifica colisao com entidades */
      if (x < 1.5 || z < 1.5 || x > g.world.size - 1.5 || z > g.world.size - 1.5) {
        break;
      }
      
      /* verifica predios */
      const building = g.world.getBuildingAt(x, z);
      if (building) {
        this._hitBuilding(building, x, z, stats.damage);
        hit = true;
        break;
      }
      
      /* verifica props destrutiveis */
      const prop = g.world.getPropAt(x, z);
      if (prop && prop.destructible) {
        this._hitProp(prop, x, z, stats.damage);
        hit = true;
        break;
      }
    }
    
    /* trilha do projetil (apenas para rifle) */
    if (stats.range > 30 && pelletIndex === 0) {
      this._bulletTrail(player.x, player.z, x, z);
    }
  }

  _hitBuilding(building, x, z, damage) {
    const g = this.game;
    
    /* particulas de impacto */
    g.particles.burst(x, 0.8, z, 0x888888, 5);
    
    /* som de impacto */
    g.audio._noise(0.08, 0.12, 800, 'highpass');
    g.audio._tone('square', 200, 0.04, 0.08, 150);
    
    /* marca de bala temporaria */
    g.particles.spawn(x, 0.9, z, {
      color: 0x333333,
      size: 0.15,
      life: 3.0,
      opacity: 0.8,
      grow: -0.02,
    });
  }

  _hitProp(prop, x, z, damage) {
    const g = this.game;
    
    prop.hp = (prop.hp || 100) - damage;
    
    /* particulas */
    g.particles.burst(x, 0.6, z, 0x8b7355, 8);
    
    /* som */
    g.audio._noise(0.1, 0.15, 600, 'bandpass');
    
    if (prop.hp <= 0) {
      /* prop destruido */
      g.world.removePropById(prop.id);
      g.audio.crash();
      g.particles.burst(x, 0.4, z, 0x6d5a4b, 12);
      g.ui.toast('Objeto destruido!', 'loot');
    }
  }

  _bulletTrail(x1, z1, x2, z2) {
    const g = this.game;
    const midX = (x1 + x2) / 2;
    const midZ = (z1 + z2) / 2;
    
    g.particles.spawn(midX, 1.0, midZ, {
      color: 0xffdd44,
      size: 0.08,
      life: 0.15,
      opacity: 0.9,
      grow: 0,
      spark: true,
    });
  }

  update(dt) {
    /* recarrega capacidade de tiro */
    this.canShoot = true;
    /* atualiza mira */
    this.updateAim(dt);
  }
  
  setMousePosition(x, y) {
    this.mouseX = x;
    this.mouseY = y;
  }
}
