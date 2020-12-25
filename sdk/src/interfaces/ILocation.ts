import { IBasicItem } from './IBasicItem';
import { IElement } from './IElement';
import { ILocationDrop } from './ILocationDrop';

export interface ILocation extends IElement {
	materials: Record<string, ILocationDrop>;
	animals: Record<string, ILocationDrop>;
	teleport: boolean;
	connections: any[];
}

export interface IWeightedLocation extends ILocation {
	value: number;
	byProductsBuilt: Record<string, IBasicItem<any>>;
	simplifiedMaterials: Array<Array<string | number>>;
}
