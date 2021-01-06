import { Locations, Items } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Loadout } from './Loadout';
import { MaterialList } from './MaterialList';
import { Region } from './Region';

export class Route {
  static MAXIMUM_LOCATIONS = WEIGHTS.MAXIMUM_LOCATIONS;
  static MINIMUM_ITEM_THRESHOLD = WEIGHTS.MINIMUM_ITEM_THRESHOLD;
  static SHORT_ITEM_THRESHOLD = WEIGHTS.SHORT_ITEM_THRESHOLD;
  static UNIVERSAL_ITEMS: string[] = [
    Items.Stone,
    Items.Leather,
    Items['VF Blood Sample'],
    Items.Meteorite,
    Items.Mithril,
    Items.Branch
  ];

  private materials = new MaterialList();
  private regions: Region[] = [];

  constructor(public loadout: Loadout) {
    this.addMaterialsFromLoadout(this.materials, loadout);
  }

  public addMaterialsFromLoadout(materialList: MaterialList, loadout: Loadout) {
    this.materials.add(loadout.starterItem, 1);

    Object.entries(loadout.materials)
      .filter(([mat]) => Route.UNIVERSAL_ITEMS.includes(mat))
      .forEach(([mat, val]: [string, number]) => materialList.add(+mat, val));
  }

  public addRegions(locations: Locations[]) {
    for (const location of locations) {
      if (!this.regions.some((region) => region && region.name === location)) {
        const region = new Region(location);

        this.regions.push(region);
        this.materials.addFromList(region.materials.list);
      }
    }
  }

  public generate() {
    return [];
  }
}
