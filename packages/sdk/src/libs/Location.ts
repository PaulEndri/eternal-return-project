import { Locations as LocationsEnum, Items } from '../constants';
import {
  CodedMaterialList,
  IElement,
  ILocation,
  ILocationEntity
} from '../interfaces';
import { MaterialList } from './MaterialList';
import { Entity } from './Entity';

type LocationWeight = {
  value: number;
  total: {
    available: number;
    needed: number;
  };
  weightedMaterials: Record<number, number>;
};

export class Location extends Entity implements ILocation {
  static SOURCE_KEY = 'Locations';

  public materials = new MaterialList();
  public drops: ILocationEntity[];
  public animals: ILocationEntity[];
  public teleport: boolean;
  public connections: IElement<LocationsEnum>[];
  public apiMetaData?: { type: string; code: number; name: string };
  public name: LocationsEnum;
  public id: string | number;

  public weight: LocationWeight;

  constructor(seed) {
    super(seed);

    this.drops.forEach(({ name, quantity }) => {
      this.materials.add(Items[name.replace(' ', '')], +quantity);
    });
  }

  public weigh(list: CodedMaterialList, materialList: MaterialList) {
    // Weight dict. of IDs to quantity needed / quantity available
    const results: Record<number, number> = {};
    // count of all items available in the region
    let totalMaterials = 0;
    // total count of all items needed from the region
    let searchedForMaterials = 0;
    // total value of found materials
    let materialValue = 0;

    Object.entries(this.materials.list).forEach(([id, value]) => {
      let weight = 1;

      if (materialList && materialList.get(+id)) {
        weight = materialList.get(+id);
      }

      if (list[+id]) {
        searchedForMaterials += value;
        results[+id] = (list[id] / value) * weight;

        materialValue += results[+id];
      }

      totalMaterials += value;
    });

    this.weight = {
      value: 1 / (materialValue * (searchedForMaterials / totalMaterials)),
      total: {
        available: totalMaterials,
        needed: searchedForMaterials
      },
      weightedMaterials: results
    };
  }
}
