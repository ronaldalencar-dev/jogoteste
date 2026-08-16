/* InteractionSystem — zonas de interação [E] com verbos próprios */
import { dist2 } from '../core/Util.js';
import { ITEMS } from '../data/items.js';

export class InteractionSystem {
  constructor(game) {
    this.game = game;
    this.zones = new Map();
    this.current = null;
    this.enabled = true;
    this._respawnSeq = 0;
  }

  register(zone) {
    this.zones.set(zone.id, { looted: false, ...zone });
    return this.zones.get(zone.id);
  }

  get(id) { return this.zones.get(id); }

  unregister(id) { this.zones.delete(id); }

  markLooted(id, silent = false) {
    const z = this.zones.get(id);
    if (!z) return;
    z.looted = true;
    if (!silent && z.host && z.host.applyLooted) z.host.applyLooted();
  }

  update(dt) {
    const g = this.game;
    if (!this.enabled) {
      this.current = null;
      g.ui.setPrompt(null);
      return;
    }
    const p = g.player;
    let best = null, bestD = Infinity;

    for (const z of this.zones.values()) {
      if (z.looted && z.kind !== 'vehicle') continue;
      if (z.host && z.host.updateZones) z.host.updateZones();
      const d = dist2(p.x, p.z, z.x, z.z);
      if (d < z.r * z.r && d < bestD) { best = z; bestD = d; }
    }

    this.current = best;
    g.ui.setPrompt(best ? (best.getLabel ? best.getLabel(g) : best.label) : null);

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
          g.ui.toast(`+${it.qty} ${ITEMS[it.id] ? ITEMS[it.id].nome : it.id}`, 'loot');
          delay += 0.14;
        }
        this.markLooted(z.id);
        g.addLootedId(z.id);
        if (z.respawn) g.world.containerLooted(z);
        break;
      }
      case 'pickup': {
        g.inventory.add(z.item, z.qty || 1);
        g.audio.pickup();
        g.particles.burst(z.x, 0.8, z.z, 0xe05040, 10);
        g.ui.toast(`+${z.qty || 1} ${ITEMS[z.item].nome}`, 'loot');
        this.markLooted(z.id);
        g.addLootedId(z.id);
        g.world.removePropById(z.id);
        break;
      }
      case 'vehicle':
        if (z.onUse) z.onUse(g);
        break;
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
}
