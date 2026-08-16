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
  setDriving(on, fuel, speed) { this.hud.setDriving(on, fuel, speed); }

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

  /* modal de confirmação de abastecimento */
  showFuelConfirm(vehicle, fuelAmount) {
    const g = this.game;
    
    /* cria modal sobreposto */
    const modal = document.createElement('div');
    modal.className = 'fuel-modal';
    modal.innerHTML = `
      <div class="fuel-panel px-panel">
        <h3>ABASTECER VEÍCULO?</h3>
        <p>Tanque atual: <b>${Math.round(vehicle.fuel)}%</b></p>
        <p>Galões disponíveis: <b>${g.inventory.counts.gasolina}</b></p>
        <p>Usar <b>${fuelAmount} galão(ões)</b> para encher até <b>${Math.min(100, vehicle.fuel + fuelAmount * 50)}%</b>?</p>
        <div class="menu-buttons">
          <button class="menu-btn fuel-confirm"><span class="arr">▸</span>SIM, ABASTECER</button>
          <button class="menu-btn fuel-cancel"><span class="arr">▸</span>NÃO, ENTRAR NO CARRO</button>
        </div>
      </div>
    `;
    
    this.container.appendChild(modal);
    
    /* bloqueia input do jogo */
    const prevEnabled = g.input.enabled;
    g.input.enabled = false;
    
    modal.querySelector('.fuel-confirm').addEventListener('click', () => {
      g.audio.uiClick();
      modal.remove();
      g.input.enabled = prevEnabled;
      g.drivingSystem.confirmRefuel(vehicle, fuelAmount);
    });
    
    modal.querySelector('.fuel-cancel').addEventListener('click', () => {
      g.audio.uiBack();
      modal.remove();
      g.input.enabled = prevEnabled;
      g.drivingSystem.enter(vehicle);
    });
    
    /* ESC cancela */
    const escHandler = (e) => {
      if (e.code === 'Escape') {
        window.removeEventListener('keydown', escHandler);
        g.audio.uiBack();
        modal.remove();
        g.input.enabled = prevEnabled;
        g.drivingSystem.enter(vehicle);
      }
    };
    window.addEventListener('keydown', escHandler);
  }

  dispose() {
    this._toastTimers.forEach(clearTimeout);
  }
}
