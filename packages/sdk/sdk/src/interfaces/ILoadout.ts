import { Accessories } from '../constants/data/Consumable/Armor/Accessories';
import { Arms } from '../constants/data/Consumable/Armor/Arms';
import { Chests } from '../constants/data/Consumable/Armor/Chests';
import { Heads } from '../constants/data/Consumable/Armor/Heads';
import { Legs } from '../constants/data/Consumable/Armor/Legs';
import { WeaponsEnum } from '../constants/data/Weapon';
import { IBasicItem } from './IBasicItem';

export interface ILoadout {
	Weapon: IBasicItem<WeaponsEnum>;
	Chest: IBasicItem<Chests>;
	Head: IBasicItem<Heads>;
	Leg: IBasicItem<Legs>;
	Arm: IBasicItem<Arms>;
	Accessory: IBasicItem<Accessories>;
}

export interface IBasicLoadout {
	Weapon: WeaponsEnum;
	Chest: Chests;
	Head: Heads;
	Leg: Legs;
	Arm: Arms;
	Accessory: Accessories;
}
