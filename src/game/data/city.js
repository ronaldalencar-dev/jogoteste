/* Dados da cidade: malha viária, distritos e lotes de construção.
   Coordenadas de lote em UNIDADES DE MUNDO (1 célula = 4u). */

export const CELL = 4;
export const GRID = 48;              // 48x48 células
export const WORLD = GRID * CELL;    // 192 x 192

/* malha viária — eixo, posição em células, largura em células */
export const ROADS = {
  avenuesV: [11, 27],        // largura 2
  avenuesH: [15, 31],        // largura 2
  streetsV: [4, 19, 35, 43], // largura 1
  streetsH: [6, 23, 40],     // largura 1
};

/* distritos (em células, verificados em ordem) */
export const DISTRICTS = [
  { id: 'base',        nome: 'BASE ÁGUIA',        x0: 0,  z0: 41, x1: 4,  z1: 47, safe: true },
  { id: 'central',     nome: 'CENTRO',            x0: 13, z0: 0,  x1: 28, z1: 16 },
  { id: 'comercial',   nome: 'DISTRITO COMERCIAL',x0: 13, z0: 17, x1: 28, z1: 32 },
  { id: 'industrial',  nome: 'ZONA INDUSTRIAL',   x0: 29, z0: 0,  x1: 47, z1: 16 },
  { id: 'abandonada',  nome: 'ZONA ABANDONADA',   x0: 29, z0: 17, x1: 47, z1: 47, hazard: true },
  { id: 'residencial', nome: 'BAIRRO RESIDENCIAL',x0: 0,  z0: 0,  x1: 12, z1: 32 },
  { id: 'residencial', nome: 'VILA SUL',          x0: 5,  z0: 33, x1: 28, z1: 47 },
];

/* Lotes de construção. c(x)=x*CELL.
   type: 'house'|'shop'|'tower'|'warehouse'|'ruin'  ·  roof: estilo de telhado */
