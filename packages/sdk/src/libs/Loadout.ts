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
import { Route } from './Route';

export class Loadout {
  private _totalMaterials: MaterialList;
  private _totalCount: number;
  private _regions: Record<Partial<Locations>, Location>;
  private _inFlightItems: Item[];

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

  // private clearInternals() {
  //   this._totalMaterials = null;
  //   this._totalCount = null;
  //   this._regions = null;
  // }

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
    ].filter((i) => i);
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
      const excludedMats: number[] = Route.UNIVERSAL_ITEMS;
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

  public getInFlightItems() {
    if (!this._inFlightItems) {
      this.items.forEach((item) => item.loadAll());
      const buildFroms: Item[] = this.items
        .map((item) => item.buildsFrom)
        .flat() as any;

      this._inFlightItems = buildFroms.filter((item) => {
        return item.buildsFrom && item.buildsFrom.length > 0;
      });
    }

    return this._inFlightItems;
  }

  public checkCompletedItems(materials: CodedMaterialList) {
    const localList = new MaterialList().addFromList(materials);

    if (this.starterItem) {
      localList.add(+this.starterItem, 1);
    }

    return this.items
      .filter((item) => item)
      .filter((item) => item.canComplete(localList.list));
  }

  public checkCompletedInFlightItems(materials: CodedMaterialList) {
    return this.getInFlightItems().filter((item) =>
      item.canComplete(materials)
    );
  }
}
