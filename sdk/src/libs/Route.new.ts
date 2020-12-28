import { Locations, Materials, TreeOfLifeLocations, Bats } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { ILocation, IWeightedLocation } from '../interfaces/ILocation';
import { Item } from './Item';
import { Loadout } from './Loadout';
import { MaterialList } from './MaterialList';
import { getLocationCombinations } from '../utils/getLocationCombinations';
import { Region } from './Region';

export class Route {
	static MAXIMUM_LOCATIONS = WEIGHTS.MAXIMUM_LOCATIONS;
	static MINIMUM_ITEM_THRESHOLD = WEIGHTS.MINIMUM_ITEM_THRESHOLD;
	static SHORT_ITEM_THRESHOLD = WEIGHTS.SHORT_ITEM_THRESHOLD;
	static UNIVERSAL_ITEMS: string[] = [
		Materials.Stone,
		Materials.Leather,
		Materials['VF Blood Sample'],
		Materials.Meteorite,
		Materials.Mithril,
		Bats.Branch
	];
	private materials = new MaterialList();
	private regions: Region[] = [];

	constructor(
		private loadout: Loadout,
		private weights?,
		private desiredStartingLocation?: Locations
	) {
		this.addMaterialsFromLoadout(this.materials, loadout);
	}

	public addMaterialsFromLoadout(materialList: MaterialList, loadout: Loadout) {
		this.materials.add(loadout.starterItem, 1);

		Object.entries(loadout.materials)
			.filter(([ mat ]) => Route.UNIVERSAL_ITEMS.includes(mat))
			.forEach(([ mat, val ]) => materialList.add(mat, val));
	}

	public addRegions(locations: Locations[]) {
		for (const location of locations) {
			if (!this.regions.some((region) => region && region.name === location)) {
				const region = new Region(location);

				this.regions.push(region);
				this.materials.addFromRegion(region);
			}
		}
	}

	public generate() {
		return [];
	}
}
