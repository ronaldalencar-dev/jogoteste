/* Tree / Bush / DeadTree — vegetação em blocos pixelados */
import * as THREE from 'three';
import { Entity } from './Entity.js';
import { canopyTex, geoBox, matTex, matLambert } from '../world/Textures.js';

export class Tree extends Entity {
  constructor(scene, x, z, size = 3.2, variant = 0, game = null) {
    super(scene);
    this.group.position.set(x, 0, z);

    const trunk = new THREE.Mesh(geoBox(0.42, 1.9, 0.42), matLambert(0x5a4530));
    trunk.position.y = 0.95;
    trunk.castShadow = true;
    this.group.add(trunk);

    const palettes = [['#3c5a2e', '#4d7038'], ['#3a5230', '#54703c'], ['#4a5c2a', '#607838']];
    const [g1, g2] = palettes[variant % palettes.length];
    const tex = canopyTex(g1, g2, 3 + variant * 7 + ((x * 100 + z) | 0) % 5);
    const mat = matTex(tex, { alphaTest: 0.4 });

    const c1 = new THREE.Mesh(geoBox(size, 1.05, size), mat);
    c1.position.y = 2.35;
    c1.castShadow = true;
    this.group.add(c1);

    const c2 = new THREE.Mesh(geoBox(size * 0.62, 0.85, size * 0.62), matTex(canopyTex(g2, '#a8c060', 11 + variant), { alphaTest: 0.4 }));
    c2.position.set(size * 0.1, 3.05, -size * 0.08);
    c2.rotation.y = 0.5;
    c2.castShadow = true;
    this.group.add(c2);

    if (game) game.collision.addBox(x, z, 0.7, 0.7, 'tree');
  }
}

export class Bush extends Entity {
  constructor(scene, x, z, size = 1.25, game = null) {
    super(scene);
    this.group.position.set(x, 0, z);
    const tex = canopyTex('#3c5a2e', '#54703c', 40 + ((x * 13 + z * 7) | 0) % 6);
    const m = new THREE.Mesh(geoBox(size, size * 0.62, size), matTex(tex, { alphaTest: 0.4 }));
    m.position.y = size * 0.31;
    m.castShadow = true;
    this.group.add(m);
  }
}

export class DeadTree extends Entity {
  constructor(scene, x, z, h = 2.8, game = null) {
    super(scene);
    this.group.position.set(x, 0, z);
    const wood = matLambert(0x4e443a);
    const trunk = new THREE.Mesh(geoBox(0.3, h, 0.3), wood);
    trunk.position.y = h / 2;
    trunk.castShadow = true;
    this.group.add(trunk);
    const rngSeed = ((x * 31 + z * 17) | 0) % 100;
    for (let i = 0; i < 3; i++) {
      const b = new THREE.Mesh(geoBox(0.11, 1.3 + (rngSeed % 3) * 0.2, 0.11), wood);
      b.position.y = h * (0.55 + i * 0.15);
      b.rotation.z = (i % 2 === 0 ? 1 : -1) * (0.7 + i * 0.15);
      b.rotation.y = i * 2.1 + rngSeed * 0.1;
      b.translateY(0.5);
      b.castShadow = true;
      this.group.add(b);
    }
    if (game) game.collision.addBox(x, z, 0.5, 0.5, 'tree');
  }
}
