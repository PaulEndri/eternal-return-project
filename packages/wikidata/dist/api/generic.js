"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericApi = void 0;
/**
 * @packageDocumentation
 * @module WikiData
 **/
const node_fetch_1 = __importDefault(require("node-fetch"));
const wikiCache_1 = require("../utils/wikiCache");
const constants_1 = require("../utils/constants");
class GenericApi {
    constructor() {
        this.itemCache = new wikiCache_1.WikiCache();
        this.locationCache = new wikiCache_1.WikiCache();
        this.getAllRequirements = (needles, cache, results = {}) => {
            needles.forEach((itemName) => {
                if (!itemName || !cache[itemName]) {
                    console.warn('[Unknown Item]', itemName);
                    return;
                }
                else if (cache[itemName].Material1 === '') {
                    if (results[itemName]) {
                        results[itemName]++;
                    }
                    else {
                        results[itemName] = 1;
                    }
                }
                else {
                    this.getAllRequirements([cache[itemName].Material1, cache[itemName].Material2], cache, results);
                }
            });
            return results;
        };
        /**
         * Get all items from the getAllItem route with minor processing
         *
         * @param full if true will location Information
         * @param force if true will bypass cache
         */
        this.getAllItems = async (full = false, force = false) => {
            if (this.itemCache.getCount() > 0 && !force) {
                return await this.itemCache.getAll();
            }
            let itemLocations = {};
            if (full) {
                await this.getAllLocationItems();
                const locationData = await this.locationCache.getAll();
                Object.entries(locationData).forEach(([location, items]) => {
                    Object.entries(items).forEach(([item, count]) => {
                        if (!itemLocations[item]) {
                            itemLocations[item] = {};
                        }
                        itemLocations[item][location] = count;
                    });
                });
            }
            const response = await node_fetch_1.default(`${GenericApi.BASE_URL}${GenericApi.ROUTES.ALL_ITEMS}`);
            const results = await response.json();
            const items = Object.fromEntries(results.map((item) => [item.Name, item]));
            const returnedItems = {};
            for (const item of results) {
                const { Material1, Material2, Name, Grade, ItemCategory, ItemType, InitialCount, Stackable, ...Stats } = item;
                const buildsFrom = [Material1, Material2].filter((mat) => mat !== '');
                const buildsInto = results
                    .filter(({ Material1, Material2 }) => Material1 === Name || Material2 === Name)
                    .map(({ Name }) => Name);
                const requirements = this.getAllRequirements(buildsFrom, items);
                const finalStats = Object.fromEntries(Object.entries(Stats)
                    .filter(([, val]) => val !== '')
                    .map(([[first, ...rest], val]) => [
                    `${first.toLowerCase()}${rest.join('')}`,
                    val
                ]));
                const data = {
                    name: Name,
                    href: `/${Name.replace(/ /g, '_')}`,
                    buildsFrom,
                    buildsInto,
                    requirements,
                    stats: finalStats,
                    rarity: Grade,
                    type: ItemType,
                    category: ItemCategory,
                    stackable: Stackable > 1,
                    maxStacks: Stackable,
                    locations: itemLocations[Name] || {},
                    foundQuantity: InitialCount
                };
                returnedItems[Name] = data;
                await this.itemCache.set(Name, data);
            }
            return returnedItems;
        };
        this.getItemsForArea = async (areaName) => {
            if (await this.locationCache.get(areaName)) {
                return this.locationCache.get(areaName);
            }
            const response = await node_fetch_1.default(`${GenericApi.BASE_URL}${GenericApi.ROUTES.LOCATION_ITEMS.replace('{areaName}', areaName)}`);
            const results = await response.json();
            const data = Object.fromEntries(results.map(({ DropCount, ItemName }) => [ItemName, DropCount]));
            await this.locationCache.set(areaName, data);
            return data;
        };
        this.getItem = async (itemName) => {
            await this.getAllItems();
            return await this.itemCache.get(itemName);
        };
        this.getAllLocationItems = async () => {
            if (this.locationCache.getCount() !== Object.keys(constants_1.Locations).length) {
                for (const key of Object.keys(constants_1.Locations)) {
                    await this.getItemsForArea(key);
                }
            }
            return await this.locationCache.getAll();
        };
    }
}
exports.GenericApi = GenericApi;
GenericApi.BASE_URL = 'http://api.playeternalreturn.com';
GenericApi.ROUTES = {
    ALL_ITEMS: '/aesop/item/all',
    LOCATION_ITEMS: '/aesop/area?areaName={areaName}'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvZ2VuZXJpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0lBR0k7QUFDSiw0REFBK0I7QUFFL0Isa0RBQStDO0FBQy9DLGtEQUErQztBQUcvQyxNQUFhLFVBQVU7SUFBdkI7UUFPUyxjQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUVoQyx1QkFBa0IsR0FBRyxDQUM1QixPQUFpQixFQUNqQixLQUFtQyxFQUNuQyxPQUFPLEdBQUcsRUFBRSxFQUNYLEVBQUU7WUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3pDLE9BQU87aUJBQ1A7cUJBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtvQkFDNUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ3RCLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO3FCQUNwQjt5QkFBTTt3QkFDTixPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN0QjtpQkFDRDtxQkFBTTtvQkFDTixJQUFJLENBQUMsa0JBQWtCLENBQ3RCLENBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFFLEVBQ3hELEtBQUssRUFDTCxPQUFPLENBQ1AsQ0FBQztpQkFDRjtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxPQUFPLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUY7Ozs7O1dBS007UUFDQyxnQkFBVyxHQUFHLEtBQUssRUFBRSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUMxRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUM1QyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQVEsQ0FBQzthQUMzQztZQUVELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUV2QixJQUFJLElBQUksRUFBRTtnQkFDVCxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUNqQyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXZELE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFFLEVBQUUsRUFBRTtvQkFDNUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFFLElBQUksRUFBRSxLQUFLLENBQUUsRUFBRSxFQUFFO3dCQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUN6QixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUN6Qjt3QkFFRCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNIO1lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxvQkFBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDckYsTUFBTSxPQUFPLEdBQW1CLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXRELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUM3RSxNQUFNLGFBQWEsR0FBRyxFQUEwQixDQUFDO1lBRWpELEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO2dCQUMzQixNQUFNLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUNMLFlBQVksRUFDWixRQUFRLEVBQ1IsWUFBWSxFQUNaLFNBQVMsRUFDVCxHQUFHLEtBQUssRUFDUixHQUFHLElBQUksQ0FBQztnQkFFVCxNQUFNLFVBQVUsR0FBRyxDQUFFLFNBQVMsRUFBRSxTQUFTLENBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDeEUsTUFBTSxVQUFVLEdBQUcsT0FBTztxQkFDeEIsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQztxQkFDOUUsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3FCQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFFLEFBQUQsRUFBRyxHQUFHLENBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQztxQkFDakMsR0FBRyxDQUFDLENBQUMsQ0FBRSxDQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBRSxFQUFFLEdBQUcsQ0FBRSxFQUFFLEVBQUUsQ0FBQztvQkFDckMsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDeEMsR0FBRztpQkFDSCxDQUFDLENBQ0gsQ0FBQztnQkFFRixNQUFNLElBQUksR0FBRztvQkFDWixJQUFJLEVBQUUsSUFBSTtvQkFDVixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDbkMsVUFBVTtvQkFDVixVQUFVO29CQUNWLFlBQVk7b0JBQ1osS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLE1BQU0sRUFBRSxLQUFLO29CQUNiLElBQUksRUFBRSxRQUFRO29CQUNkLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsU0FBUyxHQUFHLENBQUM7b0JBQ3hCLFNBQVMsRUFBRSxTQUFTO29CQUNwQixTQUFTLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ3BDLGFBQWEsRUFBRSxZQUFZO2lCQUMzQixDQUFDO2dCQUVGLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBRTNCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsT0FBTyxhQUFxQyxDQUFDO1FBQzlDLENBQUMsQ0FBQztRQUVLLG9CQUFlLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQW1DLEVBQUU7WUFDcEYsSUFBSSxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxvQkFBSyxDQUMzQixHQUFHLFVBQVUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUNoRSxZQUFZLEVBQ1osUUFBUSxDQUNSLEVBQUUsQ0FDSCxDQUFDO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEMsTUFBTSxJQUFJLEdBQTJCLE1BQU0sQ0FBQyxXQUFXLENBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBRSxRQUFRLEVBQUUsU0FBUyxDQUFFLENBQUMsQ0FDakUsQ0FBQztZQUVGLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTdDLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBRUssWUFBTyxHQUFHLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDM0MsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFekIsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFPLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQztRQUVLLHdCQUFtQixHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BFLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLEVBQUU7b0JBQ3pDLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEM7YUFDRDtZQUVELE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQztJQUNILENBQUM7O0FBOUpELGdDQThKQztBQTdKTyxtQkFBUSxHQUFHLGtDQUFrQyxDQUFDO0FBQzlDLGlCQUFNLEdBQUc7SUFDZixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLGNBQWMsRUFBRSxpQ0FBaUM7Q0FDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBcclxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXHJcbiAqIEBtb2R1bGUgV2lraURhdGFcclxuICoqL1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcbmltcG9ydCB7IElHZW5lcmljSXRlbSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSUdlbmVyaWNJdGVtJztcclxuaW1wb3J0IHsgV2lraUNhY2hlIH0gZnJvbSAnLi4vdXRpbHMvd2lraUNhY2hlJztcclxuaW1wb3J0IHsgTG9jYXRpb25zIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSXRlbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VuZXJpY0FwaSB7XHJcblx0c3RhdGljIEJBU0VfVVJMID0gJ2h0dHA6Ly9hcGkucGxheWV0ZXJuYWxyZXR1cm4uY29tJztcclxuXHRzdGF0aWMgUk9VVEVTID0ge1xyXG5cdFx0QUxMX0lURU1TOiAnL2Flc29wL2l0ZW0vYWxsJyxcclxuXHRcdExPQ0FUSU9OX0lURU1TOiAnL2Flc29wL2FyZWE/YXJlYU5hbWU9e2FyZWFOYW1lfSdcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIGl0ZW1DYWNoZSA9IG5ldyBXaWtpQ2FjaGUoKTtcclxuXHRwcml2YXRlIGxvY2F0aW9uQ2FjaGUgPSBuZXcgV2lraUNhY2hlKCk7XHJcblxyXG5cdHByaXZhdGUgZ2V0QWxsUmVxdWlyZW1lbnRzID0gKFxyXG5cdFx0bmVlZGxlczogc3RyaW5nW10sXHJcblx0XHRjYWNoZTogUmVjb3JkPHN0cmluZywgSUdlbmVyaWNJdGVtPixcclxuXHRcdHJlc3VsdHMgPSB7fVxyXG5cdCkgPT4ge1xyXG5cdFx0bmVlZGxlcy5mb3JFYWNoKChpdGVtTmFtZSkgPT4ge1xyXG5cdFx0XHRpZiAoIWl0ZW1OYW1lIHx8ICFjYWNoZVtpdGVtTmFtZV0pIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1tVbmtub3duIEl0ZW1dJywgaXRlbU5hbWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSBlbHNlIGlmIChjYWNoZVtpdGVtTmFtZV0uTWF0ZXJpYWwxID09PSAnJykge1xyXG5cdFx0XHRcdGlmIChyZXN1bHRzW2l0ZW1OYW1lXSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0c1tpdGVtTmFtZV0rKztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0c1tpdGVtTmFtZV0gPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmdldEFsbFJlcXVpcmVtZW50cyhcclxuXHRcdFx0XHRcdFsgY2FjaGVbaXRlbU5hbWVdLk1hdGVyaWFsMSwgY2FjaGVbaXRlbU5hbWVdLk1hdGVyaWFsMiBdLFxyXG5cdFx0XHRcdFx0Y2FjaGUsXHJcblx0XHRcdFx0XHRyZXN1bHRzXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBHZXQgYWxsIGl0ZW1zIGZyb20gdGhlIGdldEFsbEl0ZW0gcm91dGUgd2l0aCBtaW5vciBwcm9jZXNzaW5nXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBmdWxsIGlmIHRydWUgd2lsbCBsb2NhdGlvbiBJbmZvcm1hdGlvblxyXG4gICAgICogQHBhcmFtIGZvcmNlIGlmIHRydWUgd2lsbCBieXBhc3MgY2FjaGVcclxuICAgICAqL1xyXG5cdHB1YmxpYyBnZXRBbGxJdGVtcyA9IGFzeW5jIChmdWxsID0gZmFsc2UsIGZvcmNlID0gZmFsc2UpID0+IHtcclxuXHRcdGlmICh0aGlzLml0ZW1DYWNoZS5nZXRDb3VudCgpID4gMCAmJiAhZm9yY2UpIHtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuaXRlbUNhY2hlLmdldEFsbDxJdGVtPigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBpdGVtTG9jYXRpb25zID0ge307XHJcblxyXG5cdFx0aWYgKGZ1bGwpIHtcclxuXHRcdFx0YXdhaXQgdGhpcy5nZXRBbGxMb2NhdGlvbkl0ZW1zKCk7XHJcblx0XHRcdGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IHRoaXMubG9jYXRpb25DYWNoZS5nZXRBbGwoKTtcclxuXHJcblx0XHRcdE9iamVjdC5lbnRyaWVzKGxvY2F0aW9uRGF0YSkuZm9yRWFjaCgoWyBsb2NhdGlvbiwgaXRlbXMgXSkgPT4ge1xyXG5cdFx0XHRcdE9iamVjdC5lbnRyaWVzKGl0ZW1zKS5mb3JFYWNoKChbIGl0ZW0sIGNvdW50IF0pID0+IHtcclxuXHRcdFx0XHRcdGlmICghaXRlbUxvY2F0aW9uc1tpdGVtXSkge1xyXG5cdFx0XHRcdFx0XHRpdGVtTG9jYXRpb25zW2l0ZW1dID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aXRlbUxvY2F0aW9uc1tpdGVtXVtsb2NhdGlvbl0gPSBjb3VudDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtHZW5lcmljQXBpLkJBU0VfVVJMfSR7R2VuZXJpY0FwaS5ST1VURVMuQUxMX0lURU1TfWApO1xyXG5cdFx0Y29uc3QgcmVzdWx0czogSUdlbmVyaWNJdGVtW10gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0Y29uc3QgaXRlbXMgPSBPYmplY3QuZnJvbUVudHJpZXMocmVzdWx0cy5tYXAoKGl0ZW0pID0+IFsgaXRlbS5OYW1lLCBpdGVtIF0pKTtcclxuXHRcdGNvbnN0IHJldHVybmVkSXRlbXMgPSB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBJdGVtPjtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzdWx0cykge1xyXG5cdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0TWF0ZXJpYWwxLFxyXG5cdFx0XHRcdE1hdGVyaWFsMixcclxuXHRcdFx0XHROYW1lLFxyXG5cdFx0XHRcdEdyYWRlLFxyXG5cdFx0XHRcdEl0ZW1DYXRlZ29yeSxcclxuXHRcdFx0XHRJdGVtVHlwZSxcclxuXHRcdFx0XHRJbml0aWFsQ291bnQsXHJcblx0XHRcdFx0U3RhY2thYmxlLFxyXG5cdFx0XHRcdC4uLlN0YXRzXHJcblx0XHRcdH0gPSBpdGVtO1xyXG5cclxuXHRcdFx0Y29uc3QgYnVpbGRzRnJvbSA9IFsgTWF0ZXJpYWwxLCBNYXRlcmlhbDIgXS5maWx0ZXIoKG1hdCkgPT4gbWF0ICE9PSAnJyk7XHJcblx0XHRcdGNvbnN0IGJ1aWxkc0ludG8gPSByZXN1bHRzXHJcblx0XHRcdFx0LmZpbHRlcigoeyBNYXRlcmlhbDEsIE1hdGVyaWFsMiB9KSA9PiBNYXRlcmlhbDEgPT09IE5hbWUgfHwgTWF0ZXJpYWwyID09PSBOYW1lKVxyXG5cdFx0XHRcdC5tYXAoKHsgTmFtZSB9KSA9PiBOYW1lKTtcclxuXHRcdFx0Y29uc3QgcmVxdWlyZW1lbnRzID0gdGhpcy5nZXRBbGxSZXF1aXJlbWVudHMoYnVpbGRzRnJvbSwgaXRlbXMpO1xyXG5cdFx0XHRjb25zdCBmaW5hbFN0YXRzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG5cdFx0XHRcdE9iamVjdC5lbnRyaWVzKFN0YXRzKVxyXG5cdFx0XHRcdFx0LmZpbHRlcigoWyAsIHZhbCBdKSA9PiB2YWwgIT09ICcnKVxyXG5cdFx0XHRcdFx0Lm1hcCgoWyBbIGZpcnN0LCAuLi5yZXN0IF0sIHZhbCBdKSA9PiBbXHJcblx0XHRcdFx0XHRcdGAke2ZpcnN0LnRvTG93ZXJDYXNlKCl9JHtyZXN0LmpvaW4oJycpfWAsXHJcblx0XHRcdFx0XHRcdHZhbFxyXG5cdFx0XHRcdFx0XSlcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdFx0bmFtZTogTmFtZSxcclxuXHRcdFx0XHRocmVmOiBgLyR7TmFtZS5yZXBsYWNlKC8gL2csICdfJyl9YCxcclxuXHRcdFx0XHRidWlsZHNGcm9tLFxyXG5cdFx0XHRcdGJ1aWxkc0ludG8sXHJcblx0XHRcdFx0cmVxdWlyZW1lbnRzLFxyXG5cdFx0XHRcdHN0YXRzOiBmaW5hbFN0YXRzLFxyXG5cdFx0XHRcdHJhcml0eTogR3JhZGUsXHJcblx0XHRcdFx0dHlwZTogSXRlbVR5cGUsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IEl0ZW1DYXRlZ29yeSxcclxuXHRcdFx0XHRzdGFja2FibGU6IFN0YWNrYWJsZSA+IDEsXHJcblx0XHRcdFx0bWF4U3RhY2tzOiBTdGFja2FibGUsXHJcblx0XHRcdFx0bG9jYXRpb25zOiBpdGVtTG9jYXRpb25zW05hbWVdIHx8IHt9LFxyXG5cdFx0XHRcdGZvdW5kUXVhbnRpdHk6IEluaXRpYWxDb3VudFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuZWRJdGVtc1tOYW1lXSA9IGRhdGE7XHJcblxyXG5cdFx0XHRhd2FpdCB0aGlzLml0ZW1DYWNoZS5zZXQoTmFtZSwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldHVybmVkSXRlbXMgYXMgUmVjb3JkPHN0cmluZywgSXRlbT47XHJcblx0fTtcclxuXHJcblx0cHVibGljIGdldEl0ZW1zRm9yQXJlYSA9IGFzeW5jIChhcmVhTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PiA9PiB7XHJcblx0XHRpZiAoYXdhaXQgdGhpcy5sb2NhdGlvbkNhY2hlLmdldChhcmVhTmFtZSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubG9jYXRpb25DYWNoZS5nZXQoYXJlYU5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcblx0XHRcdGAke0dlbmVyaWNBcGkuQkFTRV9VUkx9JHtHZW5lcmljQXBpLlJPVVRFUy5MT0NBVElPTl9JVEVNUy5yZXBsYWNlKFxyXG5cdFx0XHRcdCd7YXJlYU5hbWV9JyxcclxuXHRcdFx0XHRhcmVhTmFtZVxyXG5cdFx0XHQpfWBcclxuXHRcdCk7XHJcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0Y29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuXHRcdFx0cmVzdWx0cy5tYXAoKHsgRHJvcENvdW50LCBJdGVtTmFtZSB9KSA9PiBbIEl0ZW1OYW1lLCBEcm9wQ291bnQgXSlcclxuXHRcdCk7XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5sb2NhdGlvbkNhY2hlLnNldChhcmVhTmFtZSwgZGF0YSk7XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGdldEl0ZW0gPSBhc3luYyAoaXRlbU5hbWU6IHN0cmluZykgPT4ge1xyXG5cdFx0YXdhaXQgdGhpcy5nZXRBbGxJdGVtcygpO1xyXG5cclxuXHRcdHJldHVybiBhd2FpdCB0aGlzLml0ZW1DYWNoZS5nZXQ8SXRlbT4oaXRlbU5hbWUpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBnZXRBbGxMb2NhdGlvbkl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMubG9jYXRpb25DYWNoZS5nZXRDb3VudCgpICE9PSBPYmplY3Qua2V5cyhMb2NhdGlvbnMpLmxlbmd0aCkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhMb2NhdGlvbnMpKSB7XHJcblx0XHRcdFx0YXdhaXQgdGhpcy5nZXRJdGVtc0ZvckFyZWEoa2V5KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBhd2FpdCB0aGlzLmxvY2F0aW9uQ2FjaGUuZ2V0QWxsKCk7XHJcblx0fTtcclxufVxyXG4iXX0=