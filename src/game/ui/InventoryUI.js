/* InventoryUI — painel de suprimentos (I abre/fecha, ESC fecha) */
import { ITEMS } from '../data/items.js';
import { ICONS } from './HUD.js';

function bigIcon(id) {
  return (ICONS[id] || '').replace('width="14" height="14"', 'width="30" height="30"');
}

export class InventoryUI {
  constructor(container, game) {
    this.game = game;
    const el = document.createElement('div');
    el.className = 'screen inv-screen';
    el.innerHTML = `
      <div class="inv-panel px-panel">
        <h2 class="inv-title">MOCHILA</h2>
        <div class="inv-sub">suprimentos do sobrevivente</div>
        <div class="rows"></div>
        <div class="inv-foot">[I] ou [ESC] para fechar · materiais serão usados na construção da base</div>
      </div>
    `;
    container.appendChild(el);
    this.el = el;
    this.rowsEl = el.querySelector('.rows');
    this._buildRows();
  }

  _buildRows() {
    this.rows = {};
    for (const def of Object.values(ITEMS)) {
      const row = document.createElement('div');
      row.className = 'inv-row';
      row.innerHTML = `
        ${bigIcon(def.id)}
        <div>
          <div class="nm">${def.nome}</div>
          <div class="ds">${def.desc}</div>
        </div>
        <div class="qty">0</div>
        ${def.cura > 0 ? `<button class="inv-use">USAR</button>` : `<button class="inv-use" disabled>—</button>`}
      `;
      const btn = row.querySelector('.inv-use');
      if (def.cura > 0) {
        btn.addEventListener('click', () => this.game.useItem(def.id));
      }
      this.rowsEl.appendChild(row);
      this.rows[def.id] = { qty: row.querySelector('.qty'), btn, def };
    }
  }

  refresh(counts) {
    for (const [id, r] of Object.entries(this.rows)) {
      const n = counts[id] || 0;
      r.qty.textContent = n;
      if (r.def.cura > 0) r.btn.disabled = n <= 0;
    }
  }
}
