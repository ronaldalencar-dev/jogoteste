/* Time — relógio do jogo com delta limitado */

export class Time {
  constructor() {
    this.now = 0;        // segundos desde o boot
    this.dt = 0;         // delta do frame
    this.elapsed = 0;    // tempo jogado (pausável)
    this._last = 0;
  }

  update(timestampMs) {
    const t = timestampMs / 1000;
    if (!this._last) this._last = t;
    this.dt = Math.min(0.05, t - this._last);
    this._last = t;
    this.now = t;
    return this.dt;
  }

  tick(playDt) {
    this.elapsed += playDt;
  }
}
