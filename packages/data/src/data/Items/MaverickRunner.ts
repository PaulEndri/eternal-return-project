import Item from '../../types/Item';

export const MaverickRunner: Item = {
  id: 204403,
  name: 'MaverickRunner',
  buildsInto: [],
  requirements: {
    'Running Shoes': 1,
    'Iron Ball': 1,
    Battery: 1,
    'Piano Wire': 1
  },
  stats: {
    attackSpeedRatio: 0.15,
    moveSpeed: 0.25,
    moveSpeedOutOfCombat: 0.5
  },
  rarity: 'Rare',
  code: '전투화',
  stackable: false,
  maxStacks: 1,
  locations: {},
  foundQuantity: 1,
  description:
    "Heelys designed using futuristic concepts by the world renowned fashion company, Soberef. The parts are even certified by the Federal Aviation Administration. They are driven by linear motors that can get propulsion even when stopped, and there are eight compressed gas injection devices on the front allowing for limited three-dimensional operation. Also, they're LOUD.",
  buildsFrom: [
    {
      name: 'Scissors',
      id: 204204
    },
    {
      name: 'Scissors',
      id: 401103
    }
  ],
  displayName: 'Maverick Runner',
  apiMetaData: {
    code: 204403,
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