const c = (v) => v * CELL;
export const PLOTS = [
  /* ---- CENTRO (torres, telhados cheios de equipamento) ---- */
  { id: 'T1', x: c(13.6), z: c(0.7),  w: c(4.6), d: c(4.2), h: 15, type: 'tower', pal: 3, roof: 'office', radar: true },
  { id: 'T2', x: c(19.6), z: c(0.7),  w: c(6.2), d: c(4.2), h: 11, type: 'tower', pal: 2, roof: 'office' },
  { id: 'T3', x: c(13.6), z: c(7.5),  w: c(5.8), d: c(5.8), h: 16, type: 'tower', pal: 3, roof: 'hotel', helipad: true },
  { id: 'T4', x: c(20.6), z: c(7.5),  w: c(4.8), d: c(5.8), h: 10, type: 'tower', pal: 1, roof: 'office', damage: 1 },
  { id: 'T5', x: c(13.6), z: c(12.9), w: c(3.4), d: c(1.9), h: 5,  type: 'shop',  pal: 2, roof: 'kiosk' },

  /* ---- COMERCIAL ---- */
  { id: 'C1', x: c(13.5), z: c(17.5), w: c(4.4), d: c(4.2), h: 5.5, type: 'shop', pal: 1, roof: 'shop', sign: 'MERCADO' },
  { id: 'C2', x: c(18.4), z: c(17.5), w: c(3.8), d: c(4.2), h: 5.5, type: 'shop', pal: 2, roof: 'shop', sign: 'FARMÁCIA' },
  { id: 'C3', x: c(22.7), z: c(17.5), w: c(3.6), d: c(4.2), h: 4.5, type: 'shop', pal: 1, roof: 'diner', sign: 'LANCHONETE' },
  { id: 'C4', x: c(13.5), z: c(24.2), w: c(6.2), d: c(3.4), h: 6.5, type: 'shop', pal: 3, roof: 'store' },
  { id: 'C5', x: c(20.6), z: c(24.2), w: c(5.6), d: c(3.4), h: 7.5, type: 'shop', pal: 2, roof: 'cinema', sign: 'CINE ODEON' },

  /* ---- INDUSTRIAL ---- */
  { id: 'I1', x: c(29.5), z: c(1.5),  w: c(5.4), d: c(5.6), h: 7,  type: 'warehouse', pal: 1, roof: 'corrugated' },
  { id: 'I2', x: c(29.5), z: c(8.6),  w: c(5.4), d: c(4.4), h: 5,  type: 'warehouse', pal: 2, roof: 'corrugated' },
  { id: 'I3', x: c(36.4), z: c(1.5),  w: c(6.2), d: c(6.4), h: 9,  type: 'warehouse', pal: 3, roof: 'factory', chimney: true },
  { id: 'I4', x: c(43.2), z: c(1.5),  w: c(3.4), d: c(4.4), h: 5,  type: 'warehouse', pal: 1, roof: 'corrugated' },
  { id: 'I5', x: c(36.4), z: c(9.6),  w: c(4.8), d: c(4.2), h: 6,  type: 'warehouse', pal: 2, roof: 'garage' },

  /* ---- RESIDENCIAL NORTE ---- */
  { id: 'H1', x: c(0.6),  z: c(1.0),  w: c(2.8), d: c(2.4), h: 4.2, type: 'house', pal: 0, roof: 'gable' },
  { id: 'H2', x: c(0.6),  z: c(7.4),  w: c(2.8), d: c(2.6), h: 4.0, type: 'house', pal: 1, roof: 'gable' },
  { id: 'H3', x: c(5.4),  z: c(1.0),  w: c(2.4), d: c(2.4), h: 4.4, type: 'house', pal: 2, roof: 'gable' },
  { id: 'H4', x: c(8.4),  z: c(1.0),  w: c(2.2), d: c(2.4), h: 3.8, type: 'house', pal: 0, roof: 'gable' },
  { id: 'H5', x: c(5.4),  z: c(7.4),  w: c(2.4), d: c(2.6), h: 4.2, type: 'house', pal: 1, roof: 'gable' },
  { id: 'H6', x: c(8.4),  z: c(7.4),  w: c(2.2), d: c(2.6), h: 4.0, type: 'house', pal: 2, roof: 'gable' },
  { id: 'H7', x: c(0.6),  z: c(11.4), w: c(2.8), d: c(2.2), h: 3.8, type: 'house', pal: 2, roof: 'gable', damage: 1 },
  { id: 'H8', x: c(5.4),  z: c(11.4), w: c(4.8), d: c(2.2), h: 4.0, type: 'house', pal: 0, roof: 'gable' },

  /* ---- RESIDENCIAL OESTE ---- */
  { id: 'H9',  x: c(0.6),  z: c(17.6), w: c(2.8), d: c(2.4), h: 4.0, type: 'house', pal: 1, roof: 'gable' },
  { id: 'H10', x: c(5.4),  z: c(17.6), w: c(2.4), d: c(2.4), h: 4.2, type: 'house', pal: 0, roof: 'gable' },
  { id: 'H11', x: c(8.4),  z: c(17.6), w: c(2.2), d: c(2.4), h: 3.8, type: 'house', pal: 2, roof: 'gable' },
  { id: 'H12', x: c(0.6),  z: c(24.4), w: c(2.8), d: c(2.6), h: 4.2, type: 'house', pal: 0, roof: 'gable' },
  { id: 'H13', x: c(5.4),  z: c(24.4), w: c(4.8), d: c(2.6), h: 4.0, type: 'house', pal: 1, roof: 'gable' },
  { id: 'H14', x: c(0.6),  z: c(27.6), w: c(2.8), d: c(2.2), h: 3.8, type: 'house', pal: 2, roof: 'gable', damage: 1 },

  /* ---- VILA SUL ---- */
  { id: 'H15', x: c(5.6),  z: c(33.6), w: c(2.6), d: c(2.4), h: 4.0, type: 'house', pal: 1, roof: 'gable' },
  { id: 'H16', x: c(9.0),  z: c(33.6), w: c(2.6), d: c(2.4), h: 4.2, type: 'house', pal: 0, roof: 'gable' },
  { id: 'H17', x: c(20.6), z: c(33.6), w: c(2.6), d: c(2.4), h: 3.8, type: 'house', pal: 2, roof: 'gable' },
  { id: 'H18', x: c(24.0), z: c(33.6), w: c(2.4), d: c(2.4), h: 4.0, type: 'house', pal: 1, roof: 'gable' },
  { id: 'H19', x: c(5.6),  z: c(42.6), w: c(2.6), d: c(2.4), h: 4.0, type: 'house', pal: 0, roof: 'gable' },
  { id: 'H20', x: c(20.6), z: c(42.6), w: c(5.4), d: c(3.0), h: 4.4, type: 'house', pal: 2, roof: 'gable' },

  /* ---- ZONA ABANDONADA (ruínas) ---- */
  { id: 'A1', x: c(29.5), z: c(17.6), w: c(5.4), d: c(4.4), h: 8,   type: 'ruin', pal: 2, roof: 'ruin', damage: 3 },
  { id: 'A2', x: c(36.2), z: c(17.6), w: c(4.6), d: c(4.0), h: 6,   type: 'ruin', pal: 1, roof: 'ruin', damage: 2, sign: 'FARMÁCIA SAQUEADA' },
  { id: 'A3', x: c(41.6), z: c(17.6), w: c(4.8), d: c(5.2), h: 10,  type: 'ruin', pal: 3, roof: 'ruin', damage: 2 },
  { id: 'A4', x: c(29.5), z: c(24.2), w: c(4.4), d: c(4.0), h: 2.2, type: 'ruin', pal: 1, roof: 'collapsed' },
  { id: 'A5', x: c(36.2), z: c(29.4), w: c(4.4), d: c(4.0), h: 5.5, type: 'ruin', pal: 2, roof: 'ruin', damage: 2 },
  { id: 'A6', x: c(42.4), z: c(29.4), w: c(4.0), d: c(5.6), h: 7,   type: 'ruin', pal: 1, roof: 'ruin', damage: 3 },
  { id: 'A7', x: c(29.5), z: c(35.6), w: c(5.0), d: c(4.4), h: 6.5, type: 'ruin', pal: 3, roof: 'ruin', damage: 2 },
  { id: 'A8', x: c(36.6), z: c(39.6), w: c(4.2), d: c(4.0), h: 4.5, type: 'ruin', pal: 2, roof: 'collapsed' },
  { id: 'A9', x: c(29.6), z: c(42.6), w: c(4.4), d: c(3.6), h: 5,   type: 'ruin', pal: 1, roof: 'ruin', damage: 1 },

  /* ---- Q.G. da base ---- */
  { id: 'HQ', x: c(1.0),  z: c(44.6), w: c(2.4), d: c(2.0), h: 3.4, type: 'house', pal: 3, roof: 'bunker' },
];

