import Item from '../../types/Item';

export const Hairband: Item = {
  id: 201101,
  name: 'Hairband',
  buildsInto: [
    {
      name: 'Mask',
      id: 201201
    },
    {
      name: 'Circlet',
      id: 201202
    }
  ],
  requirements: {},
  stats: {
    defense: 4,
    maxSp: 130
  },
  rarity: 'Common',
  code: '머리띠',
  stackable: false,
  maxStacks: 1,
  locations: {
    Temple: 7,
    Avenue: 7,
    Cemetery: 7
  },
  foundQuantity: 1,
  description:
    'If you use a cheap one, the glue might stick to your hair or ears.',
  buildsFrom: [],
  displayName: 'Hairband',
  apiMetaData: {
    code: 201101,
    category: 'Armor',
    type: 'Head'
  },
  clientMetaData: {
    type: 'Head',
    category: 'Armor'
  },
  droppedFrom: [
    {
      name: 'Bat',
      id: 2
    }
  ],
  airSupply: false,
  collectible: 0
};
