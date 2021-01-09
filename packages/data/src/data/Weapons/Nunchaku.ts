import Weapon from '../../types/Weapon';

export const Nunchaku: Weapon = {
  name: 'Nunchaku',
  abilityDetails: {
    name: 'Grappling_Whip',
    description:
      'Snap your whip in front of you, dealing damage to enemies hit and pulling them 2.5m towards you for 1 second. Enemies that are in a range less than 2.5m are knocked airborne for 0.75 seconds.',
    info: [
      {
        title: 'Skill damage',
        value: '100/150 (+0.3AP)'
      },
      {
        title: 'Range',
        value: '8m'
      },
      {
        title: 'Casting time',
        value: '0.26s'
      }
    ]
  },
  usableBy: ['Li Dailin'],
  items: [
    {
      name: 'Steel Chain',
      id: 119101
    },
    {
      name: 'Nunchaku',
      id: 119201
    },
    {
      name: 'Sharper',
      id: 119301
    },
    {
      name: 'Bleeder',
      id: 119302
    },
    {
      name: 'The Smiting Dragon',
      id: 119401
    },
    {
      name: 'Vibro Nunchaku',
      id: 119402
    },
    {
      name: 'Whip',
      id: 109101
    },
    {
      name: 'Rope Cuffs',
      id: 109201
    },
    {
      name: 'Bullwhip',
      id: 109202
    },
    {
      name: 'Wind Whip',
      id: 109301
    },
    {
      name: 'Thunder Whip',
      id: 109401
    },
    {
      name: 'Lightning Whip',
      id: 109402
    },
    {
      name: 'Gleipnir',
      id: 109403
    },
    {
      name: 'Plasma Whip',
      id: 109404
    }
  ],
  apiMetaData: {
    type: 'Nunchaku',
    name: 'Nunchaku',
    category: 'Weapon'
  }
};
