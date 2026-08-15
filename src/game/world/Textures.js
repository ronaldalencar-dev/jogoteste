/* Textures — biblioteca de texturas pixel art geradas por código,
   geometrias e materiais compartilhados (1 instância por variação). */
import * as THREE from 'three';
import { mulberry32 } from '../core/Util.js';

const NEAREST = THREE.NearestFilter;

function makeTex(w, h, draw, seed = 1) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d');
  draw(ctx, w, h, mulberry32(seed));
  const tex = new THREE.CanvasTexture(cv);
  tex.magFilter = NEAREST;
  tex.minFilter = NEAREST;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function speckle(ctx, w, h, rng, colors, n) {
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = colors[Math.floor(rng() * colors.length)];
    ctx.fillRect(Math.floor(rng() * w), Math.floor(rng() * h), 1, 1);
  }
}

/* ============================ PAREDES ============================ */
export const WALL_PALETTES = [
  { base: '#77493b', dark: '#66392e', light: '#8a5a49', win: '#20262c', lit: '#d8a24a', brick: true },
  { base: '#6b6f52', dark: '#595d43', light: '#7c8060', win: '#1e242a', lit: '#d8a24a', brick: false },
  { base: '#7f838a', dark: '#6d7178', light: '#92969d', win: '#1c222a', lit: '#d8a24a', brick: false },
  { base: '#4c525c', dark: '#3f454e', light: '#5d646f', win: '#171d24', lit: '#e0b05a', brick: false, glassy: true },
];

function drawWall(ctx, w, h, rng, pal, damaged = false) {
  ctx.fillStyle = pal.base;
  ctx.fillRect(0, 0, w, h);
  /* variação de faixas por andar */
  for (let y = 0; y < h; y += 8) {
    ctx.fillStyle = rng() < 0.5 ? pal.dark : pal.light;
    ctx.globalAlpha = 0.18;
    ctx.fillRect(0, y, w, 1);
    ctx.globalAlpha = 1;
  }
  if (pal.brick) {
    ctx.fillStyle = pal.dark;
    for (let y = 0; y < h; y += 3) {
      ctx.globalAlpha = 0.35;
      ctx.fillRect(0, y, w, 1);
      const off = (y / 3) % 2 === 0 ? 0 : 3;
      for (let x = off; x < w; x += 6) ctx.fillRect(x, y, 1, 2);
      ctx.globalAlpha = 1;
    }
  }
  /* janelas */
  for (let wy = 5; wy < h - 6; wy += 13) {
    for (let wx = 4; wx < w - 6; wx += 13) {
      const broken = damaged && rng() < 0.35;
      const lit = !broken && rng() < (pal.glassy ? 0.2 : 0.09);
      ctx.fillStyle = '#14181c';
      ctx.fillRect(wx - 1, wy - 1, 8, 10);
      ctx.fillStyle = broken ? '#0c0f12' : lit ? pal.lit : pal.win;
      ctx.fillRect(wx, wy, 6, 8);
      if (lit) { ctx.fillStyle = '#f0c878'; ctx.fillRect(wx, wy, 6, 2); }
      if (broken) { ctx.fillStyle = '#3a444c'; ctx.fillRect(wx + 1, wy + 2, 1, 3); ctx.fillRect(wx + 3, wy + 1, 1, 2); }
      ctx.fillStyle = pal.dark;
      ctx.fillRect(wx + 2, wy, 1, 8);
      if (rng() < 0.22) { ctx.fillStyle = pal.light; ctx.fillRect(wx - 1, wy + 9, 8, 2); } /* ar-condicionado */
    }
  }
  /* sujeira escorrendo */
  ctx.fillStyle = '#1a160f';
  for (let i = 0; i < 7; i++) {
    ctx.globalAlpha = 0.12 + rng() * 0.12;
    const x = Math.floor(rng() * w);
    ctx.fillRect(x, Math.floor(rng() * h * 0.4), 1 + Math.floor(rng() * 2), h);
  }
  ctx.globalAlpha = 0.28;
  ctx.fillRect(0, h - 5, w, 5); /* base encardida */
  ctx.globalAlpha = 1;
}

