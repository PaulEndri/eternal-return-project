import Item from '../../types/Item';

export const NTW20: Item = {
  id: 118405,
  name: 'NTW20',
  buildsInto: [],
  requirements: {
    'Long Rifle': 1,
    'Laser Pointer': 1,
    Pickaxe: 1,
    Gemstone: 1,
    'Scrap Metal': 1,
    Hammer: 1
  },
  stats: {
    attackPower: 95,
    moveSpeed: -0.1,
    sightRange: 2.5,
    increaseSkillDamageRatio: 0.22
  },
  rarity: 'Epic',
  code: 'NTW-20',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: '',
  buildsFrom: [
    {
      name: 'Golden Rifle',
      id: 118401
    },
    {
      name: 'Iron Sheet',
      id: 401213
    }
  ],
  displayName: 'NTW-20',
  apiMetaData: {
    code: 118405,
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
