/* World — montagem da cidade: luz, chão, prédios, veículos, props, base */
import * as THREE from 'three';
import { CityMap, GROUND } from './CityMap.js';
import { Collision } from './Collision.js';
import { Particles } from './Particles.js';
import { Building } from '../entities/Building.js';
import { Vehicle } from '../entities/Vehicle.js';
import { Tree, Bush, DeadTree } from '../entities/Tree.js';
import { makeProp } from '../entities/Prop.js';
import { PLOTS, VEHICLES, SPAWN, CELL } from '../data/city.js';
import { EXAMINE_NOTES, RADIO_MESSAGES } from '../data/items.js';
import { mulberry32, hash2 } from '../core/Util.js';
import { SOFT_TEX, TUFT_TEX, geoBox, matLambert } from './Textures.js';

export class World {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game;
    this.entities = [];
    this.animated = [];
    this.spawn = SPAWN;

    this.map = new CityMap();
    this.size = this.map.size;
    this.collision = game.collision;
    this.particles = new Particles(scene);

    this._plotRects = PLOTS.map((p) => ({ x0: p.x - 1.2, z0: p.z - 1.2, x1: p.x + p.w + 1.2, z1: p.z + p.d + 1.2 }));

    this._lights();
    this._ground();
    this._buildings();
    this._vehicles();
    this._base();
    this._districtProps();
    this._scatter();
    this._streetLamps();
    this._clouds();
  }

  /* ------------------------------------------------ luz */
  _lights() {
    const hemi = new THREE.HemisphereLight(0x95a2ae, 0x3c362a, 0.85);
    this.scene.add(hemi);

    this.sun = new THREE.DirectionalLight(0xffd9a0, 1.55);
    this.sun.position.set(66, 58, 72);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -46; sc.right = 46; sc.top = 46; sc.bottom = -46;
    sc.near = 5; sc.far = 160;
    this.sun.shadow.bias = -0.0009;
    this.sun.shadow.normalBias = 0.03;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    const fill = new THREE.DirectionalLight(0x6a7a90, 0.28);
    fill.position.set(-30, 40, -20);
    this.scene.add(fill);
  }

  /* ------------------------------------------------ chão */
  _ground() {
    const cv = this.map.paintCanvas();
    const tex = new THREE.CanvasTexture(cv);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(this.size, this.size),
      new THREE.MeshLambertMaterial({ map: tex, dithering: true })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(this.size / 2, 0, this.size / 2);
    mesh.receiveShadow = true;
    this.scene.add(mesh);

    /* limites do mundo: muretas invisíveis */
    const S = this.size;
    this.collision.addRect(-20, -20, S + 20, 0.6, 'bound');
    this.collision.addRect(-20, S - 0.6, S + 20, S + 20, 'bound');
    this.collision.addRect(-20, 0, 0.6, S, 'bound');
    this.collision.addRect(S - 0.6, 0, S + 20, S, 'bound');
  }

  /* ------------------------------------------------ prédios */
  _buildings() {
    for (const plot of PLOTS) {
      const b = new Building(this.scene, plot, this.game);
      this.entities.push(b);
      if (plot.roof === 'factory' && b.chimneyTop) {
        const cx = plot.x + plot.w / 2, cz = plot.z + plot.d / 2;
        this.particles.smoke(cx + b.chimneyTop.x, b.chimneyTop.y, cz + b.chimneyTop.z, { rate: 2.6, color: 0x84847c, size: 1.3 });
      }
    }
  }

  /* ------------------------------------------------ veículos */
  _vehicles() {
    for (const def of VEHICLES) {
      const v = new Vehicle(this.scene, def, this.game);
      this.entities.push(v);
      if (def.loot) {
        this.game.interaction.register({
          id: 'car-' + def.id, x: def.x, z: def.z, r: 2.2,
          label: 'ABRIR PORTA-MALAS', kind: 'loot', table: def.loot, host: v,
        });
      } else if (def.burnt) {
        this.game.interaction.register({
          id: 'car-' + def.id, x: def.x, z: def.z, r: 2.0,
          label: 'EXAMINAR CARCAÇA', kind: 'examine',
          text: [
            'O calor derreteu o volante. Não sobrou nada útil.',
            'Marcas de bala na lataria. Alguém não chegou a tempo de sair.',
            'O tanque está vazio. Ou alguém já levou o que restava.',
          ],
        });
      }
    }
  }

  /* ------------------------------------------------ helpers de prop */
  _addProp(type, x, z, opts = {}) {
    const p = makeProp(this.scene, type, x, z, { rng: mulberry32((x * 97 + z * 31) | 0), ...opts });
    for (const [dx, dz, w, d] of p.colliders) this.collision.addBox(x + dx, z + dz, w, d, 'prop');
    if (p.update) this.animated.push(p);
    return p;
  }

  _hostFor(type, p) {
    const tilt = () => {
      p.group.rotation.z = 0.32;
      p.group.rotation.x = 0.18;
      p.group.position.y = -0.12;
    };
    switch (type) {
      case 'dumpster': return { applyLooted: () => { if (p.extras.lid) p.extras.lid.rotation.x = -1.25; } };
      case 'fridge': return { applyLooted: () => { if (p.extras.lid) p.extras.lid.rotation.x = -0.9; p.group.rotation.y += 0.25; } };
      case 'rubblePile': return { applyLooted: () => { p.group.scale.set(1.15, 0.32, 1.15); } };
      default: return { applyLooted: tilt };
    }
  }

  _loot(id, type, table, label, x, z, opts = {}) {
    const p = this._addProp(type, x, z, opts);
    this.game.interaction.register({ id, x, z, r: 1.7, label, kind: 'loot', table, host: this._hostFor(type, p) });
    return p;
  }

  _examine(id, type, text, x, z, opts = {}) {
    const p = this._addProp(type, x, z, opts);
    this.game.interaction.register({ id, x, z, r: 1.8, label: opts.verb || 'EXAMINAR', kind: 'examine', text });
    return p;
  }

  /* ------------------------------------------------ BASE ÁGUIA */
  _base() {
    const F = (len, x, z, vertical = false) => this._addProp('fence', x, z, { len, vertical });
    F(25, 0.7, 178.5, true);
    F(6, 15.3, 169, true);
    F(13, 15.3, 184.5, true);
    F(14.6, 8, 166.1);
    F(14.6, 8, 190.9);

    const fire = this._addProp('campfire', 8, 171);
    this.particles.smoke(8, 0.6, 171, { rate: 1.6, color: 0x9a9a90, size: 0.7 });
    this.game.interaction.register({
      id: 'base-campfire', x: 8, z: 171, r: 1.7, label: 'EXAMINAR FOGUEIRA', kind: 'examine',
      text: 'As brasas ainda estalam. Alguém esteve aqui há pouco tempo.',
    });
    void fire;

    this._addProp('bedroll', 12.3, 181.5);
    this.game.interaction.register({
      id: 'base-bed', x: 12.3, z: 181.5, r: 1.7, label: 'DORMIR — RECUPERAR E SALVAR', kind: 'use',
      onUse: () => this.game.restAtBase(),
    });

    this._addProp('radio', 12.6, 177.1);
    this.game.interaction.register({
      id: 'base-radio', x: 12.6, z: 177.1, r: 1.6, label: 'LIGAR RÁDIO', kind: 'use',
      onUse: () => {
        this.game.audio.radio();
        this.game.ui.toast(RADIO_MESSAGES[Math.floor(Math.random() * RADIO_MESSAGES.length)], 'info', 4600);
      },
    });

    this._addProp('flagpole', 4.5, 187);
    this._addProp('sandbags', 14.4, 171.2, { vertical: true });
    this._addProp('sandbags', 14.4, 178.6, { vertical: true });
    this._addProp('generator', 5.6, 186.4);
    this._loot('base-crate1', 'crate', 'crate', 'VASCULHAR CAIXA', 5.6, 169.4);
    this._loot('base-crate2', 'crate', 'crate', 'VASCULHAR CAIXA', 6.9, 170.0);
    this._addProp('barrel', 13.4, 168.8);
    this._addProp('crateStack', 3.4, 170.6);

    this._examine('sign-base', 'signPost', 'O portão range, mas as sandbags dizem: este lugar ainda é defendido.', 21.5, 175, {
      text: 'BASE ÁGUIA', bg: '#3a4430', fg: '#e8d870', verb: 'LER PLACA',
    });
  }

  /* ------------------------------------------------ props por distrito */
  _districtProps() {
    const P = Object.fromEntries(PLOTS.map((p) => [p.id, p]));
    const back = (p, side = 'e') => side === 'e'
      ? [p.x + p.w + 1.5, p.z + p.d / 2]
      : [p.x - 1.5, p.z + p.d / 2];

    /* ---- RESIDENCIAL: geladeiras e caixas nos quintais ---- */
    ['H1', 'H3', 'H5', 'H9', 'H12', 'H15', 'H17', 'H19'].forEach((id, i) => {
      const [x, z] = back(P[id]);
      this._loot(`fridge-${id}`, 'fridge', 'fridge', 'ABRIR GELADEIRA', x, z);
      if (i % 2 === 0) this._loot(`crate-${id}`, 'crate', 'crate', 'VASCULHAR CAIXA', x + 0.3, z + 2.0);
    });
    ['H2', 'H4', 'H10', 'H13', 'H16', 'H20'].forEach((id, i) => {
      const [x, z] = back(P[id], i % 2 ? 'w' : 'e');
      this._loot(`crate2-${id}`, 'crate', i % 3 === 0 ? 'shelf' : 'crate', 'VASCULHAR CAIXA', x, z);
    });
    this._loot('dump-h7', 'dumpster', 'dumpster', 'REVIRAR CAÇAMBA', P.H7.x - 1.8, P.H7.z + 1.4);
    this._examine('mail-1', 'mailbox', EXAMINE_NOTES, 18.6, 8.5, { verb: 'ABRIR CAIXA DE CORREIO' });
    this._examine('mail-2', 'mailbox', EXAMINE_NOTES, 42.5, 122.5, { verb: 'ABRIR CAIXA DE CORREIO' });

    /* ---- COMERCIAL ---- */
    this._loot('dump-c1a', 'dumpster', 'dumpster', 'REVIRAR CAÇAMBA', P.C1.x + P.C1.w / 2, P.C1.z - 1.6);
    this._loot('dump-c1b', 'dumpster', 'dumpster', 'REVIRAR CAÇAMBA', P.C1.x + P.C1.w / 2 + 2.9, P.C1.z - 1.6);
    this._loot('cab-c2a', 'cabinet', 'cabinet', 'ABRIR ARMÁRIO', P.C2.x + P.C2.w + 1.3, P.C2.z + 1.4);
    this._loot('cab-c2b', 'cabinet', 'cabinet', 'ABRIR ARMÁRIO', P.C2.x + P.C2.w + 1.3, P.C2.z + 3.2);
    this._loot('fridge-c3', 'fridge', 'fridge', 'ABRIR GELADEIRA', P.C3.x + P.C3.w + 1.4, P.C3.z + 2);
    this._loot('trash-c3', 'trashcan', 'dumpster', 'REVIRAR LIXEIRA', P.C3.x - 1.2, P.C3.z + 1);
    this._loot('stack-c4a', 'crateStack', 'shelf', 'VASCULHAR ESTOQUE', P.C4.x + P.C4.w / 2, P.C4.z + P.C4.d + 1.6);
    this._loot('stack-c4b', 'crateStack', 'crate', 'VASCULHAR ESTOQUE', P.C4.x + P.C4.w / 2 + 2.6, P.C4.z + P.C4.d + 1.6);
    this._loot('trash-c5', 'trashcan', 'dumpster', 'REVIRAR LIXEIRA', P.C5.x - 1.2, P.C5.z + 2);
    this._addProp('container', 100.5, 116.5, { color: 0x8a5438 }).group.rotation.y = 0.05;
    this._examine('sign-park', 'signPost', 'Trinta minutos. O parquímetro está crivado de bala; ninguém cronometra mais nada.', 57, 117.5, {
      text: 'ESTACIONAMENTO 30 MIN', verb: 'LER PLACA',
    });

    /* ---- CENTRAL ---- */
    this._loot('safe-t2', 'locker', 'safe', 'ABRIR COFRE', P.T2.x + P.T2.w + 1.4, P.T2.z + P.T2.d / 2);
    this._loot('trash-t1', 'trashcan', 'dumpster', 'REVIRAR LIXEIRA', P.T1.x - 1.2, P.T1.z + P.T1.d / 2);
    this._loot('crate-t5', 'crate', 'shelf', 'VASCULHAR CAIXA', P.T5.x + P.T5.w + 1.2, P.T5.z + 1);
    this._addProp('busStop', 57, 29.6);
    this._examine('sign-center', 'signPost', 'O letreiro do banco ainda acende à noite. Por quê, ninguém sabe.', 66.5, 29.5, {
      text: 'AV. CENTRAL', verb: 'LER PLACA',
    });

    /* ---- INDUSTRIAL ---- */
    this._loot('stack-i1a', 'crateStack', 'crate', 'VASCULHAR ESTOQUE', P.I1.x - 1.6, P.I1.z + 2);
    this._loot('stack-i1b', 'crateStack', 'crate', 'VASCULHAR ESTOQUE', P.I1.x - 1.6, P.I1.z + 4.4);
    this._loot('lock-i1', 'locker', 'locker', 'ABRIR ARMÁRIO', P.I1.x - 1.5, P.I1.z + P.I1.d - 1);
    this._loot('bar-i2a', 'barrel', 'barrel', 'VASCULHAR BARRIL', P.I2.x - 1.5, P.I2.z + 1);
    this._loot('bar-i2b', 'barrel', 'barrel', 'VASCULHAR BARRIL', P.I2.x - 1.5, P.I2.z + 2.6);
    this._loot('lock-i5a', 'locker', 'locker', 'ABRIR ARMÁRIO', P.I5.x + P.I5.w + 1.3, P.I5.z + 1);
    this._loot('lock-i5b', 'locker', 'locker', 'ABRIR ARMÁRIO', P.I5.x + P.I5.w + 1.3, P.I5.z + 2.8);
    this._loot('crate-i5', 'crate', 'crate', 'VASCULHAR CAIXA', P.I5.x - 1.4, P.I5.z + 1.4);
    /* pátio */
    this._addProp('container', 170.5, 40.5, { color: 0x3f5a44 }).group.rotation.y = 0.04;
    this._addProp('container', 170.5, 47.5, { color: 0x6a4a3a }).group.rotation.y = -0.03;
    this._addProp('container', 178, 44, { color: 0x4a5a6a }).group.rotation.y = 1.57;
    this._addProp('waterTower', 176.5, 51.5);
    this._addProp('tireStack', 169.5, 52);
    this._addProp('barrelTipped', 173.5, 53.5);
    this._addProp('pallet', 166.8, 44);
    this._addProp('generator', 165.5, 52.5);
    this._loot('bar-yard', 'barrel', 'barrel', 'VASCULHAR BARRIL', 173, 38.5);

    /* ---- ABANDONADA ---- */
    const ruins = ['A1', 'A2', 'A3', 'A5', 'A6', 'A7', 'A9'];
    ruins.forEach((id, i) => {
      const p = P[id];
      const px = p.x > 142 ? p.x + p.w + 1.6 : p.x - 1.7;
      this._loot(`pile-${id}`, 'rubblePile', 'rubble', 'VASCULHAR ENTULHO', px, p.z + p.d * 0.5 + (i % 2) * 1.5);
    });
    this._loot('cab-a2a', 'cabinet', 'cabinet', 'ABRIR ARMÁRIO', P.A2.x + P.A2.w + 1.4, P.A2.z + 1.2);
    this._loot('cab-a2b', 'cabinet', 'cabinet', 'ABRIR ARMÁRIO', P.A2.x + P.A2.w + 1.4, P.A2.z + 3.0);
    this._loot('fridge-a5', 'fridge', 'fridge', 'ABRIR GELADEIRA', P.A5.x + P.A5.w + 1.5, P.A5.z + 2);
    this._loot('crate-a7', 'crate', 'crate', 'VASCULHAR CAIXA', P.A7.x + P.A7.w + 1.5, P.A7.z + 1.5);
    this._loot('lock-a6', 'locker', 'locker', 'ABRIR ARMÁRIO', P.A6.x - 1.4, P.A6.z + 2);
    this._loot('dump-a9', 'dumpster', 'dumpster', 'REVIRAR CAÇAMBA', P.A9.x + P.A9.w + 1.6, P.A9.z + 1.5, { color: 0x4a4438 });
    this._addProp('rubbleMound', 134, 94);
    this._addProp('rubbleMound', 150, 122);
    this._addProp('rubbleMound', 122, 140);
    this._examine('sign-east', 'signPost', 'A tinta vermelha escorreu com a chuva. O aviso continua valendo.', 105.5, 137.5, {
      text: 'ZONA LESTE — PERIGO', bg: '#4a2018', fg: '#e0b0a0', verb: 'LER AVISO',
    });
  }

  /* ------------------------------------------------ vegetação e espalhe determinístico */
  _scatter() {
    const rng = mulberry32(4242);
    const free = (x, z, pad = 1.6) => {
      for (const r of this._plotRects)
        if (x > r.x0 - pad && x < r.x1 + pad && z > r.z0 - pad && z < r.z1 + pad) return false;
      const c = this.map.cellAt(x, z);
      return c !== GROUND.ROAD && c !== GROUND.AVENUE && c !== GROUND.SIDEWALK && c !== GROUND.CAMP;
    };

    const plant = (districtCells, type, count, groundTypes) => {
      let placed = 0, tries = 0;
      while (placed < count && tries < count * 40) {
        tries++;
        const [cx0, cz0, cx1, cz1] = districtCells;
        const x = (cx0 + rng() * (cx1 - cx0)) * CELL + 2;
        const z = (cz0 + rng() * (cz1 - cz0)) * CELL + 2;
        if (!groundTypes.includes(this.map.cellAt(x, z)) || !free(x, z)) continue;
        if (type === 'tree') new Tree(this.scene, x, z, 2.6 + rng() * 1.7, (rng() * 3) | 0, this.game);
        else if (type === 'bush') new Bush(this.scene, x, z, 1 + rng() * 0.7, this.game);
        else if (type === 'dead') new DeadTree(this.scene, x, z, 2.4 + rng() * 1.4, this.game);
        else if (type === 'mound') this._addProp('rubbleMound', x, z);
        placed++;
      }
    };

    plant([0, 0, 12, 14], 'tree', 16, [GROUND.GRASS]);
    plant([0, 17, 12, 30], 'tree', 12, [GROUND.GRASS]);
    plant([5, 33, 26, 47], 'tree', 9, [GROUND.GRASS]);
    plant([0, 0, 12, 30], 'bush', 14, [GROUND.GRASS]);
    plant([5, 33, 26, 47], 'bush', 6, [GROUND.GRASS]);
    plant([29, 17, 47, 47], 'dead', 11, [GROUND.RUBBLE, GROUND.DIRT]);
    plant([29, 17, 47, 47], 'mound', 6, [GROUND.RUBBLE]);

    /* tufos de grama — InstancedMesh */
    const tuftGeo = new THREE.PlaneGeometry(0.6, 0.6);
    tuftGeo.rotateX(-Math.PI / 2);
    const tuftMat = new THREE.MeshLambertMaterial({ map: TUFT_TEX, alphaTest: 0.4 });
    const tufts = new THREE.InstancedMesh(tuftGeo, tuftMat, 420);
    const dummy = new THREE.Object3D();
    let ti = 0;
    while (ti < 420) {
      const x = rng() * this.size, z = rng() * this.size;
      if (this.map.cellAt(x, z) !== GROUND.GRASS) continue;
      dummy.position.set(x, 0.06, z);
      dummy.rotation.y = rng() * Math.PI;
      dummy.scale.setScalar(0.7 + rng() * 0.8);
      dummy.updateMatrix();
      tufts.setMatrixAt(ti, dummy.matrix);
      const sh = 0.75 + rng() * 0.3;
      tufts.setColorAt(ti, new THREE.Color(sh, sh, sh));
      ti++;
    }
    tufts.instanceColor.needsUpdate = true;
    this.scene.add(tufts);

    /* entulho miúdo — InstancedMesh */
    const bitGeo = geoBox(0.34, 0.2, 0.34);
    const bitMat = matLambert(0xffffff);
    const bits = new THREE.InstancedMesh(bitGeo, bitMat, 300);
    let bi = 0;
    while (bi < 300) {
      const x = rng() * this.size, z = rng() * this.size;
      const c = this.map.cellAt(x, z);
      if (c !== GROUND.RUBBLE && c !== GROUND.DIRT) continue;
      dummy.position.set(x, 0.1, z);
      dummy.rotation.y = rng() * Math.PI;
      dummy.scale.setScalar(0.6 + rng() * 1.1);
      dummy.updateMatrix();
      bits.setMatrixAt(bi, dummy.matrix);
      bits.setColorAt(bi, new THREE.Color().setHSL(0.08 + rng() * 0.05, 0.12, 0.28 + rng() * 0.2));
      bi++;
    }
    bits.instanceColor.needsUpdate = true;
    bits.castShadow = true;
    this.scene.add(bits);
  }

  /* ------------------------------------------------ postes de luz (instanciados) */
  _streetLamps() {
    const spots = [];
    const tryCell = (cx, cz, ox = 0, oz = 0) => {
      if (cx < 1 || cz < 1 || cx >= 47 || cz >= 47) return;
      if (this.map.grid[cz * 48 + cx] === GROUND.SIDEWALK) spots.push([cx * CELL + 2 + ox, cz * CELL + 2 + oz]);
    };
    for (let z = 2; z < 47; z += 4) { tryCell(10, z, -0.8); tryCell(13, z, 0.8); tryCell(26, z, -0.8); tryCell(29, z, 0.8); }
    for (let x = 2; x < 47; x += 5) { tryCell(x, 14, 0, -0.8); tryCell(x, 17, 0, 0.8); tryCell(x, 30, 0, -0.8); tryCell(x, 33, 0, 0.8); }

    const dark = matLambert(0x2c2e30);
    const head = matLambert(0x8d9096);
    const poleG = geoBox(0.18, 3.6, 0.18);
    const armG = geoBox(1.1, 0.12, 0.12);
    const headG = geoBox(0.55, 0.2, 0.35);
    const dummy = new THREE.Object3D();
    const mk = (geo, mat, fn) => {
      const im = new THREE.InstancedMesh(geo, mat, spots.length);
      spots.forEach((s, i) => { fn(dummy, s); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); });
      im.castShadow = true;
      this.scene.add(im);
      return im;
    };
    mk(poleG, dark, (d, [x, z]) => d.position.set(x, 1.8, z));
    mk(armG, dark, (d, [x, z]) => d.position.set(x + 0.55, 3.55, z));
    mk(headG, head, (d, [x, z]) => d.position.set(x + 1.05, 3.48, z));

    /* hidrantes e detalhes de esquina */
    const rng = mulberry32(99);
    let placed = 0;
    for (let i = 0; i < 160 && placed < 9; i++) {
      const x = rng() * this.size, z = rng() * this.size;
      if (this.map.cellAt(x, z) !== GROUND.SIDEWALK) continue;
      this._addProp(rng() < 0.5 ? 'hydrant' : 'trashcan', x, z);
      placed++;
    }
  }

  /* ------------------------------------------------ nuvens (sombras ambientes) */
  _clouds() {
    this.clouds = [];
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: SOFT_TEX, color: 0x10141a, transparent: true,
        opacity: 0.13 - i * 0.02, depthWrite: false,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(46 + i * 14, 34 + i * 10), mat);
      m.rotation.x = -Math.PI / 2;
      m.position.set((i * 70 + 30) % this.size, 62, (i * 55 + 40) % this.size);
      this.scene.add(m);
      this.clouds.push(m);
    }
  }

  /* ------------------------------------------------ loop */
  update(dt, t) {
    for (const e of this.entities) e.update(dt, t);
    for (const a of this.animated) a.update(dt, t);
    for (const c of this.clouds) {
      c.position.x += dt * 1.1;
      if (c.position.x > this.size + 40) c.position.x = -40;
    }
    this.particles.update(dt);

    /* sol segue o jogador para sombras sempre nítidas por perto */
    const p = this.game.player;
    if (p) {
      this.sun.position.set(p.x - 26, 52, p.z - 18);
      this.sun.target.position.set(p.x, 0, p.z);
    }
  }

  districtAt(x, z) { return this.map.districtAt(x, z); }
}
