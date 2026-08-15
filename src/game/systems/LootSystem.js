/* LootSystem — rolagem de tabelas de loot */
import { LOOT_TABLES } from '../data/items.js';

export class LootSystem {
  roll(tableId) {
    const table = LOOT_TABLES[tableId];
    if (!table) return [];
    const rolls = Math.random() < 0.35 ? 2 : 1;
    const out = {};
    for (let r = 0; r < rolls; r++) {
      const total = table.reduce((s, e) => s + e[1], 0);
      let t = Math.random() * total;
      let entry = table[0];
      for (const e of table) {
        t -= e[1];
        if (t <= 0) { entry = e; break; }
      }
      const [item, , min, max] = entry;
      const qty = min + Math.floor(Math.random() * (max - min + 1));
      out[item] = (out[item] || 0) + qty;
    }
    return Object.entries(out).map(([id, qty]) => ({ id, qty }));
  }
}
