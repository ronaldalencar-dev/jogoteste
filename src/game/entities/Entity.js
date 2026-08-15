/* Entity — classe base para todas as entidades do mundo */
import * as THREE from 'three';

let NEXT_ID = 1;

export class Entity {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.id = 'e' + NEXT_ID++;
    this.alive = true;
    this.updaters = [];
    scene.add(this.group);
  }

  setPosition(x, z, y = 0) {
    this.group.position.set(x, y, z);
    return this;
  }

  get x() { return this.group.position.x; }
  get z() { return this.group.position.z; }

  onUpdate(fn) { this.updaters.push(fn); }

  update(dt, t) {
    for (const fn of this.updaters) fn(dt, t);
  }

  dispose() {
    this.scene.remove(this.group);
    this.alive = false;
  }
}
