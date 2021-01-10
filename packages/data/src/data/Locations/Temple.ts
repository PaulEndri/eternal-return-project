import Location from '../../types/Location';

export const Temple: Location = {
  id: 9,
  name: 'Temple',
  apiMetaData: {
    type: 'Temple',
    code: 9,
    name: '절'
  },
  animals: [
    {
      name: 'Bat (Animal)',
      id: 2,
      quantity: 4
    },
    {
      name: 'Bear',
      id: 6,
      quantity: 2
    },
    {
      name: 'Boar',
      id: 3,
      quantity: 3
    }
  ],
  drops: [
    {
      name: 'KitchenKnife',
      id: 101104,
      quantity: 5
    },
    {
      name: 'Garlic',
      id: 302106,
      quantity: 6
    },
    {
      name: 'Gunpowder',
      id: 401121,
      quantity: 7
    },
    {
      name: 'Ramen',
      id: 302113,
      quantity: 4
    },
    {
      name: 'OrientalHerb',
      id: 302116,
      quantity: 6
    },
    {
      name: 'BuddhistScripture',
      id: 205106,
      quantity: 8
    },
    {
      name: 'ShortSpear',
      id: 107101,
      quantity: 4
    },
    {
      name: 'Paper',
      id: 401117,
      quantity: 7
    },
    {
      name: 'Hairband',
      id: 201101,
      quantity: 7
    },
    {
      name: 'MonksRobe',
      id: 202103,
      quantity: 9
    },
    {
      name: 'Gemstone',
      id: 401114,
      quantity: 8
    },
    {
      name: 'Cloth',
      id: 401113,
      quantity: 7
    },
    {
      name: 'FabricArmor',
      id: 202106,
      quantity: 8
    },
    {
      name: 'StallionMedal',
      id: 401109,
      quantity: 7
    },
    {
      name: 'Bamboo',
      id: 108103,
      quantity: 7
    },
    {
      name: 'ShortRod',
      id: 108102,
      quantity: 5
    }
  ],
  teleport: true,
  connections: [
    {
      name: 'Pond',
      id: 2
    },
    {
      name: 'Alley',
      id: 5
    },
    {
      name: 'Avenue',
      id: 7
    }
  ]
};