export const WALL_TEX = WALL_PALETTES.map((p, i) => makeTex(64, 64, (c, w, h, r) => drawWall(c, w, h, r, p), 10 + i));
export const WALL_TEX_DMG = WALL_PALETTES.map((p, i) => makeTex(64, 64, (c, w, h, r) => drawWall(c, w, h, r, p, true), 40 + i));

/* ============================ VEÍCULOS (vista de cima) ============================ */
const CAR_KINDS = {
  hatch:  { L: 4.0, W: 1.9, cab: [0.32, 0.62] },
  sedan:  { L: 4.6, W: 1.9, cab: [0.3, 0.66] },
  pickup: { L: 5.0, W: 2.0, cab: [0.26, 0.56], bed: true },
  van:    { L: 5.2, W: 2.2, cab: [0.16, 0.55], vanTop: true },
  truck:  { L: 7.6, W: 2.5, cab: [0.06, 0.26], cargo: true },
};
export { CAR_KINDS };

const _carCache = new Map();
export function carTopTex(kind, colorHex, burnt = false, seed = 7) {
  const key = `${kind}|${colorHex}|${burnt}|${seed}`;
  if (_carCache.has(key)) return _carCache.get(key);
  const K = CAR_KINDS[kind];
  const px = 8; /* px por unidade */
  const w = Math.round(K.L * px), h = Math.round(K.W * px);
  const base = '#' + colorHex.toString(16).padStart(6, '0');
  const tex = makeTex(w, h, (ctx, cw, ch, rng) => {
    const shade = (amt) => {
      const n = parseInt(base.slice(1), 16);
      let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
      r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
      return `rgb(${r},${g},${b})`;
    };
    ctx.fillStyle = burnt ? '#26231f' : base;
    ctx.fillRect(0, 0, cw, ch);
    speckle(ctx, cw, ch, rng, burnt ? ['#1c1a17', '#302c26', '#171512'] : [shade(-16), shade(12), shade(-6)], cw * ch * 0.16);
    /* contorno e painéis */
    ctx.fillStyle = burnt ? '#141210' : shade(-42);
    ctx.fillRect(0, 0, cw, 1); ctx.fillRect(0, ch - 1, cw, 1);
    ctx.fillRect(0, 0, 1, ch); ctx.fillRect(cw - 1, 0, 1, ch);
    /* capô e porta-malas */
    const [c0, c1] = K.cab;
    const x0 = Math.floor(c0 * cw), x1 = Math.floor(c1 * cw);
    ctx.fillStyle = shade(-22);
    ctx.fillRect(x0, 1, 1, ch - 2);
    ctx.fillRect(x1, 1, 1, ch - 2);
    /* cabine / vidros */
    if (K.vanTop || K.cargo) {
      ctx.fillStyle = burnt ? '#201d1a' : shade(16);
      ctx.fillRect(x0, 2, x1 - x0, ch - 4);
      if (K.cargo) {
        ctx.fillStyle = '#57503f';
        for (let x = x1 + 2; x < cw - 2; x += 3) ctx.fillRect(x, 2, 1, ch - 4);
        ctx.fillStyle = '#3d382c';
        ctx.fillRect(x1 + 1, 1, cw - x1 - 2, 1);
        ctx.fillRect(x1 + 1, ch - 2, cw - x1 - 2, 1);
      }
    } else {
      ctx.fillStyle = '#232b32';
      ctx.fillRect(x0 + 1, 2, 3, ch - 4);                     /* para-brisa */
      ctx.fillStyle = '#39434c';
      ctx.fillRect(x0 + 1, 2, 3, 1);
      ctx.fillStyle = burnt ? '#1e1b18' : shade(22);
      ctx.fillRect(x0 + 4, 2, x1 - x0 - 6, ch - 4);           /* teto */
      ctx.fillStyle = '#232b32';
      ctx.fillRect(x1 - 2, 2, 2, ch - 4);                     /* vidro traseiro */
      if (K.bed) { ctx.fillStyle = '#3a352c'; ctx.fillRect(x1, 2, cw - x1 - 1, ch - 4); }
    }
    /* retrovisores */
    ctx.fillStyle = shade(-30);
    ctx.fillRect(x0 - 1, 0, 1, 1); ctx.fillRect(x0 - 1, ch - 1, 1, 1);
    /* faróis / lanternas */
    ctx.fillStyle = burnt ? '#3a362e' : '#d8d3a8';
    ctx.fillRect(1, 2, 1, 2); ctx.fillRect(1, ch - 4, 1, 2);
    ctx.fillStyle = burnt ? '#33261e' : '#a03828';
    ctx.fillRect(cw - 2, 2, 1, 2); ctx.fillRect(cw - 2, ch - 4, 1, 2);
    /* ferrugem + sujeira */
    if (!burnt) {
      ctx.fillStyle = '#7a4a2a';
      for (let i = 0; i < 5; i++) {
        ctx.globalAlpha = 0.5;
        const rx = Math.floor(rng() * cw), ry = Math.floor(rng() * ch);
        ctx.fillRect(rx, ry, 1 + Math.floor(rng() * 3), 1 + Math.floor(rng() * 2));
      }
      ctx.globalAlpha = 0.2; ctx.fillStyle = '#241f16';
      for (let i = 0; i < 6; i++) ctx.fillRect(Math.floor(rng() * cw), Math.floor(rng() * ch), 2, 1);
      ctx.globalAlpha = 1;
    } else {
      ctx.fillStyle = '#0e0c0a';
      const hx = Math.floor(cw * 0.45), hy = Math.floor(ch * 0.5);
      for (let i = 0; i < 10; i++) ctx.fillRect(hx + Math.floor(rng() * 8) - 4, hy + Math.floor(rng() * 6) - 3, 2, 1);
      ctx.fillStyle = '#4a4038';
      ctx.fillRect(0, Math.floor(ch / 2), cw, 1);
    }
  }, seed);
  _carCache.set(key, tex);
  return tex;
}

