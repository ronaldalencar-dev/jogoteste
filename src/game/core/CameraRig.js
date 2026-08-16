/* CameraRig — OrthographicCamera top-down com suavização, zoom e limites */
import * as THREE from 'three';
import { clamp, lerp } from './Util.js';

export class CameraRig {
  constructor(aspect) {
    this.viewH = 27;              // unidades verticais visíveis
    this.minViewH = 15;
    this.maxViewH = 46;

    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 300);
    this.cam.rotation.x = -Math.PI / 2;   // 90° — topo puro
    this.cam.position.set(96, 120, 96);

    this.target = new THREE.Vector2(96, 96);
    this._pos = new THREE.Vector2(96, 96);
    this.aspect = aspect;
    this.shake = 0;
    this.updateProjection();
  }

  addShake(m) { this.shake = Math.min(1.4, this.shake + m); }

  updateProjection() {
    const w = this.viewH * this.aspect;
    this.cam.left = -w / 2;
    this.cam.right = w / 2;
    this.cam.top = this.viewH / 2;
    this.cam.bottom = -this.viewH / 2;
    this.cam.updateProjectionMatrix();
  }

  zoomBy(deltaY) {
    this.viewH = clamp(this.viewH * Math.exp(deltaY * 0.0011), this.minViewH, this.maxViewH);
    this.updateProjection();
  }

  /* segue o jogador com suavização + antecipação de movimento */
  follow(dt, x, z, vx = 0, vz = 0, worldSize = 192) {
    this.target.set(x + vx * 0.45, z + vz * 0.45);
    const k = 1 - Math.exp(-5.5 * dt);
    this._pos.x = lerp(this._pos.x, this.target.x, k);
    this._pos.y = lerp(this._pos.y, this.target.y, k);

    /* nunca mostrar fora do mapa */
    const halfW = (this.viewH * this.aspect) / 2;
    const halfH = this.viewH / 2;
    const px = clamp(this._pos.x, Math.min(halfW, worldSize / 2), Math.max(worldSize - halfW, worldSize / 2));
    const pz = clamp(this._pos.y, Math.min(halfH, worldSize / 2), Math.max(worldSize - halfH, worldSize / 2));

    let ox = 0, oz = 0;
    if (this.shake > 0.01) {
      ox = (Math.random() - 0.5) * this.shake * 0.9;
      oz = (Math.random() - 0.5) * this.shake * 0.9;
      this.shake *= Math.exp(-6 * dt);
    } else this.shake = 0;

    this.cam.position.set(px + ox, 120, pz + oz);
    this.cam.updateMatrixWorld();
  }

  /* panorâmica lenta usada no menu principal */
  panMenu(t, worldSize = 192) {
    const cx = worldSize * 0.5 + Math.sin(t * 0.05) * worldSize * 0.16;
    const cz = worldSize * 0.42 + Math.cos(t * 0.037) * worldSize * 0.14;
    this.cam.position.set(cx, 120, cz);
    this.cam.updateMatrixWorld();
  }

  onResize(aspect) {
    this.aspect = aspect;
    this.updateProjection();
  }
}
