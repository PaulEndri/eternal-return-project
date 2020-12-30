import { Locations, Items, Animals } from '../constants';
import { MaterialList } from '../libs/MaterialList';
import { IElement } from './IElement';

export interface ILocationEntity extends IElement<Items & Animals> {
	quantity: number;
}

export interface IRawLocation extends IElement<Locations> {
	drops: ILocationEntity[];
	animals: ILocationEntity[];
	teleport: boolean;
	connections: IElement<Locations>[];
	apiMetaData?: {
		type: string;
		code: number;
		name: string;
	};
}

export interface ILocation extends IRawLocation {
	materials: MaterialList;
}
