/* MainMenu — tela de abertura sobre a cidade em panorâmica */
import { PIXEL_SCALES } from '../core/Renderer.js';

/* formulário de configurações reutilizado também na pausa */
export function createSettingsForm(game) {
  const wrap = document.createElement('div');
  wrap.className = 'settings-rows';
  wrap.innerHTML = `
    <div class="setting-row">
      <label>VOLUME <span class="val"></span></label>
      <input type="range" min="0" max="100" value="70" class="vol" />
    </div>
    <div class="setting-row">
      <label class="check-row"><span class="check-box"></span> MUDO</label>
    </div>
    <div class="setting-row">
      <label>TAMANHO DO PIXEL</label>
      <div class="seg-row">
        <button class="seg-btn" data-p="0">NÍTIDO</button>
        <button class="seg-btn" data-p="1">MÉDIO</button>
        <button class="seg-btn" data-p="2">PESADO</button>
      </div>
    </div>
    <div class="setting-row">
      <button class="inv-use fs-btn">TELA CHEIA</button>
    </div>
  `;

  const cfg = game.config;
  const vol = wrap.querySelector('.vol');
  const volVal = wrap.querySelector('.val');
  const muteRow = wrap.querySelector('.check-row');
  const muteBox = wrap.querySelector('.check-box');
  const segs = wrap.querySelectorAll('.seg-btn');

  const paint = () => {
    vol.value = Math.round(cfg.volume * 100);
    volVal.textContent = cfg.muted ? 'MUDO' : Math.round(cfg.volume * 100) + '%';
    muteBox.textContent = cfg.muted ? 'X' : '';
    segs.forEach((b) => b.classList.toggle('on', +b.dataset.p === cfg.pixel));
  };
  paint();

  vol.addEventListener('input', () => {
    cfg.volume = vol.value / 100;
    cfg.muted = false;
    game.applyConfig();
    paint();
  });
  muteRow.addEventListener('click', () => {
    cfg.muted = !cfg.muted;
    game.applyConfig();
    paint();
  });
  segs.forEach((b) => b.addEventListener('click', () => {
    cfg.pixel = +b.dataset.p;
    game.applyConfig();
    paint();
  }));
  wrap.querySelector('.fs-btn').addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  });

  return wrap;
}

export class MainMenu {
  constructor(container, game) {
    this.game = game;
    const el = document.createElement('div');
    el.className = 'screen menu-main on';
    el.innerHTML = `
      <div class="menu-left">
        <div class="menu-eyebrow">OPERAÇÃO DE SOBREVIVÊNCIA URBANA</div>
        <h1 class="game-title">CIDADE<br/>EM <span class="war">GUERRA</span></h1>
        <p class="menu-sub">a cidade caiu. você não. <em>explore · vasculhe · reconstrua</em></p>
        <div class="menu-buttons">
          <button class="menu-btn" data-act="new"><span class="arr">▸</span>NOVO JOGO</button>
          <button class="menu-btn" data-act="continue"><span class="arr">▸</span>CONTINUAR</button>
          <button class="menu-btn" data-act="settings"><span class="arr">▸</span>CONFIGURAÇÕES</button>
          <button class="menu-btn danger" data-act="quit"><span class="arr">▸</span>SAIR</button>
        </div>
        <div class="menu-foot">
          <div class="save-info"></div>
          <div>v0.1 — MVP · Three.js + pixel art</div>
        </div>
      </div>
      <div class="menu-right">
        <div class="settings-slot" style="display:none"><div class="px-panel" style="padding:16px 20px"></div></div>
        <div class="controls-card px-panel">
          <h5>CONTROLES</h5>
          <div><span class="k">W</span><span class="k">A</span><span class="k">S</span><span class="k">D</span> — mover</div>
          <div><span class="k">Botão Dir. (RMB)</span> — Segurar para mirar (linha branca)</div>
          <div><span class="k">Botão Esq. (LMB)</span> — Disparar arma</div>
          <div><span class="k">E</span> interagir · <span class="k">I</span> inventário · <span class="k">L</span> lanterna</div>
          <div><span class="k">ESC</span> pausa · <span class="k">scroll</span> zoom</div>
        </div>
      </div>
    `;
    container.appendChild(el);
    this.el = el;

    this.settingsSlot = el.querySelector('.settings-slot');
    this.settingsSlot.querySelector('.px-panel').appendChild(createSettingsForm(game));
    this.saveInfo = el.querySelector('.save-info');

    el.querySelectorAll('.menu-btn').forEach((b) => {
      b.addEventListener('mouseenter', () => game.audio.uiHover());
      b.addEventListener('click', () => {
        game.audio.unlock();
        game.audio.uiClick();
        const act = b.dataset.act;
        if (act === 'settings') {
          const open = this.settingsSlot.style.display !== 'none';
          this.settingsSlot.style.display = open ? 'none' : 'block';
          if (open) game.audio.uiBack();
        } else {
          game.menuAction(act);
        }
      });
    });
  }

  render() {
    const meta = this.game.save.saveMeta();
    const cont = this.el.querySelector('[data-act="continue"]');
    if (meta) {
      cont.disabled = false;
      const d = new Date(meta.ts);
      this.saveInfo.textContent = `save encontrado — ${meta.district} · ${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      cont.disabled = true;
      this.saveInfo.textContent = 'nenhum save encontrado';
    }
    this.settingsSlot.style.display = 'none';
  }
}