/* ============================ VEGETAÇÃO ============================ */
const _canopyCache = new Map();
export function canopyTex(g1, g2, seed = 3) {
  const key = g1 + g2 + seed;
  if (_canopyCache.has(key)) return _canopyCache.get(key);
  const tex = makeTex(26, 26, (ctx, w, h, rng) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const blob = (color, r) => {
      ctx.fillStyle = color;
      for (let y = -r; y <= r; y++)
        for (let x = -r; x <= r; x++)
          if (x * x + y * y <= r * r + rng() * 8 - 4) ctx.fillRect(cx + x, cy + y, 1, 1);
    };
    blob('#22301a', 12);
    blob(g1, 10);
    blob(g2, 7);
    /* sombra interna baixo-direita, highlight cima-esquerda */
    ctx.fillStyle = '#1c2815';
    for (let i = 0; i < 26; i++) ctx.fillRect(cx + 3 + Math.floor(rng() * 6), cy + 2 + Math.floor(rng() * 7), 1, 1);
    ctx.fillStyle = '#a8c060';
    for (let i = 0; i < 14; i++) ctx.fillRect(cx - 8 + Math.floor(rng() * 7), cy - 8 + Math.floor(rng() * 7), 1, 1);
    /* recortes na borda (silhueta irregular) */
    ctx.clearRect(0, 0, 2, 2); ctx.clearRect(w - 2, 0, 2, 2);
    ctx.clearRect(0, h - 2, 2, 2); ctx.clearRect(w - 2, h - 2, 2, 2);
  }, seed);
  _canopyCache.set(key, tex);
  return tex;
}

export const TUFT_TEX = makeTex(12, 12, (ctx, w, h, rng) => {
  ctx.clearRect(0, 0, w, h);
  const greens = ['#4a6a34', '#5a7c3e', '#3c5a2a'];
  for (let i = 0; i < 9; i++) {
    ctx.fillStyle = greens[i % 3];
    const x = 2 + Math.floor(rng() * 8);
    ctx.fillRect(x, 3 + Math.floor(rng() * 3), 1, 4 + Math.floor(rng() * 4));
  }
}, 5);

