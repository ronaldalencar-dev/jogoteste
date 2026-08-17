/* Dados de itens e tabelas de loot */

export const ITEMS = {
  comida: {
    id: 'comida', nome: 'COMIDA', tipo: 'consumivel',
    desc: 'Rações enlatadas e mantimentos. Restaura 25 de vida.',
    acao: 'Usar: +25 vida', cura: 25, cor: '#d0683c',
  },
  medicamento: {
    id: 'medicamento', nome: 'MEDICAMENTOS', tipo: 'consumivel',
    desc: 'Ataduras, analgésicos e antibióticos. Restaura 50 de vida.',
    acao: 'Usar: +50 vida', cura: 50, cor: '#5fae6b',
  },
  gasolina: {
    id: 'gasolina', nome: 'GALÃO DE GASOLINA', tipo: 'combustivel',
    desc: 'Galão vermelho com combustível. Abastece veículos pela metade do tanque.',
    acao: 'Use perto de um carro para abastecer (+50)', cura: 0, cor: '#c23b2e',
  },
  municao: {
    id: 'municao', nome: 'MUNIÇÃO', tipo: 'recurso',
    desc: 'Caixas de munição calibre variado. Essencial quando as armas entrarem em ação.',
    acao: 'Recurso de combate (futuro)', cura: 0, cor: '#d8b430',
  },
  material: {
    id: 'material', nome: 'MATERIAIS', tipo: 'recurso',
    desc: 'Sucata, madeira e peças. Usado para construir e reparar a base.',
    acao: 'Recurso de construção', cura: 0, cor: '#9aa3ad',
  },
  pistola: {
    id: 'pistola', nome: 'PISTOLA', tipo: 'arma',
    desc: 'Semiautomática 9mm gasta, mas funcional. Leve e discreta.',
    acao: 'Clique para equipar', cura: 0, cor: '#8d9096', dano: 12,
  },
  escopeta: {
    id: 'escopeta', nome: 'ESCOPETA', tipo: 'arma',
    desc: 'Calibre 12 de cano serrado. Devastadora de perto, inútil de longe.',
    acao: 'Clique para equipar', cura: 0, cor: '#a06838', dano: 34,
  },
  rifle: {
    id: 'rifle', nome: 'RIFLE', tipo: 'arma',
    desc: 'Fuzil de ferrolho com luneta trincada. Alcance é tudo.',
    acao: 'Clique para equipar', cura: 0, cor: '#6a7076', dano: 26,
  },
  lanterna: {
    id: 'lanterna', nome: 'LANTERNA', tipo: 'ferramenta',
    desc: 'Lanterna de mão com bateria fraca. Ilumina áreas escuras à noite.',
    acao: 'Clique para ligar/desligar', cura: 0, cor: '#d8b430',
  },
  pilha: {
    id: 'pilha', nome: 'PILHAS', tipo: 'recurso',
    desc: 'Pilhas alcalinas AA. Recarregam a bateria da lanterna.',
    acao: 'Use na lanterna para recarregar', cura: 0, cor: '#a8aa82',
  },
};

/* ordem dos slots no inventário */
export const SLOT_ORDER = ['comida', 'medicamento', 'gasolina', 'municao', 'material', 'pistola', 'escopeta', 'rifle', 'lanterna', 'pilha'];

/* tabelas de loot: [itemId, peso, qtdMin, qtdMax] */
export const LOOT_TABLES = {
  crate:      [['material', 42, 2, 4], ['comida', 26, 1, 2], ['gasolina', 12, 1, 1], ['municao', 12, 2, 5], ['pistola', 6, 1, 1], ['medicamento', 2, 1, 1], ['lanterna', 4, 1, 1], ['pilha', 8, 1, 2]],
  fridge:     [['comida', 62, 2, 4], ['medicamento', 14, 1, 2], ['material', 14, 1, 2], ['gasolina', 10, 1, 1], ['pilha', 6, 1, 2]],
  cabinet:    [['medicamento', 58, 1, 3], ['comida', 20, 1, 1], ['municao', 12, 1, 4], ['material', 10, 1, 1], ['pilha', 8, 1, 2]],
  carTrunk:   [['comida', 24, 1, 2], ['material', 24, 1, 3], ['gasolina', 18, 1, 1], ['municao', 14, 2, 6], ['pistola', 8, 1, 1], ['escopeta', 5, 1, 1], ['medicamento', 7, 1, 1], ['lanterna', 3, 1, 1]],
  rubble:     [['material', 62, 2, 5], ['comida', 16, 1, 2], ['gasolina', 12, 1, 1], ['municao', 10, 1, 3], ['pilha', 5, 1, 1]],
  dumpster:   [['comida', 42, 1, 3], ['material', 30, 1, 2], ['gasolina', 12, 1, 1], ['medicamento', 16, 1, 1], ['pilha', 6, 1, 2]],
  locker:     [['material', 36, 1, 3], ['municao', 22, 2, 6], ['pistola', 10, 1, 1], ['escopeta', 7, 1, 1], ['rifle', 5, 1, 1], ['medicamento', 20, 1, 2], ['lanterna', 4, 1, 1]],
  barrel:     [['material', 42, 1, 2], ['gasolina', 30, 1, 1], ['comida', 16, 1, 1], ['municao', 12, 1, 3]],
  safe:       [['municao', 30, 4, 10], ['pistola', 20, 1, 1], ['rifle', 14, 1, 1], ['escopeta', 14, 1, 1], ['medicamento', 12, 2, 3], ['comida', 10, 2, 3], ['pilha', 10, 2, 4]],
  shelf:      [['comida', 52, 1, 3], ['material', 24, 1, 2], ['gasolina', 12, 1, 1], ['municao', 12, 1, 4], ['pilha', 8, 1, 2]],
};

/* tipos de container que SOMEM e RENASCEM em outro lugar ao serem saqueados */
export const RESPAWN_TYPES = new Set(['crate', 'crateStack', 'fridge', 'dumpster', 'barrel', 'barrelTipped', 'locker', 'cabinet', 'trashcan', 'rubblePile']);

/* mensagens de rádio da base */
export const RADIO_MESSAGES = [
  '...estática... "sobreviventes... dirijam-se ao setor oeste"...estática...',
  '"...não confiem nos comboios da madrugada..." — a transmissão corta.',
  '...um loop gravado repete coordenadas que você não reconhece...',
  '"...a zona leste está perdida. repito: a zona leste está perdida..."',
  '...apenas ruído branco. Mas alguém, em algum lugar, ainda transmite.',
  '"...base Águia responde? base Águia responde?" — silêncio.',
  '"...se acharem um galão de gasolina, me chamem. o gerador está por um fio..."',
];

export const EXAMINE_NOTES = [
  'Um bilhete rasgado: "Fui buscar água. Não me espere acordada."',
  'Pichação na parede: "O NORTE É SEGURO" — alguém discordou por baixo.',
  'Um desenho infantil de uma casa com sol. O papel está úmido.',
  'Aviso oficial carimbado: TOQUE DE RECOLHER ÀS 20H. Ninguém obedece mais.',
  'Marcas de contagem na parede. São muitas. Param de repente.',
  'Um panfleto de recrutamento desbotado pela chuva. O rosto sorrindo incomoda.',
];
