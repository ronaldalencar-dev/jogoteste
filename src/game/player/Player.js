/* Player — personagem low-poly/pixel visto de cima */
import * as THREE from 'three';
import { Entity } from '../entities/Entity.js';
import { geoBox } from '../world/Textures.js';
import { lerpAngle } from '../core/Util.js';

export class Player extends Entity {
  constructor(scene) {
    super(scene);
    this.heading = 0;
    this.walkCycle = 0;
    this.moving = false;
    this.hp = 100;
    this.radius = 0.55;
    this.vx = 0;
    this.vz = 0;
    this._build();
  }

  _build() {
    const g = this.group;

    /* sombra de contato */
    const blob = new THREE.Mesh(
      new THREE.CircleGeometry(0.5, 12),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false })
    );
    blob.rotation.x = -Math.PI / 2;
    blob.position.y = 0.03;
    g.add(blob);

    this.rig = new THREE.Group();
    g.add(this.rig);

    const skin = new THREE.MeshLambertMaterial({ color: 0xc8a07a });
    const jacket = new THREE.MeshLambertMaterial({ color: 0x5c6248 });
    const jacketDark = new THREE.MeshLambertMaterial({ color: 0x4a5038 });
    const pants = new THREE.MeshLambertMaterial({ color: 0x33363c });
    const hairM = new THREE.MeshLambertMaterial({ color: 0x2a2018 });
    const boot = new THREE.MeshLambertMaterial({ color: 0x241f1a });
    const pack = new THREE.MeshLambertMaterial({ color: 0x7a543c });

    /* pernas */
    this.legL = new THREE.Mesh(geoBox(0.18, 0.4, 0.2), pants);
    this.legL.position.set(0.13, 0.32, 0);
    this.legR = new THREE.Mesh(geoBox(0.18, 0.4, 0.2), pants);
    this.legR.position.set(-0.13, 0.32, 0);
    const bootL = new THREE.Mesh(geoBox(0.2, 0.12, 0.26), boot);
    bootL.position.set(0, -0.16, 0.04);
    this.legL.add(bootL);
    const bootR = bootL.clone();
    this.legR.add(bootR);
    this.rig.add(this.legL, this.legR);

    /* torso */
    this.torso = new THREE.Mesh(geoBox(0.6, 0.46, 0.4), jacket);
    this.torso.position.y = 0.75;
    this.torso.castShadow = true;
    this.rig.add(this.torso);
    const stripe = new THREE.Mesh(geoBox(0.62, 0.08, 0.42), jacketDark);
    stripe.position.y = 0.62;
    this.rig.add(stripe);

    /* braços */
    this.armL = new THREE.Mesh(geoBox(0.14, 0.42, 0.16), jacket);
    this.armL.position.set(0.38, 0.78, 0);
    this.armR = this.armL.clone();
    this.armR.position.x = -0.38;
    const handL = new THREE.Mesh(geoBox(0.13, 0.1, 0.14), skin);
    handL.position.y = -0.24;
    this.armL.add(handL);
    this.armR.add(handL.clone());
    this.armL.castShadow = true;
    this.armR.castShadow = true;
    this.rig.add(this.armL, this.armR);

    /* mochila (nas costas) */
    const bp = new THREE.Mesh(geoBox(0.42, 0.36, 0.24), pack);
    bp.position.set(0, 0.78, -0.3);
    bp.castShadow = true;
    this.rig.add(bp);
    const bpTop = new THREE.Mesh(geoBox(0.36, 0.1, 0.2), new THREE.MeshLambertMaterial({ color: 0x5e402c }));
    bpTop.position.set(0, 0.98, -0.3);
    this.rig.add(bpTop);
    const roll = new THREE.Mesh(geoBox(0.34, 0.12, 0.12), new THREE.MeshLambertMaterial({ color: 0x8a8f70 }));
    roll.position.set(0, 0.58, -0.3);
    this.rig.add(roll);

    /* cabeça + cabelo */
    const head = new THREE.Mesh(geoBox(0.34, 0.24, 0.34), skin);
    head.position.y = 1.14;
    head.castShadow = true;
    this.rig.add(head);
    const hair = new THREE.Mesh(geoBox(0.38, 0.12, 0.38), hairM);
    hair.position.y = 1.28;
    this.rig.add(hair);
    const fringe = new THREE.Mesh(geoBox(0.38, 0.08, 0.1), hairM);
    fringe.position.set(0, 1.2, 0.16);
    this.rig.add(fringe);

    /* armas equipáveis (presas à mão direita) */
    this.weapons = {};
    const gunDark = new THREE.MeshLambertMaterial({ color: 0x26282c });
    const gunWood = new THREE.MeshLambertMaterial({ color: 0x6e4a2c });

    const pistol = new THREE.Group();
    const pSlide = new THREE.Mesh(geoBox(0.1, 0.1, 0.34), gunDark);
    pSlide.position.set(0, 0.05, 0.1);
    const pGrip = new THREE.Mesh(geoBox(0.09, 0.2, 0.12), gunDark);
    pGrip.position.set(0, -0.1, -0.02);
    pistol.add(pSlide, pGrip);

    const shotgun = new THREE.Group();
    const sBarrel = new THREE.Mesh(geoBox(0.09, 0.09, 0.85), gunDark);
    sBarrel.position.set(0, 0.04, 0.18);
    const sWood = new THREE.Mesh(geoBox(0.1, 0.12, 0.4), gunWood);
    sWood.position.set(0, -0.01, -0.22);
    shotgun.add(sBarrel, sWood);

    const rifle = new THREE.Group();
    const rBarrel = new THREE.Mesh(geoBox(0.08, 0.08, 1.0), gunDark);
    rBarrel.position.set(0, 0.04, 0.24);
    const rBody = new THREE.Mesh(geoBox(0.1, 0.14, 0.42), gunWood);
    rBody.position.set(0, -0.02, -0.18);
    const rMag = new THREE.Mesh(geoBox(0.08, 0.18, 0.1), gunDark);
    rMag.position.set(0, -0.14, 0.02);
    rifle.add(rBarrel, rBody, rMag);

    for (const [id, wpn] of Object.entries({ pistola: pistol, escopeta: shotgun, rifle })) {
      wpn.visible = false;
      wpn.position.set(0, -0.18, 0.1);
      this.armR.add(wpn);
      this.weapons[id] = wpn;
    }
    this.equipped = null;
  }

  setWeapon(id) {
    for (const [wid, wpn] of Object.entries(this.weapons)) wpn.visible = wid === id;
    this.equipped = id || null;
  }

  setMove(vx, vz, moving) {
    this.vx = vx; this.vz = vz; this.moving = moving;
    if (moving) {
      const target = Math.atan2(vx, vz);
      this.heading = lerpAngle(this.heading, target, 0.25);
    }
  }

  update(dt, t) {
    this.rig.rotation.y = this.heading;
    if (this.moving) {
      this.walkCycle += dt * 11;
      const s = Math.sin(this.walkCycle);
      this.legL.rotation.x = s * 0.75;
      this.legR.rotation.x = -s * 0.75;
      this.armL.rotation.x = -s * 0.55;
      this.armR.rotation.x = s * 0.55;
      this.rig.position.y = Math.abs(Math.sin(this.walkCycle)) * 0.05;
    } else {
      this.legL.rotation.x *= 0.8;
      this.legR.rotation.x *= 0.8;
      this.armL.rotation.x *= 0.8;
      this.armR.rotation.x *= 0.8;
      this.rig.position.y = 0;
      this.torso.scale.setScalar(1 + Math.sin(t * 2.2) * 0.015); /* respiração */
    }
    super.update(dt, t);
  }
}
