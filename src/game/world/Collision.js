/* Collision — AABBs estáticos vs. círculo do jogador (eixos separados) */

export class Collision {
  constructor() {
    this.aabbs = [];
  }

  addRect(x0, z0, x1, z1, tag = 'solid') {
    const b = { x0, z0, x1, z1, tag };
    this.aabbs.push(b);
    return b;
  }

  addBox(cx, cz, w, d, tag = 'solid') {
    return this.addRect(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, tag);
  }

  /* caixa rotacionada → AABB envolvente */
  addRotatedBox(cx, cz, w, d, angle, tag = 'vehicle') {
    const c = Math.abs(Math.cos(angle)), s = Math.abs(Math.sin(angle));
    const hw = (w * c + d * s) / 2 + 0.12;
    const hd = (w * s + d * c) / 2 + 0.12;
    return this.addRect(cx - hw, cz - hd, cx + hw, cz + hd, tag);
  }

  removeByTag(tag) {
    for (let i = this.aabbs.length - 1; i >= 0; i--)
      if (this.aabbs[i].tag === tag) this.aabbs.splice(i, 1);
  }

  overlaps(x, z, r) {
    for (const b of this.aabbs) {
      const nx = Math.max(b.x0, Math.min(x, b.x1));
      const nz = Math.max(b.z0, Math.min(z, b.z1));
      const dx = x - nx, dz = z - nz;
      if (dx * dx + dz * dz < r * r) return b;
    }
    return null;
  }

  /* move eixo a eixo, deslizando nas paredes */
  move(x, z, dx, dz, r) {
    x += dx;
    for (const b of this.aabbs) {
      if (z + r <= b.z0 || z - r >= b.z1) continue;
      if (x + r > b.x0 && x - r < b.x1) {
        x = dx > 0 ? Math.min(x, b.x0 - r) : Math.max(x, b.x1 + r);
      }
    }
    z += dz;
    for (const b of this.aabbs) {
      if (x + r <= b.x0 || x - r >= b.x1) continue;
      if (z + r > b.z0 && z - r < b.z1) {
        z = dz > 0 ? Math.min(z, b.z0 - r) : Math.max(z, b.z1 + r);
      }
    }
    return { x, z };
  }
}
