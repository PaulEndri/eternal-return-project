import Item from '../../types/Item';

export const Hanbok: Item = {
  id: 202306,
  name: 'Hanbok',
  buildsInto: [
    {
      name: 'Covert Agent Uniform',
      id: 202404
    },
    {
      name: 'Queen of Hearts',
      id: 202502
    }
  ],
  requirements: {
    "Monk's Robe": 1,
    Bandage: 1,
    Flower: 1
  },
  stats: {
    cooldownReduction: 0.08,
    defense: 12,
    hpRegen: 1
  },
  rarity: 'Rare',
  code: '한복',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description:
    'A traditional Korean dress. The diverse range of colors and elegant embroidery enhances the harmony of curves and straight lines.',
  buildsFrom: [
    {
      name: 'Scissors',
      id: 202206
    },
    {
      name: 'Scissors',
      id: 205102
    }
  ],
  displayName: 'Hanbok',
  apiMetaData: {
    code: 202306,
    category: 'Armor',
    type: 'Chest'
  },
  clientMetaData: {
    type: 'Chest',
    category: 'Armor'
  },
  droppedFrom: [],
  airSupply: true,
  collectible: 0
};
