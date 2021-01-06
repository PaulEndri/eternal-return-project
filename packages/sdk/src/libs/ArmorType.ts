import { Armors } from 'erbs-data';
import { IElement } from '../interfaces';
import { IArmorType } from '../interfaces/IArmorType';
import { Entity } from './Entity';
import { Item } from './Item';

const ArmorTypesArray = Object.values(Armors);

export class ArmorType extends Entity implements IArmorType {
  static SOURCES = Armors;
  static SOURCES_ARRAY = ArmorTypesArray;

  public name: string;
  public items: IElement<any>[];
  public apiMetaData: { type: string; name: string; category: string };

  private loadedArmors;

  public loadArmors() {
    if (!this.loadedArmors) {
      this.loadedArmors = this.items.map(({ id }) => new Item(id));
    }

    return this.loadedArmors;
  }
}
