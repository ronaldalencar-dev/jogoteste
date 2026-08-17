/* PlayerController — transforma input em movimento com colisão */
import { GROUND } from '../world/CityMap.js';
import { clamp } from '../core/Util.js';

export class PlayerController {
  constructor(game) {
    this.game = game;
    this.speed = 4.6;
    this._stepAcc = 0;
  }

  update(dt) {
    const g = this.game;
    const mv = g.input.moveVector();
    const p = g.player;

    /* terreno influencia a velocidade */
    const cell = g.world.map.cellAt(p.x, p.z);
    let sp = this.speed;
    /* mira reduz um pouco a velocidade para marcha tática */
    const isAiming = g.shootingSystem?.isAiming;
    if (isAiming) sp *= 0.72;

    const dx = mv.x * sp * dt;
    const dz = mv.z * sp * dt;
    const before = { x: p.x, z: p.z };
    const next = g.collision.move(p.x, p.z, dx, dz, p.radius);
    p.group.position.x = clamp(next.x, 1.2, g.world.size - 1.2);
    p.group.position.z = clamp(next.z, 1.2, g.world.size - 1.2);

    p.setMove(mv.x * sp, mv.z * sp, mv.moving, isAiming);

    /* passos + poeira */
    const movedDist = Math.hypot(p.x - before.x, p.z - before.z);
    if (mv.moving && movedDist > 0) {
      this._stepAcc += movedDist;
      if (this._stepAcc > 1.25) {
        this._stepAcc = 0;
        g.audio.step(g.world.map.surfaceAt(p.x, p.z));
        if (cell === GROUND.DIRT || cell === GROUND.RUBBLE) g.particles.dust(p.x, 0.2, p.z);
      }
    }
  }
}