/* ============================ PROPS ============================ */
export const CRATE_TEX = makeTex(24, 24, (ctx, w, h, rng) => {
  ctx.fillStyle = '#8a6a3c'; ctx.fillRect(0, 0, w, h);
  speckle(ctx, w, h, rng, ['#7c5e34', '#97763f', '#6e532c'], 90);
  ctx.fillStyle = '#5e4423';
  ctx.fillRect(0, 0, w, 3); ctx.fillRect(0, h - 3, w, 3); ctx.fillRect(0, 0, 3, h); ctx.fillRect(w - 3, 0, 3, h);
  for (let i = 0; i < w; i += 6) ctx.fillRect(i, 0, 1, h);
  ctx.fillRect(0, 0, w, 1); ctx.fillRect(0, h - 1, w, 1);
  ctx.fillStyle = '#3d2c15';
  ctx.fillRect(3, 3, 2, 2); ctx.fillRect(w - 5, 3, 2, 2); ctx.fillRect(3, h - 5, 2, 2); ctx.fillRect(w - 5, h - 5, 2, 2);
  ctx.globalAlpha = 0.35; ctx.fillStyle = '#4a3517'; ctx.fillRect(4, h - 9, w - 8, 4);
  ctx.globalAlpha = 1;
}, 21);

export const BARREL_TEX = makeTex(24, 24, (ctx, w, h, rng) => {
  ctx.fillStyle = '#7c4438'; ctx.fillRect(0, 0, w, h);
  speckle(ctx, w, h, rng, ['#6a3a30', '#8c5040', '#593028'], 80);
  ctx.fillStyle = '#4a2620';
  ctx.fillRect(0, 2, w, 2); ctx.fillRect(0, h - 4, w, 2); ctx.fillRect(0, Math.floor(h / 2), w, 1);
  ctx.fillStyle = '#9c5a44';
  ctx.fillRect(0, 4, w, 1);
  ctx.fillStyle = '#3a1f1a';
  for (let i = 0; i < 5; i++) ctx.fillRect(Math.floor(rng() * w), 6 + Math.floor(rng() * 10), 1, 3 + Math.floor(rng() * 4));
}, 22);

const _contCache = new Map();
export function containerTex(hex) {
  if (_contCache.has(hex)) return _contCache.get(hex);
  const base = '#' + hex.toString(16).padStart(6, '0');
  const tex = makeTex(64, 32, (ctx, w, h, rng) => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    const n = parseInt(base.slice(1), 16);
    const dk = `rgb(${Math.max(0, (n >> 16) - 34)},${Math.max(0, ((n >> 8) & 255) - 34)},${Math.max(0, (n & 255) - 34)})`;
    const lt = `rgb(${Math.min(255, (n >> 16) + 26)},${Math.min(255, ((n >> 8) & 255) + 26)},${Math.min(255, (n & 255) + 26)})`;
    for (let x = 3; x < w - 3; x += 4) { ctx.fillStyle = dk; ctx.fillRect(x, 3, 2, h - 6); ctx.fillStyle = lt; ctx.fillRect(x + 2, 3, 1, h - 6); }
    ctx.fillStyle = dk;
    ctx.fillRect(0, 0, w, 3); ctx.fillRect(0, h - 3, w, 3); ctx.fillRect(0, 0, 3, h); ctx.fillRect(w - 3, 0, 3, h);
    ctx.fillStyle = '#5a3a22';
    for (let i = 0; i < 9; i++) { ctx.globalAlpha = 0.55; ctx.fillRect(Math.floor(rng() * w), h - 10 + Math.floor(rng() * 7), 2 + Math.floor(rng() * 4), 2); }
    ctx.globalAlpha = 1;
  }, 31);
  _contCache.set(hex, tex);
  return tex;
}

export const SIGN_CACHE = new Map();
export function signTex(text, bg = '#3a4436', fg = '#d8d3c0', wpx = 96, hpx = 32) {
  const key = text + bg;
  if (SIGN_CACHE.has(key)) return SIGN_CACHE.get(key);
  const tex = makeTex(wpx, hpx, (ctx, w, h) => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = fg;
    ctx.fillRect(0, 0, w, 2); ctx.fillRect(0, h - 2, w, 2); ctx.fillRect(0, 0, 2, h); ctx.fillRect(w - 2, 0, 2, h);
    ctx.fillStyle = fg;
    ctx.font = 'bold 13px monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2 + 1);
  }, text.length * 7);
  SIGN_CACHE.set(key, tex);
  return tex;
}

