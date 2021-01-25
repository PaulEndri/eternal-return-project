import Item from '../../types/Item';

export const GoldenBracelet: Item = {
  id: 203302,
  name: 'GoldenBracelet',
  buildsInto: [
    {
      name: 'Draupnir',
      id: 203403
    }
  ],
  requirements: {
    Bracelet: 1,
    Pickaxe: 1,
    Gemstone: 1
  },
  stats: {
    maxSp: 220,
    increaseSkillDamageRatio: 0.12
  },
  rarity: 'Rare',
  code: '금팔찌',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description:
    'Most gold accessories are actually gold alloys. True gold is too soft. This golden bracelet would have been worth far more if it were 100% gold.',
  buildsFrom: [
    {
      name: 'Scissors',
      id: 203104
    },
    {
      name: 'Scissors',
      id: 401214
    }
  ],
  displayName: 'Golden Bracelet',
  apiMetaData: {
    code: 203302,
    category: 'Armor',
    type: 'Arm'
  },
  clientMetaData: {
    type: 'Arm',
    category: 'Armor'
  },
  droppedFrom: [],
  airSupply: true,
  collectible: 0
};
