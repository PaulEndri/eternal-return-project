import { IElement } from '../interfaces';
import { IArmorType } from '../interfaces/IArmorType';
import { Entity } from './Entity';
import { Item } from './Item';

export class ArmorType extends Entity implements IArmorType {
  static SOURCE_KEY = 'Armors';

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
