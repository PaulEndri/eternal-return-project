import Item from '../../types/Item';

export const WhiteRussian: Item = {
  id: 301311,
  name: 'WhiteRussian',
  buildsFrom: [
    {
      name: 'Scissors',
      id: 'Coffee Liqueur'
    },
    {
      name: 'Scissors',
      id: 'Milk'
    }
  ],
  buildsInto: [],
  requirements: {
    Coffee: 1,
    Alcohol: 1,
    Milk: 1
  },
  stats: {
    spRestore: 660
  },
  rarity: 'Rare',
  stackable: true,
  maxStacks: 5,
  locations: {},
  foundQuantity: 4,
  displayName: 'White Russian',
  clientMetaData: {
    type: 'Beverage',
    category: 'Consume'
  },
  apiMetaData: {
    code: 301311,
    type: 'Beverage',
    category: 'Consume'
  },
  droppedFrom: [],
  airSupply: true,
  collectible: 0
};
