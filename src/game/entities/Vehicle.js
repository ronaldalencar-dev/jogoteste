/* Vehicle — carros, vans e caminhões (estáticos; alguns saqueáveis) */
import * as THREE from 'three';
import { Entity } from './Entity.js';
import { CAR_KINDS, carTopTex, geoBox, matLambert } from '../world/Textures.js';

function shade(hex, amt) {
  const r = Math.max(0, Math.min(255, (hex >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((hex >> 8) & 255) + amt));
  const b = Math.max(0, Math.min(255, (hex & 255) + amt));
  return (r << 16) | (g << 8) | b;
}

export class Vehicle extends Entity {
  constructor(scene, def, game) {
    super(scene);
    const K = CAR_KINDS[def.kind] || CAR_KINDS.sedan;
    this.def = def;
    this.group.position.set(def.x, 0, def.z);
    this.group.rotation.y = def.ang ?? 0;

    const seed = (def.id.charCodeAt(1) || 3) * 13 + 5;
    const topTex = carTopTex(def.kind, def.color, !!def.burnt, seed);
    const sideMat = matLambert(def.burnt ? 0x24211d : shade(def.color, -26));
    const L = K.L, W = K.W;

    const body = new THREE.Mesh(
      geoBox(L, 0.72, W),
      [sideMat, sideMat, new THREE.MeshLambertMaterial({ map: topTex }),
       matLambert(0x1c1c1f), sideMat, sideMat]
    );
    body.position.y = 0.6;
    body.castShadow = true;
    body.receiveShadow = true;
    this.group.add(body);

    const wheelMat = matLambert(0x141416);
    for (const [wx, wz] of [[-L / 2 + 0.7, 1], [-L / 2 + 0.7, -1], [L / 2 - 0.7, 1], [L / 2 - 0.7, -1]]) {
      const wh = new THREE.Mesh(geoBox(0.62, 0.5, 0.3), wheelMat);
      wh.position.set(wx, 0.26, wz * W * 0.49);
      this.group.add(wh);
    }

    /* moldura da cabine — dá profundidade vista de cima */
    if (!def.burnt && !K.cargo) {
      const [c0, c1] = K.cab;
      const cl = L * (c1 - c0), cxo = L * ((c0 + c1) / 2 - 0.5);
      const frame = matLambert(shade(def.color, -52));
      const fh = 0.34, ft = 0.09;
      const parts = [
        [cl, fh, ft, cxo, (W - 0.3) / 2],
        [cl, fh, ft, cxo, -(W - 0.3) / 2],
        [ft, fh, W - 0.3, cxo + cl / 2, 0],
        [ft, fh, W - 0.3, cxo - cl / 2, 0],
      ];
      for (const [w, h, d, x, z] of parts) {
        const f = new THREE.Mesh(geoBox(w, h, d), frame);
        f.position.set(x, 1.12, z);
        f.castShadow = true;
        this.group.add(f);
      }
    }

    /* tampa do porta-malas (abre ao saquear) */
    if (def.loot) {
      const pivot = new THREE.Group();
      pivot.position.set(L / 2 - 0.15, 0.98, 0);
      const lid = new THREE.Mesh(geoBox(0.95, 0.07, W - 0.36), sideMat.clone());
      lid.position.x = -0.47;
      lid.castShadow = true;
      pivot.add(lid);
      this.group.add(pivot);
      this.trunkLid = pivot;
    }

    if (def.flipped) {
      this.group.rotation.z = Math.PI;
      this.group.position.y = 1.05;
    }

    if (game) game.collision.addRotatedBox(def.x, def.z, L, W, def.ang ?? 0);
  }

  applyLooted() {
    if (this.trunkLid) this.trunkLid.rotation.z = 1.0;
  }
}
