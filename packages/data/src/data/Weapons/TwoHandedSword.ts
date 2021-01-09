import Weapon from '../../types/Weapon';

export const TwoHandedSword: Weapon = {
  name: 'Two-Handed Sword',
  abilityDetails: {
    name: 'Parry',
    description:
      'Block all damage for a certain time, and return the damage to the attacking enemy.',
    info: [
      {
        title: 'Skill duration',
        value: '0.75s'
      },
      {
        title: 'Casting time',
        value: '0.13s'
      },
      {
        title: 'Cooldown',
        value: '30s'
      }
    ]
  },
  usableBy: ['Jackie', 'Fiora', 'Yuki'],
  items: [
    {
      name: 'Rusty Sword',
      id: 102101
    },
    {
      name: 'Shamshir',
      id: 102201
    },
    {
      name: 'Katana',
      id: 102301
    },
    {
      name: 'Masamune',
      id: 102401
    },
    {
      name: 'Muramasa',
      id: 102402
    },
    {
      name: 'Bastard Sword',
      id: 102403
    },
    {
      name: 'Jewel Sword',
      id: 102404
    },
    {
      name: 'Thuan Thien',
      id: 102405
    },
    {
      name: 'Plasma Sword',
      id: 102408
    },
    {
      name: 'Excalibur',
      id: 102407
    },
    {
      name: 'Arondight',
      id: 102406
    },
    {
      name: 'Hovud',
      id: 102411
    },
    {
      name: 'Monohoshizao',
      id: 102410
    },
    {
      name: 'Laevateinn',
      id: 102409
    },
    {
      name: 'Dainsleif',
      id: 102501
    }
  ],
  apiMetaData: {
    type: 'TwoHandSword',
    name: 'TwoHandedSword',
    category: 'Weapon'
  }
};
