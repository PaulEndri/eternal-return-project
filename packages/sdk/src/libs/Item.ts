import {
  Animals,
  Locations,
  CategoriesLookup,
  Items as ItemsEnum
} from '../constants';
import { IElement } from '../interfaces/IElement';
import { IItem, IItemStats } from '../interfaces/IItem';
import {
  CodedMaterialList,
  NamedMaterialList
} from '../interfaces/IMaterialList';
import { Entity } from './Entity';
import { DataCache } from './DataCache';

export class Item<A extends string = any, T extends string = any>
  extends Entity
  implements IItem {
  static SOURCE_KEY = 'Items';

  public rarity: string;
  public stats: IItemStats;
  public description: string;
  public maxStacks: number;
  public foundQuantity: number;
  public airSupply: boolean;
  public displayName: string;
  public collectible: number;
  public stackable: boolean;
  public requirements: NamedMaterialList;
  public buildsInto: IElement<ItemsEnum>[];
  public buildsFrom: IElement<ItemsEnum>[];
  public locations: Record<Partial<Locations>, number>;
  public droppedFrom: IElement<Animals>[];
  public id: string | number;
  public name: ItemsEnum;
  public apiMetaData: { type: string; name: string; category: string };
  public clientMetaData: { type: string; code: number; category: string };

  public category: CategoriesLookup;
  public apiType: A;
  public clientType: T;

  private _totalCount: number;

  constructor(seed) {
    super(seed);

    this.category = this.apiMetaData.category as CategoriesLookup;
    this.apiType = this.apiMetaData.type as A;
    this.clientType = this.clientMetaData.type as T;
  }

  public loadAll(loadChildren?: {
    buildsFrom?: boolean;
    buildsInto?: boolean;
  }) {
    const props = ['buildsFrom', 'buildsInto'];

    for (const prop of props) {
      const newArray = [];

      for (const element of this[prop]) {
        const item = Item.Generate(element.id) as Item;

        newArray.push(item);

        if (loadChildren[prop]) {
          item.loadAll(loadChildren);
        }
      }
    }
  }

  public get materials(): CodedMaterialList {
    if (Object.keys(this.requirements).length === 0) {
      return {
        [this.id]: 1
      } as any;
    }

    return Object.fromEntries(
      Object.entries(this.requirements).map(([name, quantity]) => {
        const lookUpName = name
          .split(' ')
          .map(([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`)
          .join('')
          .replace("'", '');

        return [DataCache.Items[lookUpName].id, quantity];
      })
    );
  }

  public get totalMaterials() {
    if (!this._totalCount) {
      this._totalCount = Object.values(this.materials).reduce(
        (total: number, current: number) => total + current,
        0
      ) as number;
    }

    return this._totalCount;
  }

  public get rarityWeight() {
    switch (this.rarity) {
      case 'Common':
        return 1;
      case 'Uncommon':
        return 2;
      case 'Rare':
        return 3;
      case 'Epic':
        return 4;
      case 'Legendary':
      case 'Legend':
        return 5;
      default:
        return 0;
    }
  }

  public canComplete(materials: CodedMaterialList) {
    return Object.entries(this.materials).every(
      ([id, value]) => materials[id] >= value
    );
  }
}
