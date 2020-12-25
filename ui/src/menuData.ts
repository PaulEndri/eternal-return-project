import { Weapons } from '../../constants/Weapon';
import { Armors } from '../../constants/Armor';

export const rootMenus = [ 'Home', 'Wiki', 'Builds' ];

export const wikiMenus = [
	'Weapons',
	'Armors',
	'Consumables',
	'Materials',
	'Locations',
	'Characters',
	'Animals'
];

export const weaponMenus = Object.keys(Weapons);
export const armorMenus = Object.keys(Armors);
