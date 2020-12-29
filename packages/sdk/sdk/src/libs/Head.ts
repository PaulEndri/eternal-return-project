import { Heads } from '../constants/data/Consumable/Armor/Heads';
import { WEIGHTS } from '../constants/Weights';
import { Item } from './Item';

export class Head extends Item<Heads> {
	public get type() {
		return 'Head';
	}

	public get typeWeight() {
		return WEIGHTS.EQUIPMENT.HEAD;
	}
}
