import { Locations as LocationsEnum, Items } from '../constants';
import { Locations as LocationsData } from 'erbs-data';
import { IElement, ILocation, ILocationEntity } from '../interfaces';
import { MaterialList } from './MaterialList';
import { Entity } from './Entity';

export class Region extends Entity implements ILocation {
  static SOURCES = LocationsData;
  static SOURCES_ARRAY = Object.values(LocationsData);

  public materials = new MaterialList();
  public drops: ILocationEntity[];
  public animals: ILocationEntity[];
  public teleport: boolean;
  public connections: IElement<LocationsEnum>[];
  public apiMetaData?: { type: string; code: number; name: string };
  public name: LocationsEnum;
  public id: string | number;

  private _materialCount: Record<string, number>;

  constructor(seed) {
    super(seed);

    this.drops.forEach(({ name, quantity }) => {
      this.materials.add(Items[name.replace(' ', '')], +quantity);
    });
  }

  get materialCount() {
    if (!this._materialCount) {
      const materialCount = {};

      Object.entries(this.materials).forEach(([materialName, info]) => {
        materialCount[materialName] = +info.quantity;
      });

      this._materialCount = materialCount;
    }

    return this.materialCount;
  }

  public loadConnections() {
    return this.connections.map((seed) => new Region(seed.name));
  }
}
