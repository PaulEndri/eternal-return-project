import Weapon from '../../types/Weapon';

export const AssaultRifle: Weapon = {
  name: 'Assault Rifle',
  abilityDetails: {
    name: 'Overheat',
    description:
      'When hitting an enemy with a normal attack, you gain an Overheat stack for each bullet. If you do not use a normal attack for a certain time, your start to lose stacks. When you reach the maximum number of stacks, you can activate the Overheat skill. When this skill is activated, the attack speed cap is ignored and your normal attacks gain a knockback effect.',
    info: [
      {
        title: 'Skill duration',
        value: '5s'
      },
      {
        title: 'Casting time',
        value: 'Instant'
      },
      {
        title: 'Cooldown',
        value: '30/30s'
      }
    ]
  },
  usableBy: ['Aya', 'Isol'],
  items: [
    {
      name: 'Fedorova',
      id: 117101
    },
    {
      name: 'STG44',
      id: 117201
    },
    {
      name: 'AK-47',
      id: 117301
    },
    {
      name: 'M16A1',
      id: 117401
    },
    {
      name: 'Machine Gun',
      id: 117402
    },
    {
      name: 'Gatling Gun',
      id: 117403
    },
    {
      name: 'AK-12',
      id: 117404
    },
    {
      name: 'XCR',
      id: 117405
    }
  ],
  apiMetaData: {
    type: 'AssaultRifle',
    name: 'AssaultRifle',
    category: 'Weapon'
  }
};