export const FLAG_TEX = makeTex(24, 16, (ctx, w, h) => {
  ctx.fillStyle = '#5c6240'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#a03828';
  for (let x = 0; x < w; x++) ctx.fillRect(x, Math.floor(6 + (x / w) * 5), 1, 4);
  ctx.fillStyle = '#e4dfd0';
  ctx.fillRect(10, 6, 4, 1); ctx.fillRect(9, 7, 6, 2); ctx.fillRect(10, 9, 4, 1); ctx.fillRect(11, 5, 2, 1); ctx.fillRect(11, 10, 2, 1);
  ctx.fillStyle = '#454a30'; ctx.fillRect(0, 0, 2, h);
}, 9);

export const SOFT_TEX = makeTex(16, 16, (ctx, w, h) => {
  const g = ctx.createRadialGradient(8, 8, 1, 8, 8, 8);
  g.addColorStop(0, 'rgba(255,255,255,0.9)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}, 2);

export const SPARK_TEX = makeTex(8, 8, (ctx) => {
  ctx.clearRect(0, 0, 8, 8);
  ctx.fillStyle = '#fff';
  ctx.fillRect(3, 1, 2, 6); ctx.fillRect(1, 3, 6, 2);
}, 4);

export const GLASS_TEX = makeTex(16, 16, (ctx, w, h, rng) => {
  ctx.fillStyle = '#33424c'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#4a5c66';
  for (let i = 0; i < 4; i++) { const x = Math.floor(rng() * w); ctx.fillRect(x, 0, 2, h); }
  ctx.fillStyle = '#20292f';
  ctx.fillRect(0, 0, w, 1); ctx.fillRect(0, h - 1, w, 1); ctx.fillRect(0, 0, 1, h); ctx.fillRect(w - 1, 0, 1, h);
}, 12);

export const BED_TEX = makeTex(24, 16, (ctx, w, h) => {
  ctx.fillStyle = '#4c5238'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#5c6444';
  for (let y = 2; y < h - 2; y += 3) ctx.fillRect(2, y, w - 4, 2);
  ctx.fillStyle = '#8a8f70'; ctx.fillRect(w - 8, 2, 6, h - 4);
  ctx.fillStyle = '#333823';
  ctx.fillRect(0, 0, w, 2); ctx.fillRect(0, h - 2, w, 2); ctx.fillRect(0, 0, 2, h); ctx.fillRect(w - 2, 0, 2, h);
}, 17);

/* ============================ GEOMETRIAS / MATERIAIS COMPARTILHADOS ============================ */
const _geo = new Map();
export function geoBox(w, h, d) {
  const k = `b${w}|${h}|${d}`;
  if (!_geo.has(k)) _geo.set(k, new THREE.BoxGeometry(w, h, d));
  return _geo.get(k);
}
export function geoCyl(rt, rb, h, seg = 10) {
  const k = `c${rt}|${rb}|${h}|${seg}`;
  if (!_geo.has(k)) _geo.set(k, new THREE.CylinderGeometry(rt, rb, h, seg));
  return _geo.get(k);
}
export function geoPlane(w, h) {
  const k = `p${w}|${h}`;
  if (!_geo.has(k)) _geo.set(k, new THREE.PlaneGeometry(w, h));
  return _geo.get(k);
}

const _mat = new Map();
export function matLambert(colorHex, extraKey = '') {
  const k = `L${colorHex}|${extraKey}`;
  if (!_mat.has(k)) _mat.set(k, new THREE.MeshLambertMaterial({ color: colorHex }));
  return _mat.get(k);
}
export function matBasic(colorHex) {
  const k = `B${colorHex}`;
  if (!_mat.has(k)) _mat.set(k, new THREE.MeshBasicMaterial({ color: colorHex }));
  return _mat.get(k);
}
export function matTex(tex, { transparent = false, alphaTest = 0 } = {}) {
  const k = `T${tex.id}|${transparent}|${alphaTest}`;
  if (!_mat.has(k)) {
    _mat.set(k, new THREE.MeshLambertMaterial({ map: tex, transparent, alphaTest: alphaTest || undefined }));
  }
  return _mat.get(k);
}
