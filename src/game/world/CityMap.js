/* CityMap — malha da cidade, classificação de solo e pintura do chão
   (asfalto, calçadas, faixas, rachaduras, manchas, cruzamentos...) */
import { CELL, GRID as N, WORLD as SIZE, ROADS, DISTRICTS } from '../data/city.js';
import { hash2, mulberry32 } from '../core/Util.js';

const PPU = 6; // pixels por unidade no canvas do chão

export const GROUND = {
  GRASS: 0, DIRT: 1, CONCRETE: 2, ROAD: 3, AVENUE: 4,
  SIDEWALK: 5, PARKING: 6, RUBBLE: 7, CAMP: 8,
};

export class CityMap {
  constructor() {
    this.size = SIZE;
    this.cell = CELL;
    this.n = N;
    this.grid = new Uint8Array(N * N);
    this.hRoad = new Uint8Array(N * N);
    this.vRoad = new Uint8Array(N * N);
    this._build();
  }

  idx(cx, cz) { return cz * N + cx; }
  cellAt(x, z) {
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    if (cx < 0 || cz < 0 || cx >= N || cz >= N) return GROUND.DIRT;
    return this.grid[this.idx(cx, cz)];
  }

  districtAt(x, z) {
    const cx = x / CELL, cz = z / CELL;
    for (const d of DISTRICTS) {
      if (cx >= d.x0 && cx <= d.x1 + 1 && cz >= d.z0 && cz <= d.z1 + 1) return d;
    }
    return { id: 'ermo', nome: 'ERMOS', safe: false, hazard: false };
  }

  surfaceAt(x, z) {
    switch (this.cellAt(x, z)) {
      case GROUND.GRASS: return 'grass';
      case GROUND.DIRT: case GROUND.RUBBLE: return 'dirt';
      case GROUND.CAMP: case GROUND.CONCRETE: case GROUND.PARKING: return 'concrete';
      default: return 'road';
    }
  }

  _markRoad(x0, z0, x1, z1, avenue, axisV) {
    for (let z = z0; z <= z1; z++)
      for (let x = x0; x <= x1; x++) {
        if (x < 0 || z < 0 || x >= N || z >= N) continue;
        const i = this.idx(x, z);
        this.grid[i] = avenue ? GROUND.AVENUE : GROUND.ROAD;
        if (axisV) this.vRoad[i] = 1; else this.hRoad[i] = 1;
      }
  }

  _build() {
    const g = this.grid;
    g.fill(GROUND.GRASS);

    for (const a of ROADS.avenuesV) this._markRoad(a, 0, a + 1, N - 1, true, true);
    for (const a of ROADS.avenuesH) this._markRoad(0, a, N - 1, a + 1, true, false);
    for (const s of ROADS.streetsV) this._markRoad(s, 0, s, N - 1, false, true);
    for (const s of ROADS.streetsH) this._markRoad(0, s, N - 1, s, false, false);

    /* calçadas: vizinhas de vias */
    const isRoad = (x, z) => {
      if (x < 0 || z < 0 || x >= N || z >= N) return true;
      const t = g[this.idx(x, z)];
      return t === GROUND.ROAD || t === GROUND.AVENUE;
    };
    for (let z = 0; z < N; z++)
      for (let x = 0; x < N; x++) {
        const i = this.idx(x, z);
        if (isRoad(x, z)) continue;
        if (isRoad(x - 1, z) || isRoad(x + 1, z) || isRoad(x, z - 1) || isRoad(x, z + 1))
          g[i] = GROUND.SIDEWALK;
      }

    /* solo base por distrito */
    for (let z = 0; z < N; z++)
      for (let x = 0; x < N; x++) {
        const i = this.idx(x, z);
        const t = g[i];
        if (t === GROUND.ROAD || t === GROUND.AVENUE || t === GROUND.SIDEWALK) continue;
        const d = this.districtAt(x * CELL + 2, z * CELL + 2);
        switch (d.id) {
          case 'base': g[i] = GROUND.CAMP; break;
          case 'central': case 'comercial': g[i] = GROUND.CONCRETE; break;
          case 'industrial': g[i] = hash2(x, z, 77) < 0.42 ? GROUND.DIRT : GROUND.CONCRETE; break;
          case 'abandonada': g[i] = GROUND.RUBBLE; break;
          default: g[i] = GROUND.GRASS;
        }
      }

    /* estacionamento comercial */
    for (let z = 28; z <= 30; z++)
      for (let x = 13; x <= 26; x++) {
        const i = this.idx(x, z);
        if (g[i] !== GROUND.ROAD && g[i] !== GROUND.AVENUE && g[i] !== GROUND.SIDEWALK) g[i] = GROUND.PARKING;
      }
    /* pátio industrial */
    for (let z = 9; z <= 14; z++)
      for (let x = 42; x <= 46; x++) {
        const i = this.idx(x, z);
        if (g[i] !== GROUND.ROAD && g[i] !== GROUND.AVENUE && g[i] !== GROUND.SIDEWALK) g[i] = GROUND.DIRT;
      }
  }

