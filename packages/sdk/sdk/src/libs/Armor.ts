import { ArmorsEnum } from '../constants';
import { Item } from './Item';

export class Armor extends Item<ArmorsEnum> {
	public get type() {
		return 'Armor';
	}
}
