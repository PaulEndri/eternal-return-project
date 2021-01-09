import { WeaponsLookup, Characters } from '../constants';
import {
  IAbility,
  ICharacter,
  ICharacterAttribute,
  ICharacterInitialStat,
  ICharacterLevelUpStat
} from '../interfaces';
import { ErBsClient } from 'erbs-client';
import { Item } from './Item';
import { Entity } from './Entity';
import { DataCache } from './DataCache';
import { IWeaponType } from '../interfaces/IWeaponType';

export class Character extends Entity implements ICharacter {
  static CLIENT = new ErBsClient();
  static SOURCE_KEY = 'Characters';

  public background?: string;
  public attributes: ICharacterAttribute[];
  public description: string;
  public details: Record<string, string>;
  public stats: {
    initial: ICharacterInitialStat;
    perLevel: ICharacterLevelUpStat;
  };
  public abilities: Record<string, IAbility>;
  public weapons: WeaponsLookup[];
  public name: keyof typeof Characters;
  public id: string | number;

  static async GetAllFromClient() {
    return await this.CLIENT.getCharacters();
  }

  public loadWeaponOptions(full = true) {
    const weaponTypeData: IWeaponType[] = this.weapons.map((wpnLookup) =>
      Object.values<IWeaponType>(DataCache.Weapons).find(
        (wpn) => wpn.apiMetaData.name === wpnLookup
      )
    );

    if (full) {
      return weaponTypeData.map((weaponType) => {
        const weapons = weaponType.items.map(({ id }) => new Item(id));

        return {
          ...weaponType,
          weapons
        };
      });
    }

    return weaponTypeData;
  }

  public getStatsForLevel(level: number) {
    return Object.fromEntries(
      Object.entries(this.stats.initial).map(
        ([stat, initialValue]: [string, number]) => {
          let name = stat === 'criticalStrikeChance' ? 'criticalChance' : stat;
          const perLevel = this.stats.perLevel[name] || 0;
          const levelUpValues = Math.round(perLevel * level);

          return [name, initialValue + levelUpValues];
        }
      )
    );
  }
}
