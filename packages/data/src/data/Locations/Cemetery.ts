import Location from '../../types/Location';

export const Cemetery: Location = {
  id: 11,
  name: 'Cemetery',
  apiMetaData: {
    type: 'Cemetery',
    code: 11,
    name: '묘지'
  },
  animals: [
    {
      name: 'Wolf',
      id: 5,
      quantity: 2
    },
    {
      name: 'Boar',
      id: 3,
      quantity: 4
    },
    {
      name: 'Bat (Animal)',
      id: 2,
      quantity: 3
    }
  ],
  drops: [
    {
      name: 'Bamboo',
      id: 108103,
      quantity: 7
    },
    {
      name: 'Coffee',
      id: 301106,
      quantity: 5
    },
    {
      name: 'Garlic',
      id: 302106,
      quantity: 5
    },
    {
      name: 'Gunpowder',
      id: 401121,
      quantity: 7
    },
    {
      name: 'FabricArmor',
      id: 202106,
      quantity: 7
    },
    {
      name: 'Feather',
      id: 205101,
      quantity: 7
    },
    {
      name: 'Hairband',
      id: 201101,
      quantity: 7
    },
    {
      name: 'Flower',
      id: 205102,
      quantity: 7
    },
    {
      name: 'IronOre',
      id: 401118,
      quantity: 7
    },
    {
      name: 'SurveillanceCamera',
      id: 502101,
      quantity: 6
    },
    {
      name: 'Egg',
      id: 302112,
      quantity: 5
    },
    {
      name: 'Ice',
      id: 301103,
      quantity: 5
    },
    {
      name: 'BrassKnuckles',
      id: 110101,
      quantity: 5
    },
    {
      name: 'Pickaxe',
      id: 105102,
      quantity: 7
    },
    {
      name: 'Mousetrap',
      id: 502103,
      quantity: 6
    },
    {
      name: 'SteelChain',
      id: 119101,
      quantity: 7
    },
    {
      name: 'Carp',
      id: 302109,
      quantity: 4
    }
  ],
  teleport: false,
  connections: [
    {
      name: 'Chapel',
      id: 14
    },
    {
      name: 'Factory',
      id: 13
    },
    {
      name: 'Hospital',
      id: 8
    },
    {
      name: 'Pond',
      id: 2
    }
  ]
};
