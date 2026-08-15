/* InteractionSystem — zonas de interação [E] com verbos próprios */
import { dist2 } from '../core/Util.js';

export class InteractionSystem {
  constructor(game) {
    this.game = game;
    this.zones = new Map();
    this.current = null;
  }

  register(zone) {
    /* zone: {id,x,z,r,label,kind:'loot'|'examine'|'use', table?, text?, onUse?, host?} */
    this.zones.set(zone.id, { looted: false, ...zone });
    return this.zones.get(zone.id);
  }

  get(id) { return this.zones.get(id); }

  markLooted(id, silent = false) {
    const z = this.zones.get(id);
    if (!z) return;
    z.looted = true;
    if (!silent && z.host && z.host.applyLooted) z.host.applyLooted();
  }

  update(dt) {
    const g = this.game;
    const p = g.player;
    let best = null, bestD = Infinity;

    for (const z of this.zones.values()) {
      if (z.looted && z.kind === 'loot') continue;
      const d = dist2(p.x, p.z, z.x, z.z);
      if (d < z.r * z.r && d < bestD) { best = z; bestD = d; }
    }

    this.current = best;
    g.ui.setPrompt(best ? best.label : null);

    if (best && g.input.wasPressed('KeyE')) this._activate(best);
  }

  _activate(z) {
    const g = this.game;
    switch (z.kind) {
      case 'loot': {
        g.audio.open();
        const items = g.loot.roll(z.table || 'crate');
        let delay = 0.12;
        if (items.length === 0) items.push({ id: 'material', qty: 1 });
        for (const it of items) {
          setTimeout(() => {
            g.inventory.add(it.id, it.qty);
            g.audio.pickup();
            g.particles.burst(z.x, 1.0, z.z, 0xf0d870, 8);
          }, delay * 1000);
          g.ui.toast(`+${it.qty} ${this._nome(it.id)}`, 'loot');
          delay += 0.14;
        }
        this.markLooted(z.id);
        if (z.host && z.host.applyLooted) z.host.applyLooted();
        g.addLootedId(z.id);
        break;
      }
      case 'examine': {
        g.audio.open();
        const text = Array.isArray(z.text) ? z.text[Math.floor(Math.random() * z.text.length)] : z.text;
        g.ui.toast(text, 'info', 4200);
        break;
      }
      case 'use':
        if (z.onUse) z.onUse();
        break;
    }
  }

  _nome(id) {
    return { comida: 'COMIDA', medicamento: 'MEDICAMENTOS', material: 'MATERIAIS' }[id] || id;
  }
}
