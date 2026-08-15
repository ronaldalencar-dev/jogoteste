/* Building — prédios 3D com telhados detalhados (vista top-down) */
import * as THREE from 'three';
import { Entity } from './Entity.js';
import {
  WALL_TEX, WALL_TEX_DMG, WALL_PALETTES,
  geoBox, geoCyl, matLambert, matBasic, matTex, GLASS_TEX, signTex, mulberrySeed,
} from './building-assets.js';

const PPR = 2.5; // px por unidade no telhado

function roofBaseColor(plot) {
  switch (plot.roof) {
    case 'gable': return ['#7c4a38', '#64503c', '#6e7276', '#4e5258'][plot.pal] || '#7c4a38';
    case 'corrugated': case 'kiosk': return '#6e7478';
    case 'factory': case 'garage': return '#5d6367';
    case 'cinema': return '#3e4248';
    case 'ruin': return '#5e5a52';
    case 'collapsed': return '#57503f';
    case 'bunker': return '#4c5048';
    default: return '#585c62';
  }
}

function drawRoof(ctx, w, d, plot, rng) {
  const base = roofBaseColor(plot);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, d);

  const shade = (hex, amt) => {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.max(0, Math.min(255, (n >> 16) + amt));
    const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amt));
    const b = Math.max(0, Math.min(255, (n & 255) + amt));
    return `rgb(${r},${g},${b})`;
  };

  /* textura base */
  if (plot.roof === 'gable') {
    /* duas águas + cumeeira */
    ctx.fillStyle = shade(base, -14);
    ctx.fillRect(0, 0, w, d / 2);
    ctx.fillStyle = shade(base, 10);
    ctx.fillRect(0, d / 2, w, d / 2);
    ctx.fillStyle = shade(base, 34);
    ctx.fillRect(0, d / 2 - 1, w, 2);
    ctx.fillStyle = shade(base, -26);
    for (let y = 2; y < d; y += 4) ctx.fillRect(0, y, w, 1);
  } else if (plot.roof === 'corrugated' || plot.roof === 'factory' || plot.roof === 'garage' || plot.roof === 'kiosk') {
    for (let x = 0; x < w; x += 4) {
      ctx.fillStyle = (x / 4) % 2 === 0 ? shade(base, -10) : shade(base, 8);
      ctx.fillRect(x, 0, 2, d);
    }
  } else {
    /* cascalho / piche */
    for (let i = 0; i < w * d * 0.14; i++) {
      ctx.fillStyle = rng() < 0.5 ? shade(base, -8) : shade(base, 8);
      ctx.fillRect((rng() * w) | 0, (rng() * d) | 0, 1, 1);
    }
    ctx.strokeStyle = shade(base, -18);
    ctx.globalAlpha = 0.5;
    for (let x = 8; x < w; x += 20) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, d); ctx.stroke(); }
    for (let y = 8; y < d; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    ctx.globalAlpha = 1;
  }

  /* manchas de piche */
  const tars = 1 + ((rng() * 3) | 0);
  for (let i = 0; i < tars; i++) {
    ctx.fillStyle = 'rgba(20,21,24,0.45)';
    const tx = rng() * w, ty = rng() * d;
    ctx.beginPath();
    ctx.ellipse(tx, ty, 3 + rng() * 8, 2 + rng() * 6, rng() * 3, 0, 7);
    ctx.fill();
  }

  /* ferrugem escorrendo */
  const rusts = 2 + ((rng() * 4) | 0);
  for (let i = 0; i < rusts; i++) {
    const rx = (rng() * w) | 0, ry = (rng() * d) | 0;
    ctx.fillStyle = `rgba(122,74,42,${0.25 + rng() * 0.3})`;
    ctx.fillRect(rx, ry, 2 + ((rng() * 4) | 0), 2 + ((rng() * 3) | 0));
    ctx.fillStyle = 'rgba(122,74,42,0.22)';
    ctx.fillRect(rx, ry, 1, 4 + ((rng() * 10) | 0));
  }

  /* claraboias (galpões) */
  if (plot.roof === 'factory' || plot.roof === 'garage' || plot.roof === 'corrugated') {
    const rows = plot.roof === 'corrugated' ? 2 : 2;
    for (let r = 0; r < rows; r++) {
      const sy = d * (0.28 + r * 0.36);
      for (let sx = 6; sx < w - 12; sx += 12) {
        ctx.fillStyle = '#2c343a';
        ctx.fillRect(sx - 1, sy - 1, 9, 6);
        ctx.fillStyle = '#3a4a52';
        ctx.fillRect(sx, sy, 7, 4);
        ctx.fillStyle = '#54666e';
        ctx.fillRect(sx, sy, 7, 1);
      }
    }
  }

  /* heliponto */
  if (plot.helipad) {
    const cx = w / 2, cy = d / 2, r = Math.min(w, d) * 0.3;
    ctx.strokeStyle = '#c8c040';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.stroke();
    ctx.fillStyle = '#c8c040';
    ctx.fillRect(cx - r * 0.42, cy - r * 0.5, 3, r);
    ctx.fillRect(cx + r * 0.42 - 3, cy - r * 0.5, 3, r);
    ctx.fillRect(cx - r * 0.42, cy - 1, r * 0.84, 3);
    for (let a = 0; a < 8; a++) {
      const an = (a / 8) * Math.PI * 2;
      ctx.fillRect(cx + Math.cos(an) * (r + 3) - 1, cy + Math.sin(an) * (r + 3) - 1, 2, 2);
    }
  }

  /* vegetação nas bordas */
  const weedChance = plot.damage ? 0.8 : plot.type === 'house' ? 0.5 : 0.3;
  if (rng() < weedChance) {
    ctx.fillStyle = '#4a6a34';
    for (let i = 0; i < 26; i++) {
      const edge = (rng() * 4) | 0;
      const px = edge === 0 ? rng() * w : edge === 1 ? rng() * w : rng() < 0.5 ? 1 : w - 2;
      const py = edge < 2 ? (rng() < 0.5 ? 1 : d - 2) : rng() * d;
      ctx.fillRect(px | 0, py | 0, 1 + ((rng() * 2) | 0), 1 + ((rng() * 2) | 0));
    }
  }

  /* dano: buracos + trincas */
  const dmg = plot.damage || 0;
  for (let h = 0; h < dmg; h++) {
    const hx = w * (0.2 + rng() * 0.6), hy = d * (0.2 + rng() * 0.6);
    const hr = (3 + dmg * 3 + rng() * 5) * (h === 0 ? 1.4 : 0.8);
    ctx.fillStyle = '#191a1e';
    ctx.beginPath();
    for (let a = 0; a <= 10; a++) {
      const an = (a / 10) * Math.PI * 2;
      const rr = hr * (0.7 + rng() * 0.5);
      const vx = hx + Math.cos(an) * rr, vy = hy + Math.sin(an) * rr * 0.8;
      if (a === 0) ctx.moveTo(vx, vy); else ctx.lineTo(vx, vy);
    }
    ctx.fill();
    ctx.fillStyle = '#0d0e11';
    ctx.beginPath(); ctx.ellipse(hx, hy, hr * 0.55, hr * 0.42, 0, 0, 7); ctx.fill();
    ctx.strokeStyle = '#6a3a2a';
    ctx.lineWidth = 1;
    for (let rb = 0; rb < 4; rb++) {
      ctx.beginPath();
      ctx.moveTo(hx - hr, hy + (rng() - 0.5) * hr);
      ctx.lineTo(hx + hr, hy + (rng() - 0.5) * hr);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(15,16,19,0.8)';
    for (let cr = 0; cr < 5; cr++) {
      const an = rng() * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(hx + Math.cos(an) * hr, hy + Math.sin(an) * hr);
      ctx.lineTo(hx + Math.cos(an) * (hr + 6 + rng() * 10), hy + Math.sin(an) * (hr + 6 + rng() * 10));
      ctx.stroke();
    }
  }

  /* AO das bordas + luz oeste */
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 3;
  ctx.strokeRect(1, 1, w - 2, d - 2);
  ctx.strokeStyle = 'rgba(0,0,0,0.22)';
  ctx.lineWidth = 2;
  ctx.strokeRect(4, 4, w - 8, d - 8);
  ctx.fillStyle = 'rgba(255,246,220,0.13)';
  ctx.fillRect(2, 2, 2, d - 4);
}

