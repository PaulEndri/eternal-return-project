/**
 * @packageDocumentation
 * @module WikiData
 * */
import { ICharacter } from '../interfaces/ICharacter';
import { IElement } from '../interfaces/IElement';
import { CoreScraper } from './core';
export declare class CharacterScraper extends CoreScraper {
    private statMap;
    getCharacter: ({ name, href }: IElement) => Promise<ICharacter>;
    getAll: (weaponData?: Record<string, any>) => Promise<{
        [k: string]: ICharacter;
    }>;
}
//# sourceMappingURL=character.d.ts.map