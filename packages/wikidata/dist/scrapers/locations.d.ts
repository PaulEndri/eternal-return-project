import { IElement } from '../interfaces/IElement';
import { CoreScraper } from './core';
export declare class LocationScraper extends CoreScraper {
    private genericApi;
    constructor(cache?: any);
    getLocation({ name, href }: IElement, full?: boolean): Promise<any>;
    getAll(full?: boolean): Promise<any>;
}
//# sourceMappingURL=locations.d.ts.map