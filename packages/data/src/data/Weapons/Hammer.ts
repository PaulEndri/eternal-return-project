import Weapon from '../../types/Weapon';

export const Hammer: Weapon = {
  name: 'Hammer',
  abilityDetails: {
    name: 'Armor_Piercing',
    description:
      'Smash the hammer down, dealing X damage and reducing the defense of enemies hit by X% for 5 seconds.',
    info: [
      {
        title: 'Skill damage',
        value: '100 + 100%/200% Defense'
      },
      {
        title: 'Defense',
        value: '-25%/-40%'
      },
      {
        title: 'Debuff duration',
        value: '3s/5s'
      },
      {
        title: 'Area of effect',
        value: '[Square]3m'
      },
      {
        title: 'Casting time',
        value: '0.5s'
      },
      {
        title: 'Cost',
        value: '0 SP'
      },
      {
        title: 'Cooldown',
        value: '30s'
      }
    ]
  },
  usableBy: ['Magnus'],
  items: [
    {
      name: 'Hammer',
      id: 104101
    },
    {
      name: 'Warhammer',
      id: 104201
    },
    {
      name: 'Morning Star',
      id: 104301
    },
    {
      name: 'Black Stag Hammer',
      id: 104302
    },
    {
      name: 'Fang Mace',
      id: 104401
    },
    {
      name: 'Hammer of Dagda',
      id: 104402
    },
    {
      name: 'Hammer of Thor',
      id: 104403
    },
    {
      name: 'Evening Star',
      id: 104404
    },
    {
      name: 'Magic Stick',
      id: 104405
    }
  ],
  apiMetaData: {
    type: 'Hammer',
    name: 'Hammer',
    category: 'Weapon'
  }
};
