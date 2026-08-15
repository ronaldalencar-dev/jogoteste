/* UIManager — monta e coordena toda a interface DOM do jogo */
import { HUD } from './HUD.js';
import { InventoryUI } from './InventoryUI.js';
import { MainMenu } from './MainMenu.js';
import { PauseMenu } from './PauseMenu.js';

export class UIManager {
  constructor(container, game) {
    this.game = game;
    this.container = container;

    const root = document.createElement('div');
    root.innerHTML = `
      <div class="vignette"></div>
      <div class="fade-cover"></div>
      <div class="toasts"></div>
      <div class="scanlines"></div>
      <div class="screen quit-screen">
        <div class="quit-panel px-panel">
          <h3>FIM DA TRANSMISSÃO</h3>
          <p>Você deixou a cidade para trás... por enquanto. A base, os suprimentos e o que restou dos sobreviventes esperarão o seu retorno.</p>
          <div class="menu-buttons">
            <button class="menu-btn quit-back"><span class="arr">▸</span>VOLTAR AO MENU</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(root);

    this.vignette = root.querySelector('.vignette');
    this.fade = root.querySelector('.fade-cover');
    this.toastsEl = root.querySelector('.toasts');
    this.quitEl = root.querySelector('.quit-screen');
    root.querySelector('.quit-back').addEventListener('click', () => {
      game.audio.uiClick();
      game.toMenu();
    });

    this.hud = new HUD(container, game);
    this.inventoryUI = new InventoryUI(container, game);
    this.mainMenu = new MainMenu(container, game);
    this.pauseMenu = new PauseMenu(container, game);

    this._toastTimers = [];
  }

  setState(state) {
    this.mainMenu.el.classList.toggle('on', state === 'menu');
    this.pauseMenu.el.classList.toggle('on', state === 'paused');
    this.inventoryUI.el.classList.toggle('on', state === 'inventory');
    this.quitEl.classList.toggle('on', state === 'quit');
    this.hud.el.classList.toggle('hidden', state === 'menu' || state === 'quit');
    if (state === 'menu') this.mainMenu.render();
    if (state === 'inventory') this.inventoryUI.refresh(this.game.inventory.counts);
  }

  setHP(hp) { this.hud.setHP(hp); }
  setDistrict(d) { this.hud.setDistrict(d); }
  setPrompt(label) { this.hud.setPrompt(label); }
  setResources(counts, changedId) { this.hud.setResources(counts, changedId); }

  toast(msg, type = 'info', duration = 3000) {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = msg;
    this.toastsEl.appendChild(el);
    while (this.toastsEl.children.length > 5) this.toastsEl.removeChild(this.toastsEl.firstChild);
    const t = setTimeout(() => {
      el.classList.add('out');
      setTimeout(() => el.remove(), 320);
    }, duration);
    this._toastTimers.push(t);
  }

  setHazard(on) { this.vignette.classList.toggle('hazard', on); }

  fadeTo(on) { this.fade.classList.toggle('on', on); }

  dispose() {
    this._toastTimers.forEach(clearTimeout);
  }
}
