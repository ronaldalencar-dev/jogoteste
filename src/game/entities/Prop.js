/* Prop — fábrica de objetos de rua (cada um pode ter colisor e animação) */
import * as THREE from 'three';
import {
  geoBox, geoCyl, geoPlane, matLambert, matBasic, matTex,
  CRATE_TEX, BARREL_TEX, containerTex, signTex, FLAG_TEX, BED_TEX,
} from '../world/Textures.js';

function M(geo, mat, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = shadow;
  m.receiveShadow = true;
  return m;
}

export function makeProp(scene, type, x, z, opts = {}) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const out = { group: g, colliders: [], update: null, extras: {} };
  const rng = opts.rng || Math.random;

  const dark = matLambert(0x2c2e30);
  const metal = matLambert(0x7d8288);
  const rust = matLambert(0x7a543c);
  const wood = matLambert(0x6e5230);

  switch (type) {
    case 'crate':
      g.add(M(geoBox(1.2, 1.2, 1.2), new THREE.MeshLambertMaterial({ map: CRATE_TEX }), 0, 0.6, 0));
      out.colliders.push([0, 0, 1.2, 1.2]);
      out.extras.lid = g.children[0];
      break;
    case 'crateStack': {
      g.add(M(geoBox(1.2, 1.2, 1.2), new THREE.MeshLambertMaterial({ map: CRATE_TEX }), 0, 0.6, 0));
      g.add(M(geoBox(1.2, 1.2, 1.2), new THREE.MeshLambertMaterial({ map: CRATE_TEX }), 0.15, 1.8, -0.1));
      g.add(M(geoBox(1.0, 1.0, 1.0), new THREE.MeshLambertMaterial({ map: CRATE_TEX }), -0.7, 0.5, 0.8));
      out.colliders.push([0, 0, 2.4, 2.2]);
      break;
    }
    case 'barrel':
      g.add(M(geoCyl(0.48, 0.48, 1.05, 10), new THREE.MeshLambertMaterial({ map: BARREL_TEX }), 0, 0.53, 0));
      out.colliders.push([0, 0, 0.95, 0.95]);
      break;
    case 'barrelTipped': {
      const b = M(geoCyl(0.48, 0.48, 1.05, 10), new THREE.MeshLambertMaterial({ map: BARREL_TEX }), 0, 0.48, 0);
      b.rotation.z = Math.PI / 2;
      b.rotation.y = rng() * 3;
      g.add(b);
      out.colliders.push([0, 0, 1.3, 1.0]);
      break;
    }
    case 'trashcan':
      g.add(M(geoCyl(0.42, 0.36, 0.95, 8), matLambert(0x5a6058), 0, 0.48, 0));
      g.add(M(geoCyl(0.45, 0.45, 0.08, 8), dark, 0, 0.99, 0));
      out.colliders.push([0, 0, 0.85, 0.85]);
      break;
    case 'dumpster': {
      g.add(M(geoBox(2.5, 1.25, 1.4), matLambert(opts.color || 0x3f5a44), 0, 0.63, 0));
      const pivot = new THREE.Group();
      pivot.position.set(0, 1.26, -0.68);
      const lid = M(geoBox(2.5, 0.09, 1.42), matLambert(opts.color ? opts.color - 0x101010 : 0x2f4a34), 0, 0, 0.7);
      pivot.add(lid);
      g.add(pivot);
      out.colliders.push([0, 0, 2.5, 1.4]);
      out.extras.lid = pivot;
      break;
    }
    case 'container': {
      const tex = containerTex(opts.color || 0x8a5438);
      g.add(M(geoBox(6.0, 2.6, 2.5), new THREE.MeshLambertMaterial({ map: tex }), 0, 1.3, 0));
      g.add(M(geoBox(6.1, 0.12, 2.6), matLambert(0x4a4e52), 0, 2.66, 0));
      out.colliders.push([0, 0, 6.0, 2.5]);
      break;
    }
    case 'pallet':
      g.add(M(geoBox(1.8, 0.16, 1.8), wood, 0, 0.08, 0, false));
      g.add(M(geoBox(1.5, 0.9, 1.2), new THREE.MeshLambertMaterial({ map: CRATE_TEX }), 0.1, 0.61, 0));
      out.colliders.push([0, 0, 1.8, 1.8]);
      break;
    case 'bench':
      g.add(M(geoBox(2.0, 0.12, 0.6), wood, 0, 0.5, 0));
      g.add(M(geoBox(0.14, 0.5, 0.5), dark, -0.8, 0.25, 0));
      g.add(M(geoBox(0.14, 0.5, 0.5), dark, 0.8, 0.25, 0));
      break;
    case 'lamp': {
      g.add(M(geoBox(0.18, 3.6, 0.18), dark, 0, 1.8, 0));
      g.add(M(geoBox(1.1, 0.12, 0.12), dark, 0.55, 3.55, 0));
      g.add(M(geoBox(0.55, 0.2, 0.35), matLambert(0x8d9096), 1.05, 3.48, 0));
      out.colliders.push([0, 0, 0.4, 0.4]);
      break;
    }
    case 'hydrant':
      g.add(M(geoCyl(0.22, 0.26, 0.7, 8), matLambert(0xa03828), 0, 0.35, 0));
      g.add(M(geoCyl(0.24, 0.24, 0.12, 8), matLambert(0x7c281c), 0, 0.74, 0));
      out.colliders.push([0, 0, 0.5, 0.5]);
      break;
    case 'mailbox':
      g.add(M(geoBox(0.14, 1.0, 0.14), dark, 0, 0.5, 0));
      g.add(M(geoBox(0.55, 0.5, 0.4), matLambert(0x3c5a8a), 0, 1.15, 0));
      out.colliders.push([0, 0, 0.5, 0.45]);
      break;
    case 'signPost': {
      g.add(M(geoBox(0.12, 2.6, 0.12), matLambert(0x5c5e55), 0, 1.3, 0));
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: signTex(opts.text || 'AVISO', opts.bg || '#3a4436', opts.fg || '#d8d3c0'),
      }));
      sp.scale.set(3.4, 1.13, 1);
      sp.position.y = 2.6;
      g.add(sp);
      out.colliders.push([0, 0, 0.35, 0.35]);
      break;
    }
    case 'busStop':
      g.add(M(geoBox(0.16, 2.6, 0.16), dark, -1.6, 1.3, 0));
      g.add(M(geoBox(0.16, 2.6, 0.16), dark, 1.6, 1.3, 0));
      g.add(M(geoBox(3.6, 0.14, 1.5), matLambert(0x5a6a5a), 0, 2.6, 0));
      g.add(M(geoBox(2.6, 0.1, 0.55), wood, 0, 0.55, -0.2));
      out.colliders.push([-1.6, 0, 0.3, 0.3], [1.6, 0, 0.3, 0.3]);
      break;
    case 'sandbags': {
      const sand = matLambert(0x93805a);
      for (let i = 0; i < 3; i++) g.add(M(geoBox(0.95, 0.32, 0.55), sand, -1 + i, 0.16, 0));
      for (let i = 0; i < 2; i++) g.add(M(geoBox(0.95, 0.32, 0.55), sand, -0.5 + i, 0.48, 0));
      if (opts.vertical) g.rotation.y = Math.PI / 2;
      out.colliders.push(opts.vertical ? [0, 0, 0.7, 3.0] : [0, 0, 3.0, 0.7]);
      break;
    }
    case 'rubblePile': {
      const mats = [matLambert(0x6a645c), matLambert(0x57503f), matLambert(0x4e4a44)];
      for (let i = 0; i < 5; i++) {
        const s = 0.5 + rng() * 0.7;
        const b = M(geoBox(s, s * 0.6, s), mats[i % 3], (rng() - 0.5) * 1.4, s * 0.3, (rng() - 0.5) * 1.4);
        b.rotation.y = rng() * 3;
        g.add(b);
      }
      const rebar = M(geoBox(0.05, 1.1, 0.05), matLambert(0x4a3a2e), 0.3, 0.7, 0);
      rebar.rotation.z = 0.5;
      g.add(rebar);
      out.colliders.push([0, 0, 2.2, 2.2]);
      out.extras.pile = g;
      break;
    }
    case 'rubbleMound': {
      const mats = [matLambert(0x6a645c), matLambert(0x57503f), matLambert(0x75706a)];
      for (let i = 0; i < 9; i++) {
        const s = 0.8 + rng() * 1.4;
        const b = M(geoBox(s, s * 0.5, s), mats[i % 3], (rng() - 0.5) * 3.4, s * 0.25, (rng() - 0.5) * 3.4);
        b.rotation.y = rng() * 3;
        g.add(b);
      }
      out.colliders.push([0, 0, 4.4, 4.4]);
      break;
    }
    case 'fence': {
      const len = opts.len || 6;
      g.add(M(geoBox(len, 1.15, 0.16), matLambert(0x4e4a40), 0, 0.58, 0));
      g.add(M(geoBox(len, 0.1, 0.2), matLambert(0x3c382e), 0, 1.15, 0));
      for (let px = -len / 2; px <= len / 2; px += len / 3)
        g.add(M(geoBox(0.2, 1.3, 0.2), dark, px, 0.65, 0));
      const vertical = !!opts.vertical;
      out.colliders.push(vertical ? [0, 0, 0.3, len] : [0, 0, len, 0.3]);
      break;
    }
    case 'waterTower': {
      const legM = matLambert(0x4a4e52);
      for (let i = 0; i < 4; i++) {
        const leg = M(geoBox(0.35, 5, 0.35), legM, Math.cos(i * Math.PI / 2 + 0.7) * 2, 2.5, Math.sin(i * Math.PI / 2 + 0.7) * 2);
        g.add(leg);
      }
      g.add(M(geoCyl(2.4, 2.7, 3.4, 10), matLambert(0x7a5a44), 0, 6.4, 0));
      g.add(M(geoCyl(0.3, 2.5, 1.0, 10), matLambert(0x5c4434), 0, 8.6, 0));
      g.add(M(geoCyl(2.75, 2.75, 0.2, 10), legM, 0, 4.8, 0));
      out.colliders.push([0, 0, 3.4, 3.4]);
      break;
    }
    case 'generator':
      g.add(M(geoBox(1.6, 1.0, 1.0), matLambert(0x5c6248), 0, 0.5, 0));
      g.add(M(geoBox(0.5, 0.5, 0.5), dark, 0.9, 0.55, 0));
      g.add(M(geoCyl(0.06, 0.06, 1.2, 6), dark, -0.5, 1.5, 0));
      out.colliders.push([0, 0, 1.7, 1.1]);
      break;
    case 'tireStack': {
      const tire = matLambert(0x1e1e20);
      for (let i = 0; i < 3; i++) g.add(M(geoCyl(0.62 - i * 0.04, 0.62 - i * 0.04, 0.34, 10), tire, (rng() - 0.5) * 0.15, 0.17 + i * 0.34, (rng() - 0.5) * 0.15));
      out.colliders.push([0, 0, 1.3, 1.3]);
      break;
    }
    case 'campfire': {
      const stone = matLambert(0x5c5e58);
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        g.add(M(geoBox(0.34, 0.22, 0.3), stone, Math.cos(a) * 0.75, 0.11, Math.sin(a) * 0.75, false));
      }
      g.add(M(geoBox(1.0, 0.16, 0.22), wood, 0, 0.12, 0, false)).children;
      const log2 = M(geoBox(1.0, 0.16, 0.22), wood, 0, 0.2, 0, false);
      log2.rotation.y = 1.2;
      g.add(log2);
      const flame = new THREE.Mesh(geoPlane(0.85, 0.85), new THREE.MeshBasicMaterial({ color: 0xff9030, transparent: true, opacity: 0.95 }));
      flame.rotation.x = -Math.PI / 2;
      flame.position.y = 0.34;
      g.add(flame);
      const flame2 = new THREE.Mesh(geoPlane(0.5, 0.5), new THREE.MeshBasicMaterial({ color: 0xffd050, transparent: true, opacity: 0.95 }));
      flame2.rotation.x = -Math.PI / 2;
      flame2.rotation.z = 0.7;
      flame2.position.y = 0.38;
      g.add(flame2);
      const light = new THREE.PointLight(0xff8c3a, 1.4, 9, 1.6);
      light.position.y = 0.9;
      g.add(light);
      out.update = (dt, t) => {
        const f = 0.8 + Math.sin(t * 11) * 0.12 + Math.sin(t * 23 + 1) * 0.08;
        flame.scale.set(f, f * 0.9, 1);
        flame2.scale.set(1.1 - f * 0.3, 1.1 - f * 0.3, 1);
        flame2.rotation.z += dt * 1.4;
        light.intensity = 1.1 + Math.sin(t * 13) * 0.35 + Math.sin(t * 29) * 0.2;
      };
      out.extras.flame = flame;
      break;
    }
    case 'bedroll': {
      const bed = new THREE.Mesh(geoPlane(2.1, 1.35), new THREE.MeshLambertMaterial({ map: BED_TEX }));
      bed.rotation.x = -Math.PI / 2;
      bed.position.y = 0.04;
      bed.receiveShadow = true;
      g.add(bed);
      g.add(M(geoBox(0.5, 0.16, 0.9), matLambert(0x8a8f70), -0.7, 0.1, 0, false));
      break;
    }
    case 'flagpole': {
      g.add(M(geoCyl(0.06, 0.08, 5.6, 6), matLambert(0x9a9ca0), 0, 2.8, 0));
      const flag = new THREE.Mesh(geoPlane(1.7, 1.15), new THREE.MeshLambertMaterial({ map: FLAG_TEX, side: THREE.DoubleSide }));
      flag.rotation.x = -Math.PI / 2;
      flag.position.set(0.95, 5.25, 0);
      g.add(flag);
      out.update = (dt, t) => {
        flag.rotation.z = Math.sin(t * 2.6) * 0.22;
        flag.scale.x = 1 + Math.sin(t * 5.2) * 0.06;
      };
      out.colliders.push([0, 0, 0.35, 0.35]);
      break;
    }
    case 'fridge': {
      g.add(M(geoBox(0.95, 1.7, 0.85), matLambert(0xb8bab4), 0, 0.85, 0));
      g.add(M(geoBox(0.97, 0.06, 0.87), matLambert(0x8a8c86), 0, 1.1, 0));
      g.add(M(geoBox(0.08, 0.4, 0.08), dark, -0.52, 1.4, 0));
      g.add(M(geoBox(0.08, 0.3, 0.08), dark, -0.52, 0.6, 0));
      g.add(M(geoBox(0.9, 0.05, 0.8), rust, 0.1, 1.72, 0));
      out.colliders.push([0, 0, 0.95, 0.85]);
      out.extras.lid = g.children[4];
      break;
    }
    case 'cabinet': {
      g.add(M(geoBox(1.0, 1.5, 0.55), matLambert(0xa8aaa2), 0, 0.75, 0));
      g.add(M(geoBox(1.02, 1.52, 0.06), matLambert(0x8f918a), 0, 0.75, 0.28));
      g.add(M(geoBox(0.34, 0.34, 0.05), matLambert(0xc23b2e), 0, 1.05, 0.32, false));
      g.add(M(geoBox(0.1, 0.3, 0.1), matLambert(0xc23b2e), 0, 1.05, 0.33, false));
      g.add(M(geoBox(0.3, 0.1, 0.1), matLambert(0xc23b2e), 0, 1.05, 0.33, false));
      g.add(M(geoBox(0.08, 0.26, 0.06), dark, 0.36, 0.75, 0.32, false));
      out.colliders.push([0, 0, 1.0, 0.6]);
      break;
    }
    case 'locker': {
      g.add(M(geoBox(0.85, 1.9, 0.6), matLambert(0x5c6248), 0, 0.95, 0));
      g.add(M(geoBox(0.87, 0.06, 0.62), matLambert(0x4a5038), 0, 1.25, 0));
      g.add(M(geoBox(0.5, 0.3, 0.05), dark, 0, 1.6, 0.3, false));
      g.add(M(geoBox(0.07, 0.3, 0.06), matLambert(0x8a8f70), 0.28, 0.85, 0.3, false));
      out.colliders.push([0, 0, 0.85, 0.6]);
      break;
    }
    case 'radio':
      g.add(M(geoBox(1.0, 0.8, 0.7), new THREE.MeshLambertMaterial({ map: CRATE_TEX }), 0, 0.4, 0));
      g.add(M(geoBox(0.6, 0.42, 0.42), matLambert(0x3c4438), 0, 1.02, 0));
      g.add(M(geoCyl(0.03, 0.03, 1.0, 4), dark, 0.22, 1.6, 0));
      g.add(M(geoBox(0.14, 0.14, 0.05), matBasic(0x60c060), -0.15, 1.1, 0.22, false));
      out.colliders.push([0, 0, 1.0, 0.7]);
      break;
  }

  scene.add(g);
  return out;
}