  /* ================= pintura ================= */
  paintCanvas() {
    const cv = document.createElement('canvas');
    const S = this.size * PPU;
    cv.width = S; cv.height = S;
    const ctx = cv.getContext('2d');
    const rng = mulberry32(2024);

    for (let z = 0; z < N; z++)
      for (let x = 0; x < N; x++)
        this._paintCell(ctx, x, z, rng);

    this._paintRoadDetails(ctx, rng);
    this._paintCrosswalks(ctx);
    this._paintSpecials(ctx, rng);
    return cv;
  }

  _px(u) { return u * PPU; }

  _paintCell(ctx, cx, cz, rng) {
    const t = this.grid[this.idx(cx, cz)];
    const X = cx * CELL * PPU, Z = cz * CELL * PPU, W = CELL * PPU;
    const h = hash2(cx, cz, 5);
    const jit = (base, amt) => {
      const n = parseInt(base.slice(1), 16);
      let r = (n >> 16) + (h - 0.5) * amt, gg = ((n >> 8) & 255) + (h - 0.5) * amt, b = (n & 255) + (h - 0.5) * amt;
      return `rgb(${r | 0},${gg | 0},${b | 0})`;
    };

    switch (t) {
      case GROUND.ROAD: case GROUND.AVENUE: {
        ctx.fillStyle = jit('#24262b', 10);
        ctx.fillRect(X, Z, W, W);
        for (let i = 0; i < 26; i++) {
          ctx.fillStyle = rng() < 0.5 ? '#2b2e34' : '#1d1f24';
          ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2, 2);
        }
        if (h < 0.3) { /* remendo */
          ctx.fillStyle = '#2e3138';
          ctx.fillRect(X + 4, Z + 5, W - 9, W - 11);
          ctx.strokeStyle = '#3a3e46'; ctx.lineWidth = 1;
          ctx.strokeRect(X + 4.5, Z + 5.5, W - 10, W - 12);
        }
        break;
      }
      case GROUND.SIDEWALK: {
        ctx.fillStyle = jit('#6e7069', 12);
        ctx.fillRect(X, Z, W, W);
        ctx.fillStyle = '#5c5e55';
        ctx.fillRect(X + W / 2 - 1, Z, 1, W);
        ctx.fillRect(X, Z + W / 2 - 1, W, 1);
        for (let i = 0; i < 10; i++) {
          ctx.fillStyle = rng() < 0.5 ? '#7a7c72' : '#62645b';
          ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2, 1);
        }
        break;
      }
      case GROUND.GRASS: {
        ctx.fillStyle = jit('#3d5933', 12);
        ctx.fillRect(X, Z, W, W);
        for (let i = 0; i < 30; i++) {
          ctx.fillStyle = rng() < 0.55 ? '#46653b' : '#34502c';
          ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2, 2);
        }
        if (h > 0.86) { ctx.fillStyle = '#5a6438'; ctx.fillRect(X + ((rng() * 14) | 0), Z + ((rng() * 14) | 0), 8, 6); }
        if (h > 0.55 && h < 0.6) { ctx.fillStyle = '#c8c050'; ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2, 2); }
        break;
      }
      case GROUND.DIRT: {
        ctx.fillStyle = jit('#5a4b39', 12);
        ctx.fillRect(X, Z, W, W);
        for (let i = 0; i < 22; i++) {
          ctx.fillStyle = rng() < 0.5 ? '#655543' : '#4e4131';
          ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2, 2);
        }
        if (h < 0.4) { ctx.strokeStyle = '#4a3d2e'; ctx.beginPath(); ctx.moveTo(X + 2, Z + h * 40); ctx.lineTo(X + W - 3, Z + h * 40 + 4); ctx.stroke(); }
        break;
      }
      case GROUND.CONCRETE: {
        ctx.fillStyle = jit('#5a5e62', 10);
        ctx.fillRect(X, Z, W, W);
        ctx.fillStyle = '#4c5054';
        ctx.fillRect(X, Z + W - 1, W, 1);
        ctx.fillRect(X + W - 1, Z, 1, W);
        for (let i = 0; i < 8; i++) {
          ctx.fillStyle = '#53575b';
          ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 1, 1);
        }
        break;
      }
      case GROUND.PARKING: {
        ctx.fillStyle = jit('#565a5e', 10);
        ctx.fillRect(X, Z, W, W);
        if (h < 0.5) { ctx.fillStyle = '#17181c'; ctx.beginPath(); ctx.ellipse(X + W * rng(), Z + W * rng(), 5, 4, 0, 0, 7); ctx.fill(); }
        break;
      }
      case GROUND.RUBBLE: {
        ctx.fillStyle = jit('#51463a', 12);
        ctx.fillRect(X, Z, W, W);
        for (let i = 0; i < 12; i++) {
          ctx.fillStyle = rng() < 0.5 ? '#6a645c' : '#474039';
          ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2 + ((rng() * 4) | 0), 2 + ((rng() * 3) | 0));
        }
        for (let i = 0; i < 5; i++) { ctx.fillStyle = '#4a6a34'; ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2, 2); }
        if (h < 0.25) { ctx.strokeStyle = '#6a3a2a'; ctx.beginPath(); ctx.moveTo(X + 3, Z + 4); ctx.lineTo(X + W - 5, Z + W - 6); ctx.stroke(); }
        break;
      }
      case GROUND.CAMP: {
        ctx.fillStyle = jit('#606258', 10);
        ctx.fillRect(X, Z, W, W);
        ctx.fillStyle = '#52544a';
        ctx.fillRect(X, Z + W - 1, W, 1); ctx.fillRect(X + W - 1, Z, 1, W);
        for (let i = 0; i < 8; i++) { ctx.fillStyle = '#6a6c60'; ctx.fillRect(X + ((rng() * W) | 0), Z + ((rng() * W) | 0), 2, 1); }
        break;
      }
    }
  }

  _paintRoadDetails(ctx, rng) {
    const U = PPU, C = CELL * PPU;
    const g = this.grid;
    const roadT = (x, z) => x >= 0 && z >= 0 && x < N && z < N && (g[this.idx(x, z)] === GROUND.ROAD || g[this.idx(x, z)] === GROUND.AVENUE);

    for (let z = 0; z < N; z++)
      for (let x = 0; x < N; x++) {
        const i = this.idx(x, z);
        if (!roadT(x, z)) continue;
        const X = x * C, Z = z * C;
        const inter = this.hRoad[i] && this.vRoad[i];
        const h = hash2(x, z, 13);

        /* rachaduras */
        if (h < 0.55 && !inter) {
          ctx.strokeStyle = 'rgba(13,14,17,0.85)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          let px = X + rng() * C, pz = Z + rng() * C;
          ctx.moveTo(px, pz);
          for (let s = 0; s < 6; s++) {
            px += (rng() - 0.5) * 10; pz += (rng() - 0.3) * 8;
            ctx.lineTo(px, pz);
          }
          ctx.stroke();
        }
        /* buracos */
        if (h > 0.9 && h < 0.94) {
          ctx.fillStyle = '#101114';
          ctx.beginPath(); ctx.ellipse(X + C * 0.5, Z + C * 0.55, 4, 3, 0, 0, 7); ctx.fill();
          ctx.fillStyle = '#33363c';
          ctx.fillRect(X + C * 0.5 - 3, Z + C * 0.55 - 3, 6, 1);
        }
        /* manchas de óleo perto de estacionamento/industrial */
        if (h > 0.62 && h < 0.72 && z > 20) {
          ctx.fillStyle = 'rgba(10,10,13,0.5)';
          ctx.beginPath(); ctx.ellipse(X + C * rng(), Z + C * rng(), 6, 4, rng() * 3, 0, 7); ctx.fill();
        }

        if (inter) {
          /* bueiro no meio do cruzamento */
          if (hash2(x, z, 99) < 0.5) {
            ctx.fillStyle = '#17181c';
            ctx.beginPath(); ctx.arc(X + C / 2, Z + C / 2, 5, 0, 7); ctx.fill();
            ctx.fillStyle = '#2c2e33';
            ctx.beginPath(); ctx.arc(X + C / 2, Z + C / 2, 5, 0, 7); ctx.stroke();
            ctx.fillRect(X + C / 2 - 3, Z + C / 2 - 2, 6, 1);
            ctx.fillRect(X + C / 2 - 3, Z + C / 2 + 1, 6, 1);
          }
          continue;
        }

        /* faixas */
        if (g[i] === GROUND.AVENUE) {
          /* linha central amarela na divisa das duas células */
          if (this.vRoad[i] && roadT(x + 1, z) && g[this.idx(x + 1, z)] === GROUND.AVENUE) {
            ctx.fillStyle = '#c0a030';
            for (let dz = 2; dz < C; dz += 12) ctx.fillRect(X + C - 1, Z + dz, 2, 7);
          }
          if (this.hRoad[i] && roadT(x, z + 1) && g[this.idx(x, z + 1)] === GROUND.AVENUE) {
            ctx.fillStyle = '#c0a030';
            for (let dx = 2; dx < C; dx += 12) ctx.fillRect(X + dx, Z + C - 1, 7, 2);
          }
          /* bordas brancas */
          ctx.fillStyle = 'rgba(200,196,180,0.5)';
          if (this.vRoad[i]) {
            if (!roadT(x - 1, z)) ctx.fillRect(X + 1, Z, 2, C);
            if (!roadT(x + 2, z)) ctx.fillRect(X + C - 3, Z, 2, C);
          }
          if (this.hRoad[i]) {
            if (!roadT(x, z - 1)) ctx.fillRect(X, Z + 1, C, 2);
            if (!roadT(x, z + 2)) ctx.fillRect(X, Z + C - 3, C, 2);
          }
        } else {
          /* rua simples: tracejado gasto no meio */
          ctx.fillStyle = 'rgba(190,186,172,0.28)';
          if (this.vRoad[i]) for (let dz = 3; dz < C; dz += 12) ctx.fillRect(X + C / 2 - 1, Z + dz, 2, 6);
          if (this.hRoad[i]) for (let dx = 3; dx < C; dx += 12) ctx.fillRect(X + dx, Z + C / 2 - 1, 6, 2);
        }
      }

    /* faixas de pedestre nas entradas dos cruzamentos */
    const interCells = [];
    for (let z = 0; z < N; z++)
      for (let x = 0; x < N; x++)
        if (this.hRoad[this.idx(x, z)] && this.vRoad[this.idx(x, z)]) interCells.push([x, z]);

    ctx.fillStyle = 'rgba(205,201,186,0.75)';
    const drawn = new Set();
    for (const [x, z] of interCells) {
      const X = x * C, Z = z * C;
      const border = (nx, nz, axis) => {
        if (!roadT(nx, nz) || (this.hRoad[this.idx(nx, nz)] && this.vRoad[this.idx(nx, nz)])) return;
        const key = axis === 'x' ? `v${Math.max(x, nx)}|${z}` : `h${x}|${Math.max(z, nz)}`;
        if (drawn.has(key)) return;
        drawn.add(key);
        if (axis === 'x') {
          const bx = nx > x ? X + C : X;
          for (let dz = 3; dz < C - 2; dz += 6) ctx.fillRect(bx - 4 + (nx > x ? 0 : -4), Z + dz, 8, 3);
        } else {
          const bz = nz > z ? Z + C : Z;
          for (let dx = 3; dx < C - 2; dx += 6) ctx.fillRect(X + dx, bz - 4 + (nz > z ? 0 : -4), 3, 8);
        }
      };
      border(x + 1, z, 'x'); border(x - 1, z, 'x');
      border(x, z + 1, 'z'); border(x, z - 1, 'z');
    }
  }

  _paintCrosswalks() { /* integrado em _paintRoadDetails */ }

  _paintSpecials(ctx, rng) {
    const C = CELL * PPU;
    /* marcas de pneu ao longo de vias */
    ctx.strokeStyle = 'rgba(15,15,18,0.4)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 14; i++) {
      const vertical = rng() < 0.5;
      const lane = Math.floor(rng() * this.n);
      const start = Math.floor(rng() * this.size * PPU);
      const len = 60 + rng() * 160;
      const roadCells = vertical ? this.vRoad : this.hRoad;
      const cellIdx = Math.floor(lane);
      ctx.beginPath();
      if (vertical) {
        const bx = cellIdx * C + C * 0.32;
        ctx.moveTo(bx, start); ctx.lineTo(bx + (rng() - 0.5) * 8, start + len);
        ctx.moveTo(bx + 9, start); ctx.lineTo(bx + 9 + (rng() - 0.5) * 8, start + len);
      } else {
        const bz = cellIdx * C + C * 0.32;
        ctx.moveTo(start, bz); ctx.lineTo(start + len, bz + (rng() - 0.5) * 8);
        ctx.moveTo(start, bz + 9); ctx.lineTo(start + len, bz + 9 + (rng() - 0.5) * 8);
      }
      ctx.stroke();
      void roadCells;
    }

    /* marcas de queimado (guerra) */
    for (let i = 0; i < 7; i++) {
      const x = (10 + rng() * (this.size - 20)) * PPU;
      const z = (10 + rng() * (this.size - 20)) * PPU;
      const r = 10 + rng() * 16;
      const grd = ctx.createRadialGradient(x, z, 1, x, z, r);
      grd.addColorStop(0, 'rgba(8,8,10,0.75)');
      grd.addColorStop(1, 'rgba(8,8,10,0)');
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(x, z, r, 0, 7); ctx.fill();
      ctx.strokeStyle = 'rgba(8,8,10,0.4)';
      for (let s = 0; s < 5; s++) {
        const a = rng() * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(a) * r * 0.5, z + Math.sin(a) * r * 0.5);
        ctx.lineTo(x + Math.cos(a) * (r + 8 + rng() * 14), z + Math.sin(a) * (r + 8 + rng() * 14));
        ctx.stroke();
      }
    }

    /* vagas do estacionamento */
    for (let z = 28; z <= 30; z++)
      for (let x = 13; x <= 26; x++) {
        if (this.grid[this.idx(x, z)] !== GROUND.PARKING) continue;
        const X = x * C, Z = z * C;
        ctx.fillStyle = 'rgba(205,201,186,0.55)';
        for (let u = 0; u <= CELL; u += 3) ctx.fillRect(X + u * PPU - 1, Z + 2, 2, C - 4);
      }

    /* meio-fio: destaque nas bordas calçada↔via */
    const roadT = (x, z) => x >= 0 && z >= 0 && x < N && z < N && (this.grid[this.idx(x, z)] === GROUND.ROAD || this.grid[this.idx(x, z)] === GROUND.AVENUE);
    for (let z = 0; z < N; z++)
      for (let x = 0; x < N; x++) {
        if (this.grid[this.idx(x, z)] !== GROUND.SIDEWALK) continue;
        const X = x * C, Z = z * C;
        ctx.fillStyle = '#8a8c80';
        if (roadT(x - 1, z)) ctx.fillRect(X, Z, 2, C);
        if (roadT(x + 1, z)) ctx.fillRect(X + C - 2, Z, 2, C);
        if (roadT(x, z - 1)) ctx.fillRect(X, Z, C, 2);
        if (roadT(x, z + 1)) ctx.fillRect(X, Z + C - 2, C, 2);
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        if (roadT(x - 1, z)) ctx.fillRect(X - 2, Z, 2, C);
        if (roadT(x + 1, z)) ctx.fillRect(X + C, Z, 2, C);
        if (roadT(x, z - 1)) ctx.fillRect(X, Z - 2, C, 2);
        if (roadT(x, z + 1)) ctx.fillRect(X, Z + C, C, 2);
      }
  }
}
