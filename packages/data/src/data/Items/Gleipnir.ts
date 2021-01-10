import Item from '../../types/Item';

export const Gleipnir: Item = {
  id: 109403,
  name: 'Gleipnir',
  buildsInto: [],
  requirements: {
    Whip: 1,
    'Stallion Medal': 1,
    Fan: 1,
    Mousetrap: 1,
    Nail: 1
  },
  stats: {
    attackPower: 58,
    increaseSkillDamage: 35
  },
  rarity: 'Epic',
  code: '글레이프니르',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: '',
  buildsFrom: [
    {
      name: 'Wind Whip',
      id: 109301
    },
    {
      name: 'Spiked Plank',
      id: 502201
    }
  ],
  displayName: 'Gleipnir',
  apiMetaData: {
    code: 109403,
    category: 'Weapon',
    type: 'Whip'
  },
  clientMetaData: {
    type: 'Whip',
    category: 'Weapon'
  },
  droppedFrom: [],
  airSupply: false,
  collectible: 0
};
