import Item from '../../types/Item';

export const Elegance: Item = {
  id: 116404,
  name: 'Elegance',
  buildsInto: [],
  requirements: {
    'Walther PPK': 1,
    Leather: 1,
    'Laser Pointer': 1,
    'Short Rod': 1,
    Feather: 1
  },
  stats: {
    attackPower: 90,
    charges: 30,
    moveSpeed: 0.2,
    sightRange: 5
  },
  rarity: 'Epic',
  code: '엘레강스',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description:
    'Though it looks like an old gun, it is actually a smaller version of the railgun pistol. Up to 6 bullets are loaded from a clip. At first glance, it looks like a decoration, but it is just as effective as the real, full-size version.',
  buildsFrom: [
    {
      name: 'FN57',
      id: 116301
    },
    {
      name: 'Feather Duster',
      id: 205209
    }
  ],
  displayName: 'Elegance',
  apiMetaData: {
    code: 116404,
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
