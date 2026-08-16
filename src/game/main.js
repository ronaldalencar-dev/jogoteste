/* main — ponto de entrada: inicializa os sistemas e inicia o loop */
import { Game } from './core/Game.js';
import { showFatal } from './core/Errors.js';

/* erros não capturados viram um painel visível (nunca tela preta muda) */
window.addEventListener('error', (e) => showFatal(e.error || e.message));
window.addEventListener('unhandledrejection', (e) => showFatal(e.reason));

export function startGame(container) {
  window.__CEG_BOOTED__ = true;

  /* checa WebGL antes de qualquer coisa */
  try {
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2') || probe.getContext('webgl');
    if (!gl) throw new Error('Seu navegador não expôs um contexto WebGL. Habilite a aceleração de hardware e tente de novo.');
  } catch (err) {
    showFatal(err);
    return { dispose() {} };
  }

  try {
    const game = new Game(container);
    game.init();
    return game;
  } catch (err) {
    showFatal(err);
    return { dispose() {} };
  }
}
