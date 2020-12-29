import { IElement } from '../../src/interfaces/IElement';
export interface IAnimal extends IElement {
	locations: Record<string, number>;
	items: Record<
		string,
		{
			name: string;
			rarity: string;
			quantity: number;
		}
	>;
}
//# sourceMappingURL=IAnimal.d.ts.map
