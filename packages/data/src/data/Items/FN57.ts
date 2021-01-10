import Item from '../../types/Item';

export const FN57: Item = {
  id: 116301,
  name: 'FN57',
  buildsInto: [
    {
      name: 'Elegance',
      id: 116404
    }
  ],
  requirements: {
    'Walther PPK': 1,
    Leather: 1,
    'Laser Pointer': 1
  },
  stats: {
    attackPower: 29,
    charges: 30,
    moveSpeed: 0.1,
    sightRange: 2.5
  },
  rarity: 'Rare',
  code: 'FN57',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: '',
  buildsFrom: [
    {
      name: 'Beretta M92F',
      id: 116202
    },
    {
      name: 'Laser Pointer',
      id: 401108
    }
  ],
  displayName: 'FN57',
  apiMetaData: {
    code: 116301,
    category: 'Weapon',
    type: 'Pistol'
  },
  clientMetaData: {
    type: 'Pistol',
    category: 'Weapon'
  },
  droppedFrom: [],
  airSupply: false,
  collectible: 0
};
