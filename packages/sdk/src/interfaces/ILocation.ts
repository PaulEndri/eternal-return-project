import { Locations, Items, Animals } from '../constants';
import { MaterialList } from '../libs/MaterialList';
import { IElement } from './IElement';

export interface ILocationEntity
  extends IElement<keyof typeof Items & keyof typeof Animals> {
  quantity: number;
}

export interface IRawLocation extends IElement<keyof typeof Locations> {
  drops: ILocationEntity[];
  animals: ILocationEntity[];
  teleport: boolean;
  connections: IElement<keyof typeof Locations>[];
  apiMetaData?: {
    type: string;
    code: number;
    name: string;
  };
}

export interface ILocation extends IRawLocation {
  materials: MaterialList;
}
