import { IMaterialList } from "../interfaces/IMaterialList";
import { MaterialList } from "../libs/MaterialList";
import { Item } from "../libs/Item";
import {
  Armors,
  Locations,
  StarterWeaponsByLookup,
  Weapons,
  WeaponsLookup,
  Items,
} from "../constants";
import { ILocation } from "../interfaces";
import { Locations as LocationData } from "erbs-data";
import { LoadoutKeys } from "../constants/LoadoutKeys";
import { BasicLoadout } from "../types/loadout";

export class Loadout {
  private _totalMaterials: MaterialList;
  private _totalCount: number;
  private _regions: Record<Partial<Locations>, ILocation>;

  constructor(
    readonly Chest: Item<Armors.Chest, Armors.Chest>,
    readonly Arm: Item<Armors.Arm, Armors.Arm>,
    readonly Leg: Item<Armors.Leg, Armors.Leg>,
    readonly Head: Item<Armors.Head, Armors.Head>,
    readonly Weapon: Item<WeaponsLookup, Weapons>,
    readonly Accessory: Item<Armors.Accessory, Armors.Accessory>
  ) {}

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

  public get starterItem() {
    return this.Weapon ? StarterWeaponsByLookup[this.Weapon.apiType] : null;
  }

  public get items() {
    return [this.Chest, this.Arm, this.Leg, this.Head, this.Head, this.Accessory];
  }

  public get materials(): IMaterialList {
    if (!this._totalMaterials) {
      const totalMaterials = new MaterialList();

      totalMaterials.add(this.starterItem, 1);

      totalMaterials.addFromLists(
        this.items.map((item) => (item ? item.requirements : null)).filter((v) => v)
      );

      this._totalMaterials = totalMaterials;
    }

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
      const regions: Record<Partial<Locations>, ILocation> = {} as any;
      const excludedMats: string[] = [Items.Stone, Items.Leather, Items.Branch];

      Object.keys(materials)
        .filter((mat) => mat && Items[mat] && !excludedMats.includes(mat))
        .forEach((mat) => {
          const material = Items[mat];

          Object.keys(material.foundLocations).forEach((location) => {
            if (!regions[location]) {
              regions[location] = LocationData[location];
            }
          });
        });

      this._regions = regions;

      return regions;
    }

    return this._regions;
  }

  private clearInternals() {
    this._totalMaterials = null;
    this._totalCount = null;
    this._regions = null;
  }

  public setSlot(slot: LoadoutKeys, item: Item, immutable = true) {
    if (!slot) {
      throw new Error("No Slot Selected");
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
        [slot]: item,
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
      throw new Error("Unsupported Action: Non immutable loadout modification");
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

  public checkCompletedItems(materials: IMaterialList) {
    return this.items.filter((item) => item.canComplete(materials));
  }

  public getItemWeight(name: string, value) {
    return +value / this.materials[name];
  }

  public getRegionWeight(baseValue: number, byProductsCompleted: number, canTeleport: boolean) {
    return baseValue * (byProductsCompleted / 10 + 1) * (canTeleport ? 1.1 : 1);
  }
}
