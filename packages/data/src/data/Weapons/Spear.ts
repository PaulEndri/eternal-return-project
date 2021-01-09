import Weapon from '../../types/Weapon';

export const Spear: Weapon = {
  name: 'Spear',
  abilityDetails: {
    name: 'Shadow_Stab',
    description:
      'Powerfully lunge your spear in the targeted direction, dealing damage. You also deal damage to enemies within a certain range. Enemies hit by the attack have their movement speed reduced, and all enemies in a certain range get knocked back.',
    info: [
      {
        title: 'Skill damage',
        value: '1AP/1.5AP'
      },
      {
        title: 'Range',
        value: '2m/4m'
      },
      {
        title: 'Casting time',
        value: '0.3s'
      },
      {
        title: 'Cooldown',
        value: '30s'
      }
    ]
  },
  usableBy: ['Fiora', 'Xiukai'],
  items: [
    {
      name: 'Short Spear',
      id: 107101
    },
    {
      name: 'Bamboo Spear',
      id: 107201
    },
    {
      name: 'Bident',
      id: 107301
    },
    {
      name: 'Pike',
      id: 107302
    },
    {
      name: 'Halberd Axe',
      id: 107303
    },
    {
      name: 'Sharpened Spear',
      id: 107401
    },
    {
      name: 'Gentian Silver Gun',
      id: 107402
    },
    {
      name: 'Eighteen Foot Spear',
      id: 107403
    },
    {
      name: 'Cosmic Bident',
      id: 107404
    },
    {
      name: 'Lance of Poseidon',
      id: 107405
    },
    {
      name: 'Fangtian Huaji',
      id: 107407
    },
    {
      name: 'Dragon Guandao',
      id: 107408
    },
    {
      name: 'Blazing Lance',
      id: 107406
    },
    {
      name: 'Spear of Longinus',
      id: 107501
    }
  ],
  apiMetaData: {
    type: 'Spear',
    name: 'Spear',
    category: 'Weapon'
  }
};
