import { Accessories } from '../constants/Armor/Accessories';
import { Arms } from '../constants/Armor/Arms';
import { Chests } from '../constants/Armor/Chests';
import { Heads } from '../constants/Armor/Heads';
import { Legs } from '../constants/Armor/Legs';
import { WeaponsEnum } from '../constants/Weapon';
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
