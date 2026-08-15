/* Dados de itens e tabelas de loot */

export const ITEMS = {
  comida: {
    id: 'comida',
    nome: 'COMIDA',
    desc: 'Rações enlatadas e mantimentos. Restaura 25 de vida.',
    cura: 25,
    cor: '#d0683c',
  },
  medicamento: {
    id: 'medicamento',
    nome: 'MEDICAMENTOS',
    desc: 'Ataduras, analgésicos e antibióticos. Restaura 50 de vida.',
    cura: 50,
    cor: '#5fae6b',
  },
  material: {
    id: 'material',
    nome: 'MATERIAIS',
    desc: 'Sucata, madeira e peças. Usado para construir e reparar a base.',
    cura: 0,
    cor: '#9aa3ad',
  },
};

/* tabelas de loot: [itemId, peso, qtdMin, qtdMax] */
export const LOOT_TABLES = {
  crate:      [['material', 55, 2, 4], ['comida', 35, 1, 2], ['medicamento', 10, 1, 1]],
  fridge:     [['comida', 70, 2, 4], ['medicamento', 12, 1, 1], ['material', 18, 1, 2]],
  cabinet:    [['medicamento', 65, 1, 3], ['comida', 25, 1, 1], ['material', 10, 1, 1]],
  carTrunk:   [['comida', 32, 1, 2], ['material', 34, 1, 3], ['medicamento', 16, 1, 1], ['comida', 18, 2, 3]],
  rubble:     [['material', 78, 2, 5], ['comida', 22, 1, 2]],
  dumpster:   [['comida', 48, 1, 3], ['material', 36, 1, 2], ['medicamento', 16, 1, 1]],
  locker:     [['material', 50, 1, 3], ['medicamento', 28, 1, 2], ['comida', 22, 1, 2]],
  barrel:     [['material', 60, 1, 2], ['comida', 25, 1, 1], ['medicamento', 15, 1, 1]],
  safe:       [['medicamento', 45, 2, 3], ['comida', 35, 2, 3], ['material', 20, 3, 5]],
  shelf:      [['comida', 60, 1, 3], ['material', 30, 1, 2], ['medicamento', 10, 1, 1]],
};

/* mensagens de rádio da base */
export const RADIO_MESSAGES = [
  '...estática... "sobreviventes... dirijam-se ao setor oeste"...estática...',
  '"...não confiem nos comboios da madrugada..." — a transmissão corta.',
  '...um loop gravado repete coordenadas que você não reconhece...',
  '"...a zona leste está perdida. repito: a zona leste está perdida..."',
  '...apenas ruído branco. Mas alguém, em algum lugar, ainda transmite.',
  '"...base Águia responde? base Águia responde?" — silêncio.',
];

export const EXAMINE_NOTES = [
  'Um bilhete rasgado: "Fui buscar água. Não me espere acordada."',
  'Pichação na parede: "O NORTE É SEGURO" — alguém discordou por baixo.',
  'Um desenho infantil de uma casa com sol. O papel está úmido.',
  'Aviso oficial carimbado: TOQUE DE RECOLHER ÀS 20H. Ninguém obedece mais.',
  'Marcas de contagem na parede. São muitas. Param de repente.',
  'Um panfleto de recrutamento desbotado pela chuva. O rosto sorrindo incomoda.',
];
