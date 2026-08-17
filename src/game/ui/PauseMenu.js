/* PauseMenu — pausa com save rápido e configurações */
import { createSettingsForm } from './MainMenu.js';

export class PauseMenu {
  constructor(container, game) {
    this.game = game;
    const el = document.createElement('div');
    el.className = 'screen menu-pause';
    el.innerHTML = `
      <div class="pause-panel px-panel">
        <h2 class="pause-title">PAUSA</h2>
        <div class="pause-sub">a cidade espera. ela sempre espera.</div>
        <div class="menu-buttons">
          <button class="menu-btn" data-act="resume"><span class="arr">▸</span>CONTINUAR</button>
          <button class="menu-btn" data-act="save"><span class="arr">▸</span>SALVAR JOGO</button>
          <button class="menu-btn" data-act="settings"><span class="arr">▸</span>CONFIGURAÇÕES</button>
          <button class="menu-btn" data-act="menu"><span class="arr">▸</span>MENU PRINCIPAL</button>
          <button class="menu-btn danger" data-act="quit"><span class="arr">▸</span>SAIR DO JOGO</button>
        </div>
        <div class="settings-slot" style="display:none"></div>
      </div>
    `;
    container.appendChild(el);
    this.el = el;

    this.settingsSlot = el.querySelector('.settings-slot');
    this.settingsSlot.appendChild(createSettingsForm(game));

    el.querySelectorAll('.menu-btn').forEach((b) => {
      b.addEventListener('mouseenter', () => game.audio.uiHover());
      b.addEventListener('click', () => {
        game.audio.uiClick();
        const act = b.dataset.act;
        if (act === 'settings') {
          const open = this.settingsSlot.style.display !== 'none';
          this.settingsSlot.style.display = open ? 'none' : 'block';
        } else {
          this.settingsSlot.style.display = 'none';
          game.pauseAction(act);
        }
      });
    });
  }
}
