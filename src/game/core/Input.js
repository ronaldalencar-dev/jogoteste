/* Input — teclado com estado contínuo e detecção de borda */

const PREVENT = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space']);

export class Input {
  constructor() {
    this.down = new Set();
    this.pressed = new Set();   // bordas deste frame
    this.wheel = 0;
    this.enabled = true;

    this._onDown = (e) => {
      if (PREVENT.has(e.code)) e.preventDefault();
      if (!e.repeat) this.pressed.add(e.code);
      this.down.add(e.code);
    };
    this._onUp = (e) => this.down.delete(e.code);
    this._onBlur = () => { this.down.clear(); };
    this._onWheel = (e) => { this.wheel += e.deltaY; };

    window.addEventListener('keydown', this._onDown);
    window.addEventListener('keyup', this._onUp);
    window.addEventListener('blur', this._onBlur);
    window.addEventListener('wheel', this._onWheel, { passive: true });
  }

  isDown(...codes) {
    if (!this.enabled) return false;
    return codes.some((c) => this.down.has(c));
  }

  wasPressed(code) {
    if (!this.enabled) return false;
    return this.pressed.has(code);
  }

  consumeWheel() {
    const w = this.wheel;
    this.wheel = 0;
    return w;
  }

  /* vetor de movimento WASD + setas (já normalizado) */
  moveVector() {
    let x = 0, z = 0;
    if (this.isDown('KeyW', 'ArrowUp')) z -= 1;
    if (this.isDown('KeyS', 'ArrowDown')) z += 1;
    if (this.isDown('KeyA', 'ArrowLeft')) x -= 1;
    if (this.isDown('KeyD', 'ArrowRight')) x += 1;
    if (x !== 0 && z !== 0) { const n = Math.SQRT1_2; x *= n; z *= n; }
    return { x, z, moving: x !== 0 || z !== 0 };
  }

  endFrame() {
    this.pressed.clear();
  }

  dispose() {
    window.removeEventListener('keydown', this._onDown);
    window.removeEventListener('keyup', this._onUp);
    window.removeEventListener('blur', this._onBlur);
    window.removeEventListener('wheel', this._onWheel);
  }
}