export class Building extends Entity {
  constructor(scene, plot, game) {
    super(scene);
    this.plot = plot;
    const cx = plot.x + plot.w / 2;
    const cz = plot.z + plot.d / 2;
    this.group.position.set(cx, 0, cz);

    const rng = mulberrySeed(plot.id);
    const pal = WALL_PALETTES[plot.pal] || WALL_PALETTES[0];
    const damaged = (plot.damage || 0) >= 1;

    /* corpo */
    const wallSrc = (damaged ? WALL_TEX_DMG : WALL_TEX)[plot.pal] || WALL_TEX[0];
    const wallTex = wallSrc.clone();
    wallTex.repeat.set(Math.max(1, plot.w / 7), Math.max(1, plot.h / 7));
    wallTex.needsUpdate = true;
    const wallMat = new THREE.MeshLambertMaterial({ map: wallTex });

    const roofCv = document.createElement('canvas');
    roofCv.width = Math.max(16, Math.round(plot.w * PPR));
    roofCv.height = Math.max(16, Math.round(plot.d * PPR));
    drawRoof(roofCv.getContext('2d'), roofCv.width, roofCv.height, plot, rng);
    const roofTex = new THREE.CanvasTexture(roofCv);
    roofTex.magFilter = THREE.NearestFilter;
    roofTex.minFilter = THREE.NearestFilter;
    roofTex.generateMipmaps = false;
    roofTex.colorSpace = THREE.SRGBColorSpace;
    const roofMat = new THREE.MeshLambertMaterial({ map: roofTex });

    const body = new THREE.Mesh(
      geoBox(plot.w, plot.h, plot.d),
      [wallMat, wallMat, roofMat, matLambert(0x2a2a2e), wallMat, wallMat]
    );
    body.position.y = plot.h / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    this.group.add(body);
    this.body = body;

    /* platibanda (exceto telhados inclinados/ruínas) */
    if (plot.roof !== 'gable' && plot.roof !== 'collapsed') {
      const ph = plot.type === 'ruin' && (plot.damage || 0) >= 2 ? 0.25 : 0.55;
      const pm = matLambert(new THREE.Color(pal.base).multiplyScalar(0.9).getHex());
      const t = 0.35;
      const mk = (w2, d2, x, z) => {
        const m = new THREE.Mesh(geoBox(w2, ph, d2), pm);
        m.position.set(x, plot.h + ph / 2, z);
        m.castShadow = true;
        this.group.add(m);
      };
      mk(plot.w + t, t, 0, -plot.d / 2);
      mk(plot.w + t, t, 0, plot.d / 2);
      mk(t, plot.d, -plot.w / 2, 0);
      mk(t, plot.d, plot.w / 2, 0);
    }

    this._roofProps(rng, pal);
    this._groundDebris(rng);

    if (game) {
      game.collision.addBox(cx, cz, plot.w, plot.d, 'building');
    }
  }

