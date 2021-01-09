import Weapon from '../../types/Weapon';

export const Dagger: Weapon = {
  name: 'Dagger',
  abilityDetails: {
    name: 'Cloak_and_Dagger',
    description:
      "Cloak-Activating the cloak skill causes you become transparent and increases your movement speed for 2 seconds by 40%. Your movement speed will decrease again after 2 seconds.\nDagger-For 4 seconds, the dagger effect is added to the next normal attack. Attacking an enemy when the dagger effect is active teleports you behind the enemy, dealing (?#) Critical damage an an additional 10% of the enemy's current HP as true damage.",
    info: [
      {
        title: 'Move. speed',
        value: '90 %'
      },
      {
        title: 'Skill duration',
        value: 'Movespeed: 1s Blink: 4s'
      },
      {
        title: 'Casting time',
        value: '0.2s'
      },
      {
        title: 'Cooldown',
        value: '30s'
      }
    ]
  },
  usableBy: ['Jackie', 'Shoichi', 'Xiukai'],
  items: [
    {
      name: 'Scissors',
      id: 101101
    },
    {
      name: 'Fountain Pen',
      id: 101102
    },
    {
      name: 'Kitchen Knife',
      id: 101104
    },
    {
      name: 'Army Knife',
      id: 101201
    },
    {
      name: 'Rose Knife',
      id: 101301
    },
    {
      name: 'Carnwennan',
      id: 101401
    },
    {
      name: 'Mount Slicer',
      id: 101402
    },
    {
      name: 'Vibroblade',
      id: 101404
    },
    {
      name: 'Fragarach',
      id: 101405
    }
  ],
  apiMetaData: {
    type: 'OneHandSword',
    name: 'Dagger',
    category: 'Weapon'
  }
};
