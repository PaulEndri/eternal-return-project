import {
	Weapon,
	Chest,
	Arm,
	Head,
	Leg,
	Accessory,
	Accessories,
	Arms,
	Chests,
	Heads,
	Legs,
	WeaponsEnum,
	WeaponTypes
} from 'erbs-sdk';
import { Types } from './types';

const getList = (itemClass, items) => {
	return Object.keys(items).map((item) => new itemClass(item) as any);
};
export const ItemLists = {
	[Types.Weapon]: getList(Weapon, WeaponsEnum),
	[Types.Chest]: getList(Chest, Chests),
	[Types.Head]: getList(Head, Heads),
	[Types.Arm]: getList(Arm, Arms),
	[Types.Leg]: getList(Leg, Legs),
	[Types.Accessory]: getList(Accessory, Accessories)
};

export const getItemList = (type, weaponType) => {
	const options = ItemLists[type] ? ItemLists[type] : Object.values(ItemLists).flat();
	if (type === Types.Weapon && weaponType) {
		return options.filter((option) => option.type === WeaponTypes[weaponType]);
	}

	return options;
};
