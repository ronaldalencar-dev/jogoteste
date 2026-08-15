/* InventorySystem — recursos do sobrevivente */
import { ITEMS } from '../data/items.js';

export class InventorySystem {
  constructor(game) {
    this.game = game;
    this.counts = { comida: 3, medicamento: 1, material: 6 };
    this.onChange = null;
  }

  add(id, qty) {
    this.counts[id] = (this.counts[id] || 0) + qty;
    this._emit(id);
  }

  has(id) { return (this.counts[id] || 0) > 0; }

  use(id) {
    const def = ITEMS[id];
    const g = this.game;
    if (!def || !this.has(id)) {
      g.audio.denied();
      return false;
    }
    if (def.cura > 0) {
      if (g.player.hp >= 100) {
        g.audio.denied();
        g.ui.toast('Vida já está cheia.', 'info');
        return false;
      }
      this.counts[id]--;
      g.player.hp = Math.min(100, g.player.hp + def.cura);
      g.audio.heal();
      g.particles.burst(g.player.x, 1.2, g.player.z, id === 'comida' ? 0xf0a050 : 0x70d880, 12);
      g.ui.toast(`+${def.cura} VIDA  (${def.nome.toLowerCase()} consumido)`, 'heal');
      g.ui.setHP(g.player.hp);
      this._emit(id);
      return true;
    }
    g.audio.denied();
    g.ui.toast('Materiais servem para construir e reparar a base.', 'info');
    return false;
  }

  snapshot() { return { ...this.counts }; }
  restore(data) {
    this.counts = { comida: 0, medicamento: 0, material: 0, ...data };
    this._emit();
  }

  _emit(changedId) {
    if (this.onChange) this.onChange(this.counts, changedId);
  }
}
