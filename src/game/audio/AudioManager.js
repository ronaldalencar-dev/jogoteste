/* AudioManager — efeitos e ambiente 100% procedurais via Web Audio API */

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.volume = 0.7;
    this.muted = false;
    this._stepAlt = false;
    this._ambientOn = false;
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : this.volume;
    this.master.connect(this.ctx.destination);
  }

  setVolume(v) {
    this.volume = v;
    if (this.master && !this.muted) this.master.gain.value = v;
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : this.volume;
  }

  /* --- blocos básicos --- */
  _env(gainNode, t0, a, peak, d) {
    const g = gainNode.gain;
    g.setValueAtTime(0.0001, t0);
    g.linearRampToValueAtTime(peak, t0 + a);
    g.exponentialRampToValueAtTime(0.0001, t0 + a + d);
  }

  _tone(type, freq, dur, peak = 0.2, glideTo = null, when = 0) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime + when;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + dur);
    this._env(g, t0, 0.008, peak, dur);
    osc.connect(g).connect(this.master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.1);
  }

  _noise(dur, peak, filterFreq, type = 'lowpass', when = 0, q = 1) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime + when;
    const len = Math.max(1, Math.floor(this.ctx.sampleRate * dur));
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = filterFreq;
    f.Q.value = q;
    const g = this.ctx.createGain();
    this._env(g, t0, 0.006, peak, dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t0);
  }

  /* --- eventos do jogo --- */
  step(surface) {
    this._stepAlt = !this._stepAlt;
    const base = surface === 'grass' ? 260 : surface === 'metal' ? 700 : 420;
    const f = base * (this._stepAlt ? 1 : 0.85);
    this._noise(0.07, surface === 'grass' ? 0.05 : 0.09, f, 'bandpass', 0, 1.4);
  }

  uiHover() { this._tone('square', 660, 0.05, 0.05); }
  uiClick() { this._tone('square', 440, 0.09, 0.12, 240); }
  uiBack() { this._tone('square', 300, 0.09, 0.1, 180); }

  open() { this._noise(0.16, 0.12, 300, 'lowpass'); this._tone('triangle', 190, 0.14, 0.1, 130); }
  enterCar() { this._noise(0.1, 0.1, 500, 'bandpass'); this._tone('square', 220, 0.08, 0.08, 300); }
  exitCar() { this._noise(0.12, 0.1, 380, 'bandpass'); this._tone('square', 300, 0.08, 0.07, 210); }
  crash() { this._noise(0.22, 0.18, 240, 'lowpass'); this._tone('sine', 90, 0.18, 0.12, 45); }
  refuel() {
    this._noise(0.7, 0.07, 900, 'bandpass', 0, 0.8);
    this._tone('sine', 300, 0.5, 0.06, 520, 0.1);
  }
  equip() { this._noise(0.06, 0.1, 2400, 'highpass'); this._tone('square', 900, 0.05, 0.07, 600); }
  engineDeny() { this._tone('sawtooth', 70, 0.3, 0.08, 50); }

  /* --- motor do carro (contínuo, pitch acompanha a velocidade) --- */
  startEngine() {
    if (!this.ctx || this._engine) return;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 46;
    const sub = this.ctx.createOscillator();
    sub.type = 'square';
    sub.frequency.value = 23;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 320;
    const g = this.ctx.createGain();
    g.gain.value = 0.0001;
    g.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 0.25);
    osc.connect(f); sub.connect(f); f.connect(g); g.connect(this.master);
    osc.start(); sub.start();
    this._engine = { osc, sub, g, f };
  }

  setEngine(speed01, throttle) {
    if (!this._engine) return;
    const t = this.ctx.currentTime;
    const hz = 44 + speed01 * 92;
    this._engine.osc.frequency.setTargetAtTime(hz, t, 0.08);
    this._engine.sub.frequency.setTargetAtTime(hz / 2, t, 0.08);
    this._engine.f.frequency.setTargetAtTime(260 + speed01 * 700, t, 0.1);
    this._engine.g.gain.setTargetAtTime(0.04 + speed01 * 0.045 + (throttle ? 0.012 : 0), t, 0.1);
  }

  stopEngine() {
    if (!this._engine) return;
    const e = this._engine;
    this._engine = null;
    const t = this.ctx.currentTime;
    e.g.gain.setTargetAtTime(0.0001, t, 0.12);
    e.osc.frequency.setTargetAtTime(30, t, 0.2);
    setTimeout(() => { try { e.osc.stop(); e.sub.stop(); } catch { /* já parado */ } }, 900);
  }
  pickup() {
    this._tone('triangle', 523, 0.08, 0.14);
    this._tone('triangle', 784, 0.1, 0.14, null, 0.07);
  }
  heal() {
    this._tone('sine', 392, 0.16, 0.14);
    this._tone('sine', 587, 0.22, 0.14, null, 0.1);
  }
  hurt() { this._tone('sawtooth', 140, 0.16, 0.1, 70); }
  save() {
    this._tone('square', 392, 0.08, 0.09);
    this._tone('square', 523, 0.08, 0.09, null, 0.09);
    this._tone('square', 659, 0.14, 0.09, null, 0.18);
  }
  radio() { this._noise(0.5, 0.1, 1600, 'bandpass', 0, 0.6); this._tone('sine', 880, 0.3, 0.05, 620, 0.1); }
  denied() { this._tone('square', 180, 0.12, 0.1, 140); }

  /* --- ambiente: vento + estrondos distantes --- */
  startAmbient() {
    if (!this.ctx || this._ambientOn) return;
    this._ambientOn = true;

    const len = this.ctx.sampleRate * 4;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;
      d[i] = last * 3.2;
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 320;
    const g = this.ctx.createGain();
    g.gain.value = 0.05;
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 0.028;
    lfo.connect(lfoGain).connect(g.gain);
    src.connect(f).connect(g).connect(this.master);
    src.start();
    lfo.start();

    const rumbleLoop = () => {
      if (!this._ambientOn) return;
      this._tone('sine', 42 + Math.random() * 20, 1.6, 0.06, 28);
      this._noise(1.4, 0.045, 140, 'lowpass');
      setTimeout(rumbleLoop, 18000 + Math.random() * 22000);
    };
    setTimeout(rumbleLoop, 9000);
  }

  dispose() {
    this._ambientOn = false;
    if (this.ctx) this.ctx.close().catch(() => {});
  }
}
