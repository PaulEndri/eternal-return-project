/**
 * @packageDocumentation
 * @module WikiData
 * */
import { IAnimal } from '../interfaces/IAnimal';
import { IElement } from '../interfaces/IElement';
import { CoreScraper } from './core';
export declare class AnimalScraper extends CoreScraper {
    getAnimal: ({ name, href }: IElement) => Promise<IAnimal>;
    getAll: () => Promise<{
        [k: string]: IAnimal;
    }>;
}
//# sourceMappingURL=animals.d.ts.map