import Item from '../../types/Item';

export const Aegis: Item = {
  id: 203409,
  stats: {
    attackPower: 10,
    defense: 10,
    maxHp: 350,
    maxSp: 250
  },
  rarity: 'Epic',
  code: '아이기스',
  buildsFrom: [
    {
      name: 'Scissors',
      id: 203304
    },
    {
      name: 'Scissors',
      id: 203201
    }
  ],
  name: 'Aegis',
  displayName: 'Aegis',
  buildsInto: [],
  stackable: true,
  maxStacks: 1,
  foundQuantity: 1,
  description: '',
  locations: {},
  apiMetaData: {
    code: 203409,
    category: 'Armor',
    type: 'Arm'
  },
  clientMetaData: {
    type: 'Arm',
    category: 'Armor'
  },
  droppedFrom: [],
  airSupply: false,
  collectible: 0
};
