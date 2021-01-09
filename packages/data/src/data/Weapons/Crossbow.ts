import Weapon from '../../types/Weapon';

export const Crossbow: Weapon = {
  name: 'Crossbow',
  abilityDetails: {
    name: 'Expulsion_Shot',
    description:
      'Fire the crossbow in the targeted direction. Targets hit by the arrows take damage and are knocked back. Enemies knocked into a wall take extra damage and are stunned.',
    info: [
      {
        title: 'Skill damage',
        value: '0.6/1 AP'
      },
      {
        title: 'Range',
        value: '6m'
      },
      {
        title: 'Casting time',
        value: '0.55s'
      },
      {
        title: 'Cooldown',
        value: '30 seconds'
      }
    ]
  },
  usableBy: ['Nadine'],
  items: [
    {
      name: 'Short Crossbow',
      id: 115202
    },
    {
      name: 'Long Crossbow',
      id: 115201
    },
    {
      name: 'Crossbow',
      id: 115101
    },
    {
      name: 'Power Crossbow',
      id: 115301
    },
    {
      name: 'Laser Crossbow',
      id: 115302
    },
    {
      name: 'Heavy Crossbow',
      id: 115303
    },
    {
      name: 'Steel Bow',
      id: 115401
    },
    {
      name: 'The Legend of The General',
      id: 115402
    },
    {
      name: 'Ballista',
      id: 115403
    },
    {
      name: 'Sniper Crossbow',
      id: 115404
    },
    {
      name: 'The Golden Ghost',
      id: 115405
    },
    {
      name: 'Sharanga',
      id: 115501
    }
  ],
  apiMetaData: {
    type: 'CrossBow',
    name: 'Crossbow',
    category: 'Weapon'
  }
};
