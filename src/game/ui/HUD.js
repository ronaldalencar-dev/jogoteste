/* HUD — nome, vida, recursos, distrito e prompt de interação */

export const ICONS = {
  comida: `<svg class="ico" viewBox="0 0 14 14" shape-rendering="crispEdges" width="14" height="14">
    <rect x="6" y="1" width="2" height="2" fill="#5a4530"/><rect x="8" y="1" width="2" height="2" fill="#4a6a34"/>
    <rect x="3" y="3" width="8" height="2" fill="#d0683c"/><rect x="2" y="5" width="10" height="5" fill="#d0683c"/>
    <rect x="3" y="10" width="8" height="2" fill="#a84e2a"/><rect x="4" y="5" width="2" height="3" fill="#e8926a"/>
  </svg>`,
  medicamento: `<svg class="ico" viewBox="0 0 14 14" shape-rendering="crispEdges" width="14" height="14">
    <rect x="2" y="2" width="10" height="10" fill="#e8e6da"/><rect x="2" y="2" width="10" height="2" fill="#c9c7ba"/>
    <rect x="6" y="4" width="2" height="6" fill="#c23b2e"/><rect x="4" y="6" width="6" height="2" fill="#c23b2e"/>
  </svg>`,
  material: `<svg class="ico" viewBox="0 0 14 14" shape-rendering="crispEdges" width="14" height="14">
    <rect x="3" y="3" width="8" height="8" fill="#9aa3ad"/><rect x="5" y="5" width="4" height="4" fill="#6d757e"/>
    <rect x="1" y="5" width="2" height="4" fill="#9aa3ad"/><rect x="11" y="5" width="2" height="4" fill="#9aa3ad"/>
    <rect x="5" y="1" width="4" height="2" fill="#9aa3ad"/><rect x="5" y="11" width="4" height="2" fill="#9aa3ad"/>
  </svg>`,
};

export class HUD {
  constructor(container, game) {
    this.game = game;
    const el = document.createElement('div');
    el.className = 'hud hidden';
    el.innerHTML = `
      <div class="hud-identity px-panel">
        <div class="hud-name">
          <svg viewBox="0 0 12 12" shape-rendering="crispEdges" width="14" height="14">
            <rect x="1" y="4" width="10" height="6" fill="#7d8a4f"/><rect x="3" y="2" width="6" height="2" fill="#7d8a4f"/>
            <rect x="5" y="6" width="2" height="2" fill="#d8b430"/>
          </svg>
          SOBREVIVENTE-07
        </div>
        <div class="hp-row">
          <span class="hp-label">VIDA</span>
          <div class="hp-bar"><div class="hp-fill"></div></div>
          <span class="hp-num">100</span>
        </div>
      </div>

      <div class="hud-district px-panel">
        <div class="tag">SETOR ATUAL</div>
        <div class="name">BASE ÁGUIA</div>
        <div class="sub">área segura</div>
      </div>

      <div class="hud-resources px-panel">
        <h4>SUPRIMENTOS</h4>
        <div class="res-line food">${ICONS.comida}COMIDA<b>0</b></div>
        <div class="res-line med">${ICONS.medicamento}MEDICAMENTOS<b>0</b></div>
        <div class="res-line mat">${ICONS.material}MATERIAIS<b>0</b></div>
      </div>

      <div class="hud-driving px-panel" style="display:none">
        <div class="drv-title">
          <svg viewBox="0 0 14 14" shape-rendering="crispEdges" width="15" height="15">
            <rect x="2" y="2" width="10" height="11" fill="#c23b2e"/><rect x="2" y="2" width="10" height="2" fill="#8d2418"/>
            <rect x="5" y="0" width="3" height="2" fill="#8d2418"/><rect x="8" y="0" width="2" height="2" fill="#d8b430"/>
            <rect x="3" y="6" width="8" height="3" fill="#e8d870"/>
          </svg>
          COMBUSTÍVEL
        </div>
        <div class="fuel-row">
          <div class="fuel-bar"><div class="fuel-fill"></div></div>
          <span class="fuel-num">100%</span>
        </div>
        <div class="speed-num">0 km/h · <b>E</b> sair · encha com galões</div>
      </div>

      <div class="hud-prompt px-panel" style="display:none"><kbd>E</kbd><span class="txt">INTERAGIR</span></div>

      <div class="hud-hint">
        <b>WASD</b> mover/dirigir · <b>E</b> interagir · <b>I</b> inventário · <b>ESC</b> pausa
      </div>
    `;
    container.appendChild(el);
    this.el = el;

    this.hpFill = el.querySelector('.hp-fill');
    this.hpNum = el.querySelector('.hp-num');
    this.dName = el.querySelector('.hud-district .name');
    this.dSub = el.querySelector('.hud-district .sub');
    this.prompt = el.querySelector('.hud-prompt');
    this.promptTxt = el.querySelector('.hud-prompt .txt');
    this.resLines = {
      comida: el.querySelector('.res-line.food'),
      medicamento: el.querySelector('.res-line.med'),
      material: el.querySelector('.res-line.mat'),
    };

    this.drivingEl = el.querySelector('.hud-driving');
    this.fuelFill = el.querySelector('.fuel-fill');
    this.fuelNum = el.querySelector('.fuel-num');
    this.speedNum = el.querySelector('.speed-num');
  }

  setDriving(on, fuel = 100, speed = 0) {
    this.drivingEl.style.display = on ? 'block' : 'none';
    if (!on) return;
    const f = Math.max(0, Math.round(fuel));
    this.fuelFill.style.width = f + '%';
    this.fuelFill.className = 'fuel-fill' + (f <= 12 ? ' empty' : f <= 30 ? ' low' : '');
    this.fuelNum.textContent = f + '%';
    this.speedNum.innerHTML = `${Math.round(speed)} km/h · <b>E</b> sair · encha com galões`;
  }

  setHP(hp) {
    const v = Math.max(0, Math.round(hp));
    this.hpFill.style.width = v + '%';
    this.hpFill.className = 'hp-fill' + (v <= 25 ? ' low' : v <= 55 ? ' mid' : '');
    this.hpNum.textContent = v;
  }

  setDistrict(d) {
    this.dName.textContent = d.nome;
    this.dName.classList.toggle('danger', !!d.hazard);
    this.dSub.textContent = d.safe ? 'área segura — regenera vida' : d.hazard ? 'PERIGO — escombros instáveis' : 'explorar e vasculhar';
  }

  setPrompt(label) {
    if (label) {
      this.prompt.style.display = 'flex';
      this.promptTxt.textContent = label;
    } else {
      this.prompt.style.display = 'none';
    }
  }

  setResources(counts, changedId) {
    for (const [id, line] of Object.entries(this.resLines)) {
      line.querySelector('b').textContent = counts[id] || 0;
      if (id === changedId) {
        line.classList.remove('bump');
        void line.offsetWidth;
        line.classList.add('bump');
      }
    }
  }
}
