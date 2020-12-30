import { Armors, ArmorType, Item, Weapons, WeaponsLookup, WeaponType } from 'erbs-sdk';
import { Types } from './types';

const armorListByType = Object.fromEntries<Item[]>(
	Object.values(Armors).map((key: Armors) => {
		const type = new ArmorType(key);

		return [ key, type.loadArmors() ];
	})
);

const weaponListByType = Object.fromEntries<Item[]>(
	Object.entries(WeaponsLookup).map(([ name, val ]) => {
		const type = new WeaponType(name);
		console.log('[sup]', type);
		return [ val, type.loadWeapons() ];
	})
);

console.log('[Sup]', Object.keys(Weapons));

console.log('[Sup]', { weaponListByType, armorListByType });
export const getItemList = (type: Types | Weapons) => {
	if (armorListByType[type]) {
		return armorListByType[type];
	} else if (weaponListByType[type]) {
		return weaponListByType[type];
	} else if (type === Types.Weapon) {
		return Object.values(weaponListByType).flat();
	} else {
		return [];
	}
};
