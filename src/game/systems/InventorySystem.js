/* InventorySystem — recursos, armas e combustível do sobrevivente */
import { ITEMS } from '../data/items.js';

export class InventorySystem {
  constructor(game) {
    this.game = game;
    this.counts = { comida: 3, medicamento: 1, material: 6, gasolina: 0, municao: 0, pistola: 0, escopeta: 0, rifle: 0 };
    this.equipped = null;
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

    switch (def.tipo) {
      case 'consumivel': {
        if (g.player.hp >= 100) {
          g.audio.denied();
          g.ui.toast('Vida já está cheia.', 'info');
          return false;
        }
        this.counts[id]--;
        g.player.hp = Math.min(100, g.player.hp + def.cura);
        g.audio.heal();
        g.particles.burst(this._fxX(), 1.2, this._fxZ(), id === 'comida' ? 0xf0a050 : 0x70d880, 12);
        g.ui.toast(`+${def.cura} VIDA  (${def.nome.toLowerCase()} consumido)`, 'heal');
        g.ui.setHP(g.player.hp);
        this._emit(id);
        return true;
      }
      case 'arma': {
        if (this.equipped === id) {
          this.equipped = null;
          g.player.setWeapon(null);
          g.audio.equip();
          g.ui.toast(`${def.nome} guardada.`, 'info');
        } else {
          this.equipped = id;
          g.player.setWeapon(id);
          g.audio.equip();
          g.particles.burst(this._fxX(), 1.2, this._fxZ(), 0xc8ccd4, 6);
          g.ui.toast(`${def.nome} equipada — dano ${def.dano} (combate em breve)`, 'loot');
        }
        this._emit(id);
        return true;
      }
      case 'combustivel': {
        /* a gasolina é consumida automaticamente ao abastecer um carro */
        g.audio.denied();
        g.ui.toast('Saia e fique perto de um carro para abastecer o tanque.', 'info');
        return false;
      }
      default:
        g.audio.denied();
        g.ui.toast(id === 'material'
          ? 'Materiais servem para construir e reparar a base.'
          : 'Munição será usada quando o combate chegar.', 'info');
        return false;
    }
  }

  /* efeitos visuais saem do jogador ou do carro */
  _fxX() { return this.game.driving && this.game.drivingSystem.vehicle ? this.game.drivingSystem.vehicle.x : this.game.player.x; }
  _fxZ() { return this.game.driving && this.game.drivingSystem.vehicle ? this.game.drivingSystem.vehicle.z : this.game.player.z; }

  snapshot() { return { counts: { ...this.counts }, equipped: this.equipped }; }

  restore(data) {
    if (!data) return;
    /* compatível com saves antigos (objeto direto de counts) */
    const counts = data.counts || data;
    this.counts = {
      comida: 0, medicamento: 0, material: 0, gasolina: 0, municao: 0,
      pistola: 0, escopeta: 0, rifle: 0, ...counts,
    };
    this.equipped = data.equipped || null;
    if (this.equipped && !this.has(this.equipped)) this.equipped = null;
    this.game.player.setWeapon(this.equipped);
    this._emit();
  }

  _emit(changedId) {
    if (this.onChange) this.onChange(this.counts, changedId);
  }
}
