import Item from '../../types/Item';

export const TheDeadlyRay: Item = {
  id: 118501,
  name: 'TheDeadlyRay',
  buildsInto: [],
  requirements: {
    Meteorite: 1,
    Stone: 1,
    'Long Rifle': 1,
    'Laser Pointer': 1,
    Pickaxe: 1,
    Gemstone: 1
  },
  stats: {
    attackPower: 95,
    moveSpeed: -0.1,
    sightRange: 2.5,
    increaseSkillDamageRatio: 0.3
  },
  rarity: 'Legend',
  code: '사사성광',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: '',
  buildsFrom: [
    {
      name: 'Moonstone',
      id: 401301
    },
    {
      name: 'Golden Rifle',
      id: 118401
    }
  ],
  displayName: 'The Deadly Ray',
  apiMetaData: {
    code: 118501,
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
