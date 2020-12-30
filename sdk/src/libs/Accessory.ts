import { Accessories } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Item } from './Item';

export class Accessory extends Item<Accessories> {
	public get type() {
		return 'Accessory';
	}

	public get typeWeight() {
		return WEIGHTS.EQUIPMENT.ACCESSORY;
	}
}
