/* InventoryUI — mochila estilo Minecraft: grade de slots + tooltip */
import { ITEMS, SLOT_ORDER } from '../data/items.js';
import { itemIcon } from './icons.js';

const GRID_SLOTS = 36;

export class InventoryUI {
  constructor(container, game) {
    this.game = game;
    const el = document.createElement('div');
    el.className = 'screen inv-screen';
    el.innerHTML = `
      <div class="inv-panel px-panel">
        <div class="inv-head">
          <div>
            <h2 class="inv-title">MOCHILA</h2>
            <div class="inv-sub">sobrevivente-07 · suprimentos e equipamento</div>
          </div>
          <div class="inv-close">[I] fechar</div>
        </div>
        <div class="inv-grid"></div>
        <div class="inv-foot">
          <span><b>clique</b> usar/equipar</span>
          <span><b>1–8</b> usar slot rápido</span>
          <span><b>ESC</b> fechar</span>
        </div>
      </div>
      <div class="inv-tip" style="display:none"></div>
    `;
    container.appendChild(el);
    this.el = el;
    this.gridEl = el.querySelector('.inv-grid');
    this.tipEl = el.querySelector('.inv-tip');
    this.slots = [];
    this._buildSlots();

    el.addEventListener('mousemove', (e) => {
      if (this.tipEl.style.display === 'none') return;
      const rect = el.getBoundingClientRect();
      this.tipEl.style.left = Math.min(e.clientX - rect.left + 14, rect.width - 260) + 'px';
      this.tipEl.style.top = Math.max(8, e.clientY - rect.top - this.tipEl.offsetHeight - 12) + 'px';
    });
  }

  _buildSlots() {
    for (let i = 0; i < GRID_SLOTS; i++) {
      const id = SLOT_ORDER[i] || null;
      const slot = document.createElement('button');
      slot.className = 'inv-slot' + (i < SLOT_ORDER.length ? ' typed' : '');
      slot.dataset.idx = i;
      if (id) {
        slot.innerHTML = `
          <img class="slot-icon" src="${itemIcon(id)}" alt="" />
          <span class="slot-qty">0</span>
          <span class="slot-key">${i + 1 <= 8 ? i + 1 : ''}</span>
          <span class="slot-badge">NA MÃO</span>
        `;
        slot.addEventListener('click', () => {
          if ((this.game.inventory.counts[id] || 0) > 0) this.game.useItem(id);
          else { this.game.audio.denied(); this._flash(slot); }
        });
        slot.addEventListener('mouseenter', () => { this.game.audio.uiHover(); this._showTip(id, slot); });
        slot.addEventListener('mouseleave', () => { this.tipEl.style.display = 'none'; });
      } else {
        slot.disabled = true;
      }
      this.gridEl.appendChild(slot);
      this.slots.push({ el: slot, id });
    }
  }

  _flash(slot) {
    slot.classList.remove('deny');
    void slot.offsetWidth;
    slot.classList.add('deny');
  }

  _showTip(id, slot) {
    const def = ITEMS[id];
    const qty = this.game.inventory.counts[id] || 0;
    const equipped = this.game.inventory.equipped === id;
    const action = qty <= 0 ? '<span class="tip-act none">— nenhum no estoque —</span>'
      : def.tipo === 'arma'
        ? `<span class="tip-act">${equipped ? 'clique: GUARDAR' : 'clique: EQUIPAR'}</span>`
        : `<span class="tip-act">${def.acao}</span>`;
    this.tipEl.innerHTML = `
      <div class="tip-name" style="color:${def.cor}">${def.nome} <span class="tip-x">×${qty}</span></div>
      <div class="tip-desc">${def.desc}</div>
      ${action}
    `;
    this.tipEl.style.display = 'block';
    this.tipEl.style.left = (slot.offsetLeft + 60) + 'px';
    this.tipEl.style.top = (slot.offsetTop - 10) + 'px';
  }

  refresh(counts) {
    const equipped = this.game.inventory.equipped;
    for (const s of this.slots) {
      if (!s.id) continue;
      const n = counts[s.id] || 0;
      s.el.querySelector('.slot-qty').textContent = n;
      s.el.classList.toggle('empty', n <= 0);
      s.el.classList.toggle('equipped', equipped === s.id);
    }
  }
}
