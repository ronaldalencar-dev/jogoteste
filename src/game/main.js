/* main — ponto de entrada: inicializa os sistemas e inicia o loop */
import { Game } from './core/Game.js';

export function startGame(container) {
  const game = new Game(container);
  game.init();
  return game;
}
