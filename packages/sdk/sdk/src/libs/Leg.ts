import { Legs } from '../constants/Armor/Legs';
import { WEIGHTS } from '../constants/Weights';
import { Item } from './Item';

export class Leg extends Item<Legs> {
	public get type() {
		return 'Leg';
	}

	public get typeWeight() {
		return WEIGHTS.EQUIPMENT.LEG;
	}
}
