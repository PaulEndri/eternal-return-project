import Item from '../../types/Item';

export const CombatBoots: Item = {
  id: 204404,
  name: 'CombatBoots',
  buildsInto: [
    {
      name: 'Feather Boots',
      id: 204402
    },
    {
      name: 'White Rhinos',
      id: 204411
    }
  ],
  requirements: {
    'Running Shoes': 1,
    Oil: 1,
    Bandage: 1,
    Leather: 1
  },
  stats: {
    attackSpeedRatio: 0.07,
    hpRegen: 0.6,
    moveSpeed: 0.27
  },
  rarity: 'Rare',
  code: '킬힐',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: '',
  buildsFrom: [
    {
      name: 'Scissors',
      id: 204203
    },
    {
      name: 'Scissors',
      id: 205204
    }
  ],
  displayName: 'Combat Boots',
  apiMetaData: {
    code: 204404,
    category: 'Armor',
    type: 'Leg'
  },
  clientMetaData: {
    type: 'Leg',
    category: 'Armor'
  },
  droppedFrom: [],
  airSupply: true,
  collectible: 0
};
