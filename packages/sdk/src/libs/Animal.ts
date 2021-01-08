import { Locations } from '../constants';
import { IAnimal, IAnimalDrop, IAnimalStats } from '../interfaces';
import { Entity } from './Entity';

export class Animal extends Entity implements IAnimal {
  static SOURCE_KEY = 'Animals';

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
