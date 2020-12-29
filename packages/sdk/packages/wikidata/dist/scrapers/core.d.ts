import { IWikiCache } from '../interfaces/IWikiCache';
export declare class CoreScraper {
    static BASE_URL: string;
    cache: IWikiCache;
    constructor(cache?: IWikiCache);
    protected getSimpleElement: ($: any, el: any, nameOnly?: boolean) => any;
    getPage: (page: string, skipCache?: boolean) => Promise<any>;
}
//# sourceMappingURL=core.d.ts.map