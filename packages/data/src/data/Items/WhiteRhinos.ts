import Item from '../../types/Item';

export const WhiteRhinos: Item = {
  id: 204411,
  name: 'WhiteRhinos',
  buildsInto: [],
  requirements: {
    'Running Shoes': 1,
    Oil: 1,
    Bandage: 1,
    Leather: 1,
    Nail: 1
  },
  stats: {
    attackSpeedRatio: 0.15,
    decreaseRecoveryToBasicAttack: 1,
    hpRegen: 0.7,
    moveSpeed: 0.35
  },
  rarity: 'Epic',
  code: '클링온부츠',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description: 'What kind of rhino wears boots..?',
  buildsFrom: [
    {
      name: 'Scissors',
      id: 204405
    },
    {
      name: 'Scissors',
      id: 401101
    }
  ],
  displayName: 'White Rhinos',
  apiMetaData: {
    code: 204411,
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