  _add(mesh, x, z, y) {
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    this.group.add(mesh);
    return mesh;
  }

  _roofProps(rng, pal) {
    const top = this.plot.h;
    const hw = this.plot.w / 2 - 1, hd = this.plot.d / 2 - 1;
    const spot = () => [(rng() * 2 - 1) * hw, (rng() * 2 - 1) * hd];
    const metal = matLambert(0x8a9094);
    const rust = matLambert(0x7a5a44);
    const dark = matLambert(0x46494e);

    const acUnit = () => {
      const [x, z] = spot();
      this._add(new THREE.Mesh(geoBox(1.3, 0.8, 1.1), rng() < 0.4 ? rust : metal), x, z, top + 0.4);
      this._add(new THREE.Mesh(geoBox(0.9, 0.1, 0.7), dark), x, z, top + 0.85);
    };
    const vent = () => {
      const [x, z] = spot();
      this._add(new THREE.Mesh(geoCyl(0.32, 0.4, 0.7, 8), metal), x, z, top + 0.35);
      this._add(new THREE.Mesh(geoCyl(0.44, 0.44, 0.14, 8), dark), x, z, top + 0.75);
    };
    const waterTank = () => {
      const [x, z] = spot();
      const g = new THREE.Group();
      const tank = new THREE.Mesh(geoCyl(1.0, 1.05, 1.7, 10), rng() < 0.5 ? rust : matLambert(0x6a7076));
      tank.position.y = 1.5; tank.castShadow = true;
      const cap = new THREE.Mesh(geoCyl(0.2, 1.02, 0.35, 10), dark);
      cap.position.y = 2.5; cap.castShadow = true;
      g.add(tank, cap);
      for (let i = 0; i < 4; i++) {
        const leg = new THREE.Mesh(geoBox(0.14, 1.6, 0.14), dark);
        leg.position.set(Math.cos(i * Math.PI / 2) * 0.8, 0.8, Math.sin(i * Math.PI / 2) * 0.8);
        leg.castShadow = true;
        g.add(leg);
      }
      g.position.set(x, top, z);
      this.group.add(g);
    };
    const antenna = () => {
      const [x, z] = spot();
      const hgt = 2.4 + rng() * 2;
      this._add(new THREE.Mesh(geoBox(0.12, hgt, 0.12), dark), x, z, top + hgt / 2);
      for (let b = 0; b < 3; b++)
        this._add(new THREE.Mesh(geoBox(1.1 - b * 0.28, 0.07, 0.07), metal), x, z, top + hgt * 0.55 + b * 0.5);
      const light = new THREE.Mesh(geoBox(0.18, 0.18, 0.18), matBasic(0xe03828));
      light.position.set(x, top + hgt + 0.15, z);
      this.group.add(light);
      this.onUpdate((dt, t) => { light.visible = ((t * 1.6) | 0) % 2 === 0; });
    };
    const bulkhead = () => {
      const [x, z] = spot();
      this._add(new THREE.Mesh(geoBox(2.6, 2.4, 2.2), matLambert(new THREE.Color(pal.base).multiplyScalar(0.95).getHex())), x, z, top + 1.2);
      this._add(new THREE.Mesh(geoBox(0.9, 1.3, 0.1), dark), x, z - 1.12, top + 0.75);
    };
    const chimneyBrick = (big) => {
      const [x, z] = spot();
      const s = big ? 1.9 : 1.0, h = big ? 3.4 : 1.7;
      this._add(new THREE.Mesh(geoBox(s, h, s), matLambert(0x6e4434)), x, z, top + h / 2);
      this._add(new THREE.Mesh(geoBox(s + 0.3, 0.3, s + 0.3), matLambert(0x59372a)), x, z, top + h + 0.15);
      this._add(new THREE.Mesh(geoBox(s * 0.6, 0.1, s * 0.6), matBasic(0x141518)), x, z, top + h + 0.32);
      return { x, z, y: top + h + 0.4 };
    };
    const pipes = () => {
      const [x, z] = spot();
      const len = Math.min(this.plot.w, this.plot.d) - 3;
      this._add(new THREE.Mesh(geoCyl(0.16, 0.16, len, 6), rust), x, z, top + 0.2).rotation.z = Math.PI / 2;
      this._add(new THREE.Mesh(geoCyl(0.16, 0.16, len * 0.6, 6), metal), x, z + 0.6, top + 0.2).rotation.z = Math.PI / 2;
    };
    const turbine = () => {
      const [x, z] = spot();
      this._add(new THREE.Mesh(geoCyl(0.4, 0.5, 0.5, 8), metal), x, z, top + 0.25);
      this._add(new THREE.Mesh(geoCyl(0.05, 0.42, 0.4, 8), dark), x, z, top + 0.68);
    };
    const rubbleBlock = () => {
      const [x, z] = spot();
      const m = new THREE.Mesh(geoBox(0.8 + rng(), 0.5 + rng() * 0.6, 0.8 + rng()), matLambert(rng() < 0.5 ? 0x6a645c : 0x57503f));
      m.rotation.y = rng() * 3;
      this._add(m, x, z, top + 0.3);
    };
    const rebar = () => {
      const [x, z] = spot();
      for (let i = 0; i < 4; i++) {
        const r = new THREE.Mesh(geoBox(0.06, 1.4 + rng(), 0.06), matLambert(0x4a3a2e));
        r.rotation.set((rng() - 0.5) * 0.9, 0, (rng() - 0.5) * 0.9);
        this._add(r, x + (rng() - 0.5), z + (rng() - 0.5), top + 0.6);
      }
    };

    const n = (a, b) => a + ((rng() * (b - a + 1)) | 0);
    switch (this.plot.roof) {
      case 'office': case 'hotel': case 'store':
        if (rng() < 0.65) waterTank();
        for (let i = 0; i < n(1, 3); i++) acUnit();
        if (rng() < 0.8) antenna();
        for (let i = 0; i < n(1, 2); i++) vent();
        if (this.plot.w > 14) bulkhead();
        if (rng() < 0.5) pipes();
        break;
      case 'cinema': case 'diner': case 'kiosk': case 'shop':
        for (let i = 0; i < n(1, 2); i++) acUnit();
        vent();
        if (rng() < 0.4) antenna();
        break;
      case 'corrugated': case 'garage':
        for (let i = 0; i < n(2, 3); i++) turbine();
        if (rng() < 0.6) pipes();
        vent();
        break;
      case 'factory':
        if (this.plot.chimney) {
          const ch = chimneyBrick(true);
          this.chimneyTop = ch;
        }
        for (let i = 0; i < 2; i++) turbine();
        if (rng() < 0.7) pipes();
        waterTank();
        break;
      case 'gable':
        chimneyBrick(false);
        if (rng() < 0.6) antenna();
        break;
      case 'bunker':
        this._add(new THREE.Mesh(geoBox(1.5, 0.14, 1.5), dark), 0, 0, top + 0.07);
        this._add(new THREE.Mesh(geoBox(1.1, 0.1, 1.1), metal), 0, 0, top + 0.18);
        vent();
        break;
      case 'ruin':
        for (let i = 0; i < n(2, 4); i++) rubbleBlock();
        rebar();
        if (rng() < 0.4) rubbleBlock();
        break;
      case 'collapsed':
        for (let i = 0; i < 5; i++) rubbleBlock();
        rebar();
        break;
    }

    /* radar giratório (marco do centro) */
    if (this.plot.radar) {
      const [x, z] = [0, 0];
      this._add(new THREE.Mesh(geoCyl(0.25, 0.35, 1.4, 8), dark), x, z, top + 0.7);
      const arm = new THREE.Group();
      const bar = new THREE.Mesh(geoBox(3.6, 0.14, 0.5), metal);
      bar.castShadow = true;
      arm.add(bar);
      arm.position.set(x, top + 1.5, z);
      this.group.add(arm);
      this.onUpdate((dt) => { arm.rotation.y += dt * 1.3; });
    }

    /* placa de néon como sprite (legível em top-down) */
    if (this.plot.sign) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: signTex(this.plot.sign, '#2c3428', '#e8d870') }));
      sp.scale.set(4.2, 1.4, 1);
      sp.position.set(0, this.plot.h + 1.3, -this.plot.d / 2 - 1);
      this.group.add(sp);
    }
  }

  _groundDebris(rng) {
    if (!this.plot.damage) return;
    const count = 2 + this.plot.damage * 2;
    for (let i = 0; i < count; i++) {
      const side = (rng() * 4) | 0;
      const off = 0.8 + rng() * 1.6;
      const x = side === 0 ? -this.plot.w / 2 - off : side === 1 ? this.plot.w / 2 + off : (rng() - 0.5) * this.plot.w;
      const z = side < 2 ? (rng() - 0.5) * this.plot.d : side === 2 ? -this.plot.d / 2 - off : this.plot.d / 2 + off;
      const m = new THREE.Mesh(
        geoBox(0.7 + rng() * 1.4, 0.4 + rng() * 0.8, 0.7 + rng() * 1.4),
        matLambert(rng() < 0.5 ? 0x6a645c : 0x57503f)
      );
      m.rotation.y = rng() * 3;
      m.position.set(x, m.geometry.parameters.height / 2, z);
      m.castShadow = true;
      m.receiveShadow = true;
      this.group.add(m);
    }
  }
}
