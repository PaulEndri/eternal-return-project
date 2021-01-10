import Item from '../../types/Item';

export const Railgun: Item = {
  id: 118402,
  name: 'Railgun',
  buildsInto: [
    {
      name: 'Polaris',
      id: 118406
    }
  ],
  requirements: {
    'Long Rifle': 1,
    'Laser Pointer': 1,
    Battery: 1,
    'Piano Wire': 1
  },
  stats: {
    attackPower: 78,
    attackSpeedRatio: 0.2,
    moveSpeed: -0.15,
    sightRange: 2
  },
  rarity: 'Rare',
  code: '레일건',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description:
    'Uses electromagnets to rapidly accelerate and launch a metal projectile.',
  buildsFrom: [
    {
      name: 'Springfield',
      id: 118201
    },
    {
      name: 'Electronic Parts',
      id: 401211
    }
  ],
  displayName: 'Railgun',
  apiMetaData: {
    code: 118402,
    category: 'Weapon',
    type: 'SniperRifle'
  },
  clientMetaData: {
    type: 'SniperRifle',
    category: 'Weapon'
  },
  droppedFrom: [],
  airSupply: false,
  collectible: 0
};
