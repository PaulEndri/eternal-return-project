import Item from '../../types/Item';

export const SniperCrossbow: Item = {
  id: 115404,
  name: 'SniperCrossbow',
  buildsInto: [],
  requirements: {
    'Short Crossbow': 1,
    Bamboo: 1,
    'Laser Pointer': 2,
    Binoculars: 1
  },
  stats: {
    attackPower: 85,
    attackRange: 1,
    charges: 7,
    sightRange: 3.5
  },
  rarity: 'Epic',
  code: '저격크로스보우',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description:
    "A new type of bow with remarkably high accuracy. It's equipped with a laser sight, similar to modern sniper rifles.",
  buildsFrom: [
    {
      name: 'Laser Crossbow',
      id: 115302
    },
    {
      name: 'Sniping Scope',
      id: 205206
    }
  ],
  displayName: 'Sniper Crossbow',
  apiMetaData: {
    code: 115404,
    category: 'Weapon',
    type: 'CrossBow'
  },
  clientMetaData: {
    type: 'CrossBow',
    category: 'Weapon'
  },
  droppedFrom: [],
  airSupply: false,
  collectible: 0
};
