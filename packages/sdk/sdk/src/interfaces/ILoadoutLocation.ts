import { IElement } from './IElement';

export interface ILoadoutLocation extends IElement {
	materials: Record<string, number>;
}
