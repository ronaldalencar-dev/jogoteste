/* Particles — pool leve de sprites para fumaça, poeira e brilhos */
import * as THREE from 'three';
import { SOFT_TEX, SPARK_TEX } from './Textures.js';

const POOL_SIZE = 80;

export class Particles {
  constructor(scene) {
    this.scene = scene;
    this.pool = [];
    this.active = [];
    this.emitters = [];

    for (let i = 0; i < POOL_SIZE; i++) {
      const mat = new THREE.SpriteMaterial({
        map: SOFT_TEX,
        transparent: true,
        depthWrite: false,
        opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.visible = false;
      scene.add(sp);
      this.pool.push(sp);
    }
  }

  spawn(x, y, z, o = {}) {
    const sp = this.pool.pop();
    if (!sp) return;
    sp.visible = true;
    sp.position.set(x, y, z);
    const s0 = o.size ?? 0.8;
    sp.scale.set(s0, s0, 1);
    sp.material.map = o.spark ? SPARK_TEX : SOFT_TEX;
    sp.material.color.set(o.color ?? 0xffffff);
    sp.material.opacity = o.opacity ?? 0.7;
    sp.material.rotation = Math.random() * Math.PI;
    this.active.push({
      sp,
      vx: o.vx ?? 0, vy: o.vy ?? 0.8, vz: o.vz ?? 0,
      life: o.life ?? 1.4, age: 0,
      grow: o.grow ?? 0.6,
      fadeFrom: o.opacity ?? 0.7,
    });
  }

  smoke(x, y, z, { rate = 3, color = 0x9a9a92, size = 1 } = {}) {
    this.emitters.push({ x, y, z, rate, color, size, acc: 0 });
  }

  burst(x, y, z, color = 0xf0e080, n = 10) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 1 + Math.random() * 2;
      this.spawn(x, y, z, {
        spark: true, color, size: 0.28 + Math.random() * 0.2,
        vx: Math.cos(a) * sp, vz: Math.sin(a) * sp, vy: 1.6 + Math.random() * 1.4,
        life: 0.45 + Math.random() * 0.3, opacity: 1, grow: -0.3,
      });
    }
  }

  dust(x, y, z) {
    this.spawn(x + (Math.random() - 0.5) * 0.5, y, z + (Math.random() - 0.5) * 0.5, {
      color: 0x8a8272, size: 0.3, vy: 0.4, life: 0.5, opacity: 0.4, grow: 0.8,
    });
  }

  update(dt) {
    for (const e of this.emitters) {
      e.acc += e.rate * dt;
      while (e.acc >= 1) {
        e.acc -= 1;
        this.spawn(e.x + (Math.random() - 0.5) * 0.6, e.y, e.z + (Math.random() - 0.5) * 0.6, {
          color: e.color, size: e.size * (0.5 + Math.random() * 0.5),
          vy: 0.8 + Math.random() * 0.7,
          vx: (Math.random() - 0.5) * 0.25, vz: (Math.random() - 0.5) * 0.25,
          life: 1.6 + Math.random() * 1.2, opacity: 0.42, grow: 0.9,
        });
      }
    }
    for (let i = this.active.length - 1; i >= 0; i--) {
      const p = this.active[i];
      p.age += dt;
      if (p.age >= p.life) {
        p.sp.visible = false;
        this.pool.push(p.sp);
        this.active.splice(i, 1);
        continue;
      }
      const t = p.age / p.life;
      p.sp.position.x += p.vx * dt;
      p.sp.position.y += p.vy * dt;
      p.sp.position.z += p.vz * dt;
      const s = p.sp.scale.x + p.grow * dt;
      p.sp.scale.set(Math.max(0.05, s), Math.max(0.05, s), 1);
      p.sp.material.opacity = p.fadeFrom * (1 - t);
    }
  }
}
