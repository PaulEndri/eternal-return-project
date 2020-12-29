import { Item } from '../interfaces/Item';
export declare class GenericApi {
    static BASE_URL: string;
    static ROUTES: {
        ALL_ITEMS: string;
        LOCATION_ITEMS: string;
    };
    private itemCache;
    private locationCache;
    private getAllRequirements;
    /**
     * Get all items from the getAllItem route with minor processing
     *
     * @param full if true will location Information
     * @param force if true will bypass cache
     */
    getAllItems: (full?: boolean, force?: boolean) => Promise<Record<string, Item<import("../interfaces/IElement").IElement>>>;
    getItemsForArea: (areaName: string) => Promise<Record<string, number>>;
    getItem: (itemName: string) => Promise<Item<import("../interfaces/IElement").IElement>>;
    getAllLocationItems: () => Promise<Record<string, any>>;
}
//# sourceMappingURL=generic.d.ts.map