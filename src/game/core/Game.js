/* Game — orquestra todos os sistemas e roda o loop principal */
import * as THREE from 'three';
import { Renderer } from './Renderer.js';
import { CameraRig } from './CameraRig.js';
import { Input } from './Input.js';
import { Time } from './Time.js';
import { Collision } from '../world/Collision.js';
import { World } from '../world/World.js';
import { Player } from '../player/Player.js';
import { PlayerController } from '../player/PlayerController.js';
import { InteractionSystem } from '../systems/InteractionSystem.js';
import { InventorySystem } from '../systems/InventorySystem.js';
import { LootSystem } from '../systems/LootSystem.js';
import { SaveSystem } from '../systems/SaveSystem.js';
import { DrivingSystem } from '../systems/DrivingSystem.js';
import { ShootingSystem } from '../systems/ShootingSystem.js';
import { UIManager } from '../ui/UIManager.js';
import { AudioManager } from '../audio/AudioManager.js';
import { showFatal } from './Errors.js';
import { SLOT_ORDER } from '../data/items.js';

const START_KIT = { comida: 3, medicamento: 1, material: 6 };

export class Game {
  constructor(container) {
    this.container = container;
    this.state = 'boot';
    this.lootedIds = new Set();
    this.respawnedList = [];
    this._district = null;
    this._hpUiTimer = 0;
    this._hazardTick = 0;
    this._districtTimer = 0;
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0e1216);

    this.renderer = new Renderer(this.container);
    this.cameraRig = new CameraRig(this.renderer.aspect);
    this.input = new Input();
    this.time = new Time();
    this.audio = new AudioManager();
    this.save = new SaveSystem();
    this.loot = new LootSystem();

    this.config = this.save.loadConfig();
    this.applyConfig(false);

    this.ui = new UIManager(this.container, this);

    /* jogador vive fora do grupo do mundo (persiste entre reconstruções) */
    this.player = new Player(this.scene);
    this.interaction = new InteractionSystem(this);
    this.inventory = new InventorySystem(this);
    this.inventory.onChange = (counts, id) => this.ui.setResources(counts, id);

    this._buildWorld();
    this.controller = new PlayerController(this);
    this.drivingSystem = new DrivingSystem(this);
    this.shootingSystem = new ShootingSystem(this);
    this._resetPlayer();

    this.ui.setResources(this.inventory.counts);
    this.ui.setHP(this.player.hp);

    /* desbloqueia o áudio no primeiro gesto (à prova de falha) */
    const unlock = () => {
      try { this.audio.unlock(); } catch { /* sem áudio, o jogo segue */ }
    };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.setState('paused');
    });

    window.addEventListener('resize', () => {
      this.cameraRig.onResize(this.renderer.aspect);
    });

    this.setState('menu');
    this.renderer.three.setAnimationLoop((t) => this._frame(t));
  }

  _buildWorld() {
    if (this.worldGroup) {
      this.scene.remove(this.worldGroup);
    }
    this.worldGroup = new THREE.Group();
    this.scene.add(this.worldGroup);
    this.collision = new Collision();
    this.interaction.zones.clear();
    this.interaction.current = null;
    this.world = new World(this.worldGroup, this);
    this.particles = this.world.particles;
    this.lootedIds.clear();
    this.respawnedList = [];
  }

  _resetPlayer() {
    const s = this.world.spawn;
    this.player.setPosition(s.x, s.z);
    this.player.hp = 100;
    this.player.heading = Math.PI;
    this.cameraRig.follow(1, s.x, s.z, 0, 0, this.world.size);
    this._district = null;
  }

  /* ------------------------------------------------ estados */
  setState(s) {
    this.state = s;
    this.ui.setState(s);
    if (s === 'playing') {
      this.audio.startAmbient();
      this._checkDistrict(true);
    }
    /* pausou no volante? o motor fica em silêncio */
    if (s !== 'playing' && this.drivingSystem && this.drivingSystem.active) this.audio.stopEngine();
    if (s === 'menu') this.cameraRig.zoomReset?.();
  }

  menuAction(act) {
    if (act === 'new') this.newGame();
    else if (act === 'continue') this.continueGame();
    else if (act === 'quit') this.quitGame();
  }

  pauseAction(act) {
    if (act === 'resume') this.setState('playing');
    else if (act === 'save') { this.saveGame(); }
    else if (act === 'menu') this.toMenu();
    else if (act === 'quit') this.quitGame();
  }

  quitGame() {
    if (window.electronAPI && typeof window.electronAPI.closeWindow === 'function') {
      window.electronAPI.closeWindow();
      return;
    }
    if (window.electron && typeof window.electron.close === 'function') {
      window.electron.close();
      return;
    }
    try {
      window.close();
    } catch {}
    this.setState('quit');
  }

  newGame() {
    /* só reconstrói a cidade se algo já foi saqueado/modificado */
    if (this.lootedIds.size > 0 || this.respawnedList.length > 0) this._buildWorld();
    this.respawnedList = [];
    this.inventory.restore({ ...START_KIT });
    this._resetPlayer();
    this.setState('playing');
    this.ui.setHP(100);
    this.ui.toast('Você acorda na Base Águia. A cidade espera lá fora.', 'info', 4200);
    this.ui.toast('Dica: [E] vasculha caixas, carros e entulho.', 'loot', 5200);
  }

  continueGame() {
    const data = this.save.load();
    if (!data) {
      this.ui.toast('Nenhum save encontrado.', 'danger');
      return;
    }
    this._buildWorld();
    this.inventory.restore(data.inv || { ...START_KIT });
    this._resetPlayer();
    this.player.setPosition(data.player.x, data.player.z);
    this.player.hp = data.player.hp ?? 100;
    for (const id of data.looted || []) {
      this.interaction.markLooted(id);
      /* galões coletados não podem reaparecer no chão */
      if (id.startsWith('gas-')) this.world.removePropById(id);
    }
    this.respawnedList = [...(data.respawns || [])];
    this.world.restoreRespawns(data.respawns);
    this.setState('playing');
    this.ui.setHP(this.player.hp);
    this.ui.toast('Progresso restaurado. Boa sorte lá fora.', 'info');
  }

  toMenu() {
    if (this.drivingSystem && this.drivingSystem.active) this.drivingSystem.exit();
    this.setState('menu');
  }

  saveGame(silent = false) {
    const v = this.drivingSystem.active ? this.drivingSystem.vehicle : null;
    const px = v ? v.x : this.player.x;
    const pz = v ? v.z : this.player.z;
    const d = this.world.districtAt(px, pz);
    const ok = this.save.save({
      player: { x: px, z: pz, hp: this.player.hp },
      inv: this.inventory.snapshot(),
      looted: [...this.lootedIds],
      respawns: this.respawnedList,
      district: d.nome,
    });
    if (!silent) {
      if (ok) {
        this.audio.save();
        this.ui.toast('JOGO SALVO', 'heal');
      } else {
        this.ui.toast('Falha ao salvar.', 'danger');
      }
    }
    return ok;
  }

  addLootedId(id) { this.lootedIds.add(id); }

  /* um container saqueado renasceu noutro lugar — persiste no save */
  onContainerRespawned(oldId, info) {
    this.respawnedList = this.respawnedList.filter((r) => r.id !== oldId);
    this.respawnedList.push(info);
  }

  restAtBase() {
    this.player.hp = 100;
    this.ui.setHP(100);
    this.audio.heal();
    this.particles.burst(this.player.x, 1.2, this.player.z, 0x9fd8a0, 14);
    this.saveGame(true);
    this.ui.toast('Você descansou. Vida restaurada — jogo salvo.', 'heal', 3800);
  }

  useItem(id) {
    this.inventory.use(id);
    this.ui.inventoryUI.refresh(this.inventory.counts);
  }

  applyConfig(persist = true) {
    this.renderer.setPixelLevel(this.config.pixel ?? 1);
    this.cameraRig.onResize(this.renderer.aspect);
    this.audio.setVolume(this.config.volume ?? 0.7);
    this.audio.setMuted(!!this.config.muted);
    if (persist) this.save.saveConfig(this.config);
  }

  /* ------------------------------------------------ distrito / perigo */
  _checkDistrict(force = false, x = this.player.x, z = this.player.z) {
    const d = this.world.districtAt(x, z);
    if (force || !this._district || this._district.id !== d.id) {
      this._district = d;
      this.ui.setDistrict(d);
      this.ui.setHazard(!!d.hazard);
      if (!force) {
        if (d.hazard) this.ui.toast('ZONA ABANDONADA — escombros instáveis drenam sua vida.', 'danger', 4200);
        else if (d.safe) this.ui.toast('Base Águia — área segura. Sua vida regenera aqui.', 'heal');
      }
    }
  }

  _collapse() {
    if (this._collapsing) return;
    this._collapsing = true;
    if (this.drivingSystem.active) this.drivingSystem.exit();
    this.audio.hurt();
    this.ui.fadeTo(true);
    this.ui.toast('VOCÊ DESMAIOU — arrastado de volta à base.', 'danger', 4600);
    setTimeout(() => {
      const s = this.world.spawn;
      this.player.setPosition(s.x, s.z);
      this.player.hp = 60;
      this.ui.setHP(60);
      this._district = null;
      this._collapsing = false;
      this._checkDistrict(true);
      this.ui.fadeTo(false);
    }, 700);
  }

  /* ------------------------------------------------ loop */
  _frame(timestamp) {
    try {
      this._tick(timestamp);
    } catch (err) {
      showFatal(err);
      this.renderer.three.setAnimationLoop(null);
      return;
    }
  }

  _tick(timestamp) {
    const dt = this.time.update(timestamp);
    const t = this.time.now;
    const inp = this.input;

    /* zoom travado por design — o scroll não altera a câmera */
    inp.consumeWheel();

    switch (this.state) {
      case 'menu':
      case 'quit':
        this.world.update(dt, t);
        this.cameraRig.panMenu(t, this.world.size);
        break;

      case 'playing': {
        if (inp.wasPressed('Escape')) { this.setState('paused'); break; }
        const driving = this.drivingSystem.active;

        if (inp.wasPressed('KeyI')) {
          if (driving) {
            this.audio.denied();
            this.ui.toast('Saia do carro [E] para abrir a mochila.', 'info');
          } else {
            this.audio.uiClick();
            this.setState('inventory');
            break;
          }
        }

        /* atualiza mira do sistema de tiro com posição do mouse */
        if (!driving) {
          this.shootingSystem.setMousePosition(inp.mouseX, inp.mouseY);
        }

        // disparo: clique esquerdo do mouse (LMB) ou tecla F
        const isClick = inp.wasPressed('Mouse0') || inp.wasPressed('KeyF');
        const isHold = inp.isDown('Mouse0') && this.shootingSystem.isAiming;
        if (!driving && (isClick || isHold)) {
          this.shootingSystem.fire(isClick);
        }

        /* lanterna: L para ligar/desligar */
        if (!driving && inp.wasPressed('KeyL')) {
          const isOn = this.player.toggleLantern();
          this.ui.toast(isOn ? 'Lanterna LIGADA' : 'Lanterna DESLIGADA', 'info', 1500);
        }

        if (driving) {
          this.drivingSystem.update(dt);
          this.world.update(dt, t);
        } else {
          this.controller.update(dt);
          this.player.update(dt, t);
          this.world.update(dt, t);
          this.interaction.update(dt);
          this.shootingSystem.update(dt);
        }

        /* referência de posição: carro ou jogador */
        const v = this.drivingSystem.vehicle;
        const rx = v ? v.x : this.player.x;
        const rz = v ? v.z : this.player.z;
        this.cameraRig.follow(dt, rx, rz, (v ? v.vx : this.player.vx) * 0.55, (v ? v.vz : this.player.vz) * 0.55, this.world.size);

        this._districtTimer += dt;
        if (this._districtTimer > 0.25) {
          this._districtTimer = 0;
          this._checkDistrict(false, rx, rz);
        }

        const d = this._district;
        if (d && d.hazard) {
          this.player.hp -= 2.6 * dt;
          this._hazardTick += dt;
          if (this._hazardTick > 1.1) { this._hazardTick = 0; this.audio.hurt(); }
        } else if (d && d.safe && this.player.hp < 100) {
          this.player.hp = Math.min(100, this.player.hp + 4 * dt);
        }

        this._hpUiTimer += dt;
        if (this._hpUiTimer > 0.15) {
          this._hpUiTimer = 0;
          this.ui.setHP(this.player.hp);
        }
        if (this.player.hp <= 0 && !this._collapsing) this._collapse();
        break;
      }

      case 'inventory': {
        if (inp.wasPressed('Escape') || inp.wasPressed('KeyI')) {
          this.audio.uiBack();
          this.setState('playing');
          break;
        }
        for (let i = 0; i < 8; i++) {
          if (inp.wasPressed('Digit' + (i + 1))) this.useItem(SLOT_ORDER[i]);
        }
        break;
      }

      case 'paused': {
        if (inp.wasPressed('Escape')) this.setState('playing');
        break;
      }
    }

    inp.endFrame();
    this.renderer.render(this.scene, this.cameraRig.cam);
  }

  dispose() {
    this.renderer.three.setAnimationLoop(null);
    this.input.dispose();
    this.renderer.dispose();
    this.audio.dispose();
    this.ui.dispose();
  }
}
