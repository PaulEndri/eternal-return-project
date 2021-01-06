import { Weapons } from 'erbs-data';
import { IElement } from '../interfaces';
import { IWeaponType } from '../interfaces/IWeaponType';
import { Entity } from './Entity';
import { Item } from './Item';

const WeaponTypesArray = Object.values(Weapons);

export class WeaponType extends Entity implements IWeaponType {
  static SOURCES = Weapons;
  static SOURCES_ARRAY = WeaponTypesArray;

  public name: string;
  public abilityDetails: {
    name?: string;
    description: string;
    info: Record<string, string>[];
  };
  public usableBy: string[];
  public items: IElement<any>[];
  public apiMetaData: { type: string; name: string; category: 'Weapon' };

  private loadedWeapons;

  public loadWeapons() {
    if (!this.loadedWeapons) {
      this.loadedWeapons = this.items.map(({ id }) => new Item(id));
    }

    return this.loadedWeapons;
  }
}
