import { Chests } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Item } from './Item';

export class Chest extends Item<Chests> {
	public get type() {
		return 'Chest';
	}

	public get typeWeight() {
		return WEIGHTS.EQUIPMENT.ARMOR;
	}
}
