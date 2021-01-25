import Item from '../../types/Item';

export const KillerHeels: Item = {
  id: 204405,
  name: 'KillerHeels',
  buildsInto: [
    {
      name: 'Bucephalus',
      id: 204408
    },
    {
      name: 'Red Shoes',
      id: 204502
    }
  ],
  requirements: {
    Slippers: 1,
    'Scrap Metal': 1,
    'Glass Bottle': 1,
    Stone: 1
  },
  stats: {
    attackPower: 5,
    criticalStrikeChance: 0.1,
    moveSpeed: 0.16,
    spRegen: 0.8
  },
  rarity: 'Rare',
  code: '매버릭러너',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: 'Heels sharp enough to be used as weapons themselves.',
  buildsFrom: [
    {
      name: 'Scissors',
      id: 204204
    },
    {
      name: 'Scissors',
      id: 401211
    }
  ],
  displayName: 'Killer Heels',
  apiMetaData: {
    code: 204403,
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
