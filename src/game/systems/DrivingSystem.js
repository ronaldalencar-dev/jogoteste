/* DrivingSystem — entrar, dirigir, abastecer e sair de veículos */
import { GROUND } from '../world/CityMap.js';
import { clamp } from '../core/Util.js';

export class DrivingSystem {
  constructor(game) {
    this.game = game;
    this.vehicle = null;
    this._fuelWarned = false;
    this._dustAcc = 0;
  }

  get active() { return !!this.vehicle; }

  /* decisão do [E] perto de um carro: abastecer ou entrar */
  tryUse(vehicle) {
    const g = this.game;
    if (!vehicle.drivable) return;
    
    /* se tiver gasolina e tanque não cheio, pergunta se quer abastecer */
    if (vehicle.fuel < 99.5 && g.inventory.has('gasolina')) {
      const fuelNeeded = Math.ceil((100 - vehicle.fuel) / 50);
      const fuelHave = g.inventory.counts.gasolina;
      const fuelToUse = Math.min(fuelNeeded, fuelHave);
      
      if (fuelToUse > 0) {
        /* mostra modal de confirmação */
        g.ui.showFuelConfirm(vehicle, fuelToUse);
        return;
      }
    }
    
    /* sem gasolina ou não quis abastecer → entra no carro */
    this.enter(vehicle);
  }

  refuel(vehicle, fuelAmount = 1) {
    const g = this.game;
    g.inventory.counts.gasolina -= fuelAmount;
    g.inventory._emit('gasolina');
    vehicle.fuel = Math.min(100, vehicle.fuel + fuelAmount * 50);
    g.audio.refuel();
    g.particles.burst(vehicle.x, 1.0, vehicle.z, 0xe05040, 12);
    g.ui.toast(`Tanque abastecido: ${Math.round(vehicle.fuel)}% (+${fuelAmount * 50})`, 'heal');
    this._fuelWarned = false;
  }

  confirmRefuel(vehicle, fuelAmount) {
    this.refuel(vehicle, fuelAmount);
    /* após abastecer, entra no carro automaticamente */
    setTimeout(() => this.enter(vehicle), 400);
  }

  enter(vehicle) {
    const g = this.game;
    this.vehicle = vehicle;
    vehicle.detachCollider(g.collision);
    g.player.group.visible = false;
    g.player.setMove(0, 0, false);
    g.interaction.enabled = false;
    g.audio.enterCar();
    g.audio.startEngine();
    g.cameraRig.addShake(0.25);
    if (vehicle.fuel <= 0.5) {
      g.audio.engineDeny();
      g.ui.toast('Tanque vazio! Encontre GALÕES DE GASOLINA para abastecer.', 'danger', 4600);
    } else {
      g.ui.toast(`Combustível: ${Math.round(vehicle.fuel)}% — WASD para dirigir, E para sair`, 'info', 3800);
    }
    this._fuelWarned = vehicle.fuel < 20;
  }

  exit() {
    const g = this.game;
    const v = this.vehicle;
    if (!v) return;

    /* procura um ponto livre ao lado do carro */
    const tries = [
      [v.x - Math.sin(v.heading) * (v.W / 2 + 1.1), v.z - Math.cos(v.heading) * (v.W / 2 + 1.1)],
      [v.x + Math.sin(v.heading) * (v.W / 2 + 1.1), v.z + Math.cos(v.heading) * (v.W / 2 + 1.1)],
      [v.x + Math.cos(v.heading) * (v.L / 2 + 1.2), v.z - Math.sin(v.heading) * (v.L / 2 + 1.2)],
      [v.x - Math.cos(v.heading) * (v.L / 2 + 1.2), v.z + Math.sin(v.heading) * (v.L / 2 + 1.2)],
    ];
    let spot = tries[0];
    for (const [tx, tz] of tries) {
      if (tx < 1.5 || tz < 1.5 || tx > g.world.size - 1.5 || tz > g.world.size - 1.5) continue;
      if (!g.collision.overlaps(tx, tz, 0.62)) { spot = [tx, tz]; break; }
    }

    v.setPosition(v.x, v.z, v.heading);
    v.attachCollider(g.collision);
    g.player.setPosition(spot[0], spot[1]);
    g.player.group.visible = true;
    g.interaction.enabled = true;
    g.audio.exitCar();
    g.audio.stopEngine();
    g.particles.dust(spot[0], 0.3, spot[1]);
    g.cameraRig.addShake(0.15);
    this.vehicle = null;
    g.ui.setDriving(false, 0);
  }

