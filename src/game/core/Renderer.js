/* Renderer — WebGLRenderer com resolução interna reduzida para pixel art real */
import * as THREE from 'three';

export const PIXEL_SCALES = { 0: 2.2, 1: 2.9, 2: 3.6 }; // nítido / médio / pesado

export class Renderer {
  constructor(container) {
    this.container = container;
    this.pixelLevel = 1;

    this.three = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
    });
    this.three.setPixelRatio(1);
    this.three.outputColorSpace = THREE.SRGBColorSpace;
    this.three.toneMapping = THREE.NoToneMapping;
    this.three.shadowMap.enabled = true;
    this.three.shadowMap.type = THREE.PCFShadowMap;
    this.three.domElement.classList.add('game-canvas');
    container.appendChild(this.three.domElement);

    this.resize();
    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
  }

  setPixelLevel(level) {
    this.pixelLevel = level;
    this.resize();
  }

  resize() {
    const s = PIXEL_SCALES[this.pixelLevel] ?? 2.9;
    const w = Math.max(320, Math.floor(window.innerWidth / s));
    const h = Math.max(200, Math.floor(window.innerHeight / s));
    this.three.setSize(w, h, false);
    this.aspect = w / h;
  }

  render(scene, camera) {
    this.three.render(scene, camera);
  }

  dispose() {
    window.removeEventListener('resize', this._onResize);
    this.three.dispose();
  }
}
