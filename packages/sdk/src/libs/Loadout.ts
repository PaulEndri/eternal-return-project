import { MaterialList } from '../libs/MaterialList';
import { Item } from '../libs/Item';
import {
  Armors,
  Locations,
  StarterWeaponsByLookup,
  Weapons,
  Items,
  WeaponsLookup
} from '../constants';
import { CodedMaterialList } from '../interfaces';
import { LoadoutKeys } from '../constants/LoadoutKeys';
import { BasicLoadout } from '../types/loadout';
import { Location } from './Location';

export class Loadout {
  private _totalMaterials: MaterialList;
  private _totalCount: number;
  private _regions: Record<Partial<Locations>, Location>;

  static GenerateLoadout(data: BasicLoadout) {
    return new Loadout(
      data.Chest ? new Item(data.Chest) : null,
      data.Arm ? new Item(data.Arm) : null,
      data.Leg ? new Item(data.Leg) : null,
      data.Head ? new Item(data.Head) : null,
      data.Weapon ? new Item(data.Weapon) : null,
      data.Accessory ? new Item(data.Accessory) : null
    );
  }

  constructor(
    readonly Chest: Item<Armors.Chest, Armors.Chest>,
    readonly Arm: Item<Armors.Arm, Armors.Arm>,
    readonly Leg: Item<Armors.Leg, Armors.Leg>,
    readonly Head: Item<Armors.Head, Armors.Head>,
    readonly Weapon: Item<WeaponsLookup, Weapons>,
    readonly Accessory: Item<Armors.Accessory, Armors.Accessory>
  ) {
    this.generateMaterialList();
  }

  private generateMaterialList() {
    const totalMaterials = new MaterialList();

    if (this.starterItem) {
      totalMaterials.add(this.starterItem, 1);
    }

    const itemMaterials = this.items
      .filter((v) => v)
      .map((item) => {
        return item.materials;
      });

    totalMaterials.addFromLists(itemMaterials);

    this._totalMaterials = totalMaterials;
  }

  private clearInternals() {
    this._totalMaterials = null;
    this._totalCount = null;
    this._regions = null;
  }

  public get starterItem() {
    return this.Weapon ? StarterWeaponsByLookup[this.Weapon.apiType] : null;
  }

  public get items() {
    return [
      this.Chest,
      this.Arm,
      this.Leg,
      this.Weapon,
      this.Head,
      this.Accessory
    ];
  }

  public get materials(): CodedMaterialList {
    return this._totalMaterials.list;
  }

  public get totalMaterials(): number {
    if (!this._totalCount) {
      this._totalCount = Object.values(this.materials).reduce(
        (total: number, current: number) => total + current,
        0
      ) as number;
    }

    return this._totalCount;
  }

  public get regions() {
    if (!this._regions) {
      const materials = this.materials;
      const regions: Record<Partial<Locations>, Location> = {} as any;
      const excludedMats: number[] = [Items.Stone, Items.Leather, Items.Branch];
      Object.keys(materials)
        .filter((mat) => !excludedMats.includes(+mat))
        .forEach((mat) => {
          const materialName = Items[+mat];
          const material = Item.Generate(materialName);

          Object.keys(material.locations).forEach((location) => {
            if (!regions[location]) {
              regions[location] = new Location(location);
            }
          });
        });

      this._regions = regions;

      return regions;
    }

    return this._regions;
  }

  public getWeights(weights = {}) {
    const materialWeights = new MaterialList();

    this.items
      .filter((v) => v)
      .forEach((item) => {
        const itemWeight = weights[item.clientMetaData.category] || 1;

        Object.keys(item.materials).forEach((id) => {
          materialWeights.set(
            +id,
            Math.max(materialWeights.get(+id) || itemWeight)
          );
        });
      });

    return materialWeights;
  }

  public setSlot(slot: LoadoutKeys, item: Item, immutable = true) {
    if (!slot) {
      throw new Error('No Slot Selected');
    }

    this.clearInternals();

    if (immutable) {
      const newLoadout = {
        Chest: this.Chest,
        Head: this.Head,
        Leg: this.Leg,
        Arm: this.Arm,
        Accessory: this.Accessory,
        Weapon: this.Weapon,
        [slot]: item
      };

      return new Loadout(
        newLoadout.Chest,
        newLoadout.Arm,
        newLoadout.Leg,
        newLoadout.Head,
        newLoadout.Weapon,
        newLoadout.Accessory
      );
    } else {
      throw new Error('Unsupported Action: Non immutable loadout modification');
    }
  }
  // public get weightedRegions(): Record<LocationsEnum, IWeightedLocation> {
  // 	const regions = this.regions;

  // 	if (!this._weightedRegions) {
  // 		const weightedRegions = Object.fromEntries(
  // 			Object.entries(regions).map(([ regionName, region ]) => {
  // 				const materialList = new MaterialList();
  // 				const regionMaterials = Object.entries(region.materials).filter(
  // 					([ materialName ]) => this.materials[materialName] > 0
  // 				);
  // 				const baseRegionCount = regionMaterials.reduce(
  // 					(previous: number, [ material, value ]) => {
  // 						materialList.add(material, +value.quantity);

  // 						return previous + this.getRegionItemWeight(material, +value.quantity);
  // 					},
  // 					0
  // 				);

  // 				const byProductsBuilt = Object.entries(this.byProducts)
  // 					.filter(([ name ]) => {
  // 						const item = new Item(name);

  // 						return item.canComplete(materialList.list);
  // 					})
  // 					.concat(
  // 						this.checkCompletedItems(materialList.list).map((item) => [
  // 							item.name,
  // 							item
  // 						])
  // 					);

  // 				return [
  // 					regionName as LocationsEnum,
  // 					{
  // 						name: regionName,
  // 						byProductsBuilt: Object.fromEntries(byProductsBuilt),
  // 						value: this.getRegionWeight(
  // 							baseRegionCount,
  // 							byProductsBuilt.length,
  // 							region.teleport
  // 						),
  // 						materials: Object.fromEntries(regionMaterials),
  // 						connections: region.connections,
  // 						teleport: region.teleport,
  // 						simplifiedMaterials: regionMaterials.map(([ name, drop ]) => [
  // 							name,
  // 							drop.quantity
  // 						])
  // 					} as IWeightedLocation
  // 				];
  // 			})
  // 		);

  // 		this._weightedRegions = weightedRegions as Record<LocationsEnum, IWeightedLocation>;
  // 	}

  // 	return this._weightedRegions;
  // }

  public checkCompletedItems(materials: CodedMaterialList) {
    const localList = { ...materials };

    if (this.starterItem) {
      localList[this.starterItem] = 1;
    }

    return this.items
      .filter((item) => item)
      .filter((item) => item.canComplete(localList));
  }
}
