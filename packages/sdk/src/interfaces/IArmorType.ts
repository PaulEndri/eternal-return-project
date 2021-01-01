import { Armors, ArmorsLookup } from '../constants';
import { IElement } from './IElement';

export interface IArmorType {
	name: Armors | string;
	items: IElement[];
	apiMetaData: {
		type: ArmorsLookup | string;
		name: Armors | string;
		category: string;
	};
}
