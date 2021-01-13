import Item from '../../types/Item';

export const StarterGuitar: Item = {
  id: 121101,
  name: 'StarterGuitar',
  buildsInto: [
    {
      name: 'Golden Bridge',
      id: 121201
    },
    {
      name: 'Single Coil Pickup',
      id: 121202
    }
  ],
  requirements: {},
  stats: {
    attackPower: 5
  },
  rarity: 'Common',
  code: '보급형기타',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: '',
  buildsFrom: [],
  displayName: 'Starter Guitar',
  apiMetaData: {
    code: 121101,
    category: 'Weapon',
    type: 'Guitar'
  },
  clientMetaData: {
    type: 'Guitar',
    category: 'Weapon'
  },
  droppedFrom: [],
  airSupply: false,
  collectible: 0
};
