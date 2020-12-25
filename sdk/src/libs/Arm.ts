import { Arms } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Item } from './Item';

export class Arm extends Item<Arms> {
	public get type() {
		return 'Arm';
	}

	public get typeWeight() {
		return WEIGHTS.EQUIPMENT.ARM;
	}
}
