/* Input — teclado com estado contínuo e detecção de borda + mouse para mira */

const PREVENT = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space']);

export class Input {
  constructor() {
    this.down = new Set();
    this.pressed = new Set();   // bordas deste frame
    this.wheel = 0;
    this.enabled = true;
    this.mouseX = 0;
    this.mouseY = 0;

    this._onDown = (e) => {
      if (PREVENT.has(e.code)) e.preventDefault();
      if (!e.repeat) this.pressed.add(e.code);
      this.down.add(e.code);
    };
    this._onUp = (e) => this.down.delete(e.code);
    this._onBlur = () => { this.down.clear(); };
    this._onWheel = (e) => { this.wheel += e.deltaY; };
    this._onMouseDown = (e) => {
      const code = e.button === 0 ? 'Mouse0' : e.button === 2 ? 'Mouse2' : 'Mouse' + e.button;
      this.pressed.add(code);
      this.down.add(code);
    };
    this._onMouseUp = (e) => {
      const code = e.button === 0 ? 'Mouse0' : e.button === 2 ? 'Mouse2' : 'Mouse' + e.button;
      this.down.delete(code);
    };
    this._onContextMenu = (e) => {
      e.preventDefault();
    };
    this._onMouseMove = (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    };

    window.addEventListener('keydown', this._onDown);
    window.addEventListener('keyup', this._onUp);
    window.addEventListener('blur', this._onBlur);
    window.addEventListener('wheel', this._onWheel, { passive: true });
    window.addEventListener('mousedown', this._onMouseDown);
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('contextmenu', this._onContextMenu);
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
    window.removeEventListener('mousedown', this._onMouseDown);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('contextmenu', this._onContextMenu);
  }
}
