import Weapon from '../../types/Weapon';

export const Axe: Weapon = {
  name: 'Axe',
  abilityDetails: {
    name: 'Berserk',
    description:
      'Every time you use a normal attack on an enemy, you gain a stack of Berserk. Your attack power increases with how many Berserk stacks you have. Activating this skill increases your attack power depending on the number of Berserk stacks you have and how much HP you have lost.',
    info: [
      {
        title: 'Skill duration',
        value: '5s/7s'
      },
      {
        title: 'Casting time',
        value: '0.2s'
      },
      {
        title: 'Cooldown',
        value: '60s'
      }
    ]
  },
  usableBy: ['Jackie'],
  items: [
    {
      name: 'Pickaxe',
      id: 105102
    },
    {
      name: 'Hatchet',
      id: 105103
    },
    {
      name: 'Chain Scythe',
      id: 105201
    },
    {
      name: 'Battle Axe',
      id: 105202
    },
    {
      name: 'Light Hatchet',
      id: 105301
    },
    {
      name: "Reaper's Scythe",
      id: 105302
    },
    {
      name: 'Gigantic Axe',
      id: 105401
    },
    {
      name: 'Beam Axe',
      id: 105402
    },
    {
      name: 'Santa Muerte',
      id: 105403
    },
    {
      name: 'Scythe',
      id: 105404
    },
    {
      name: 'Parashu',
      id: 105405
    },
    {
      name: 'Harpe',
      id: 105406
    }
  ],
  apiMetaData: {
    type: 'Axe',
    name: 'Axe',
    category: 'Weapon'
  }
};
