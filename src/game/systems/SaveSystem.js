/* SaveSystem — persistência em localStorage */

const SAVE_KEY = 'cidade-em-guerra-save-v1';
const CFG_KEY = 'cidade-em-guerra-config-v1';

export class SaveSystem {
  hasSave() {
    try { return !!localStorage.getItem(SAVE_KEY); } catch { return false; }
  }

  save(data) {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 1, ts: Date.now(), ...data }));
      return true;
    } catch { return false; }
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  saveMeta() {
    const d = this.load();
    if (!d) return null;
    return { ts: d.ts, district: d.district || '—' };
  }

  loadConfig() {
    try {
      const raw = localStorage.getItem(CFG_KEY);
      return raw ? JSON.parse(raw) : { volume: 0.7, muted: false, pixel: 1 };
    } catch { return { volume: 0.7, muted: false, pixel: 1 }; }
  }

  saveConfig(cfg) {
    try { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); } catch { /* ignore */ }
  }
}
