/**
 * @packageDocumentation
 * @module WikiData
 * */
import { IAnimal } from '../../src/interfaces/IAnimal';
import { IElement } from '../../src/interfaces/IElement';
import { CoreScraper } from '../../src/scrapers/core';
export declare class AnimalScraper extends CoreScraper {
	getAnimal: ({ name, href }: IElement) => Promise<IAnimal>;
	getAll: () => Promise<{
		[k: string]: IAnimal;
	}>;
}
//# sourceMappingURL=animals.d.ts.map
