import { Animals } from 'erbs-data';
import { Locations } from '../constants';
import { IAnimal, IAnimalDrop, IAnimalStats } from '../interfaces';
import { Entity } from './Entity';

const AnimalTypesArray = Object.values(Animals);

export class Animal extends Entity implements IAnimal {
  static SOURCES = Animals;
  static SOURCES_ARRAY = AnimalTypesArray;

  public name: string;
  public locations: Record<Partial<Locations>, number>;
  public items: IAnimalDrop[];
  public stats: IAnimalStats;
  public displayName: string;
  public apiName: string;
  public apiMetaData: {
    resource: string;
    dropGroup: number;
    grade: string;
    name: string;
    code: number;
  };
}