/* Veículos estacionados / abandonados. ang em radianos. */
export const VEHICLES = [
  /* estacionamento comercial */
  { id: 'V1', x: c(14.5), z: c(28.8), ang: 0,            kind: 'hatch',  color: 0x8a4a38, loot: 'carTrunk' },
  { id: 'V2', x: c(17.5), z: c(28.8), ang: 0,            kind: 'sedan',  color: 0x5c6248, loot: 'carTrunk' },
  { id: 'V3', x: c(20.5), z: c(28.8), ang: 0,            kind: 'pickup', color: 0x6a6f74, loot: 'carTrunk' },
  { id: 'V4', x: c(23.5), z: c(28.8), ang: 0.06,         kind: 'sedan',  color: 0xb09030, loot: 'carTrunk' },
  /* centro — um capotado/queimado */
  { id: 'V5', x: c(16.5), z: c(6.0),  ang: 0.5,          kind: 'sedan',  color: 0x2c2c2e, burnt: true },
  { id: 'V6', x: c(24.6), z: c(13.7), ang: 1.57,         kind: 'van',    color: 0x6a6f74, loot: 'carTrunk' },
  /* residencial */
  { id: 'V7', x: c(4.0),  z: c(3.2),  ang: 1.57,         kind: 'hatch',  color: 0x4a5a6a, loot: 'carTrunk' },
  { id: 'V8', x: c(19.0), z: c(36.4), ang: 1.57,         kind: 'sedan',  color: 0x8a4a38, loot: 'carTrunk' },
  { id: 'V9', x: c(11.0), z: c(44.4), ang: 0,            kind: 'pickup', color: 0x5c6248, loot: 'carTrunk' },
  /* pátio industrial */
  { id: 'V10', x: c(43.8), z: c(10.4), ang: 0.3,         kind: 'truck',  color: 0x6f5a3a, loot: 'carTrunk' },
  { id: 'V11', x: c(43.2), z: c(13.2), ang: -0.2,        kind: 'van',    color: 0x5c6248, loot: 'carTrunk' },
  { id: 'V12', x: c(33.0), z: c(13.4), ang: 1.2,         kind: 'hatch',  color: 0x6a6f74, loot: 'carTrunk' },
  /* carcaças na zona abandonada */
  { id: 'V13', x: c(34.6), z: c(23.2), ang: 2.4,         kind: 'sedan',  color: 0x33302c, burnt: true },
  { id: 'V14', x: c(40.6), z: c(26.0), ang: -1.1,        kind: 'pickup', color: 0x3a342e, burnt: true },
  { id: 'V15', x: c(31.6), z: c(31.4), ang: 0.9,         kind: 'hatch',  color: 0x2e2c28, burnt: true },
  { id: 'V16', x: c(44.2), z: c(38.4), ang: 1.9,         kind: 'sedan',  color: 0x4a463e, loot: 'carTrunk' },
];

export const SPAWN = { x: 10.5, z: 175.5 };