  update(dt) {
    const g = this.game;
    const v = this.vehicle;
    if (!v) return;

    /* sair do carro */
    if (g.input.wasPressed('KeyE')) {
      this.exit();
      return;
    }

    const inp = g.input;
    const throttle = inp.isDown('KeyW', 'ArrowUp');
    const brake = inp.isDown('KeyS', 'ArrowDown');
    const left = inp.isDown('KeyA', 'ArrowLeft');
    const right = inp.isDown('KeyD', 'ArrowRight');

    const outOfFuel = v.fuel <= 0;
    if (throttle && outOfFuel && Math.abs(v.speed) < 0.4 && !this._fuelWarned) {
      this._fuelWarned = true;
      g.audio.engineDeny();
      g.ui.toast('SEM GASOLINA! Saia do carro [E] e use um galão para abastecer.', 'danger', 4600);
    }

    /* aceleração / freio */
    if (throttle && !outOfFuel) v.speed += 11.5 * dt;
    else if (brake) v.speed -= (v.speed > 0.3 ? 20 : 7.5) * dt;
    /* arrasto */
    v.speed *= Math.exp(-1.35 * dt);
    v.speed = clamp(v.speed, -v.maxSpeed * 0.38, v.maxSpeed);
    if (Math.abs(v.speed) < 0.05) v.speed = 0;

    /* terreno influencia a dirigibilidade */
    const cell = g.world.map.cellAt(v.x, v.z);
    let grip = 1;
    if (cell === GROUND.DIRT || cell === GROUND.RUBBLE) grip = 0.86;
    else if (cell === GROUND.GRASS) grip = 0.8;

    /* direção */
    const steer = (right ? 1 : 0) - (left ? 1 : 0);
    if (steer !== 0 && Math.abs(v.speed) > 0.35) {
      const dir = v.speed >= 0 ? 1 : -1;
      const authority = clamp(Math.abs(v.speed) / v.maxSpeed, 0, 1);
      v.heading -= steer * 2.7 * grip * authority * dir * dt;
    }

    /* movimento com colisão (quico ao bater) */
    const nx = -Math.cos(v.heading) * v.speed;
    const nz = Math.sin(v.heading) * v.speed;
    const beforeX = v.x, beforeZ = v.z;
    const next = g.collision.move(v.x, v.z, nx * dt, nz * dt, 1.35);
    const movedX = next.x - beforeX, movedZ = next.z - beforeZ;
    const expected = Math.hypot(nx * dt, nz * dt);
    const actual = Math.hypot(movedX, movedZ);
    v.x = clamp(next.x, 2, g.world.size - 2);
    v.z = clamp(next.z, 2, g.world.size - 2);

    if (expected > 0.001 && actual < expected * 0.55 && Math.abs(v.speed) > 2.5) {
      g.audio.crash();
      g.cameraRig.addShake(clamp(Math.abs(v.speed) / v.maxSpeed, 0.3, 1));
      g.particles.burst(v.x, 0.8, v.z, 0x9aa0a8, 6);
      v.speed *= -0.32;
    }

    v.vx = nx; v.vz = nz;
    v.setPosition(v.x, v.z, v.heading);

    /* consumo de combustível (reduzido para durar mais) */
    if (Math.abs(v.speed) > 0.4) {
      const demand = 0.45 * (0.35 + 0.65 * Math.abs(v.speed) / v.maxSpeed);
      v.fuel = Math.max(0, v.fuel - demand * dt);
      if (v.fuel < 20 && v.fuel > 0 && !this._fuelWarned) {
        this._fuelWarned = true;
        g.audio.hurt();
        g.ui.toast('Combustível na reserva! Procure galões de gasolina.', 'danger', 4200);
      }
      if (v.fuel <= 0) {
        g.audio.stopEngine();
      }
    }

    /* poeira em terreno sujo */
    if (Math.abs(v.speed) > 4 && (cell === GROUND.DIRT || cell === GROUND.RUBBLE || cell === GROUND.GRASS)) {
      this._dustAcc += dt;
      if (this._dustAcc > 0.12) {
        this._dustAcc = 0;
        g.particles.dust(v.x + Math.cos(v.heading) * (v.L * 0.4), 0.25, v.z - Math.sin(v.heading) * (v.L * 0.4));
      }
    }

    /* som do motor */
    if (v.fuel > 0) {
      if (!g.audio._engine) g.audio.startEngine();
      g.audio.setEngine(clamp(Math.abs(v.speed) / v.maxSpeed, 0, 1), throttle);
    }

    g.ui.setDriving(true, v.fuel, Math.abs(v.speed) * 7.2);
    g.ui.setPrompt('SAIR DO CARRO');
  }
}
