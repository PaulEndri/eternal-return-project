import { CodedMaterialList } from '../interfaces/IMaterialList';
import { DataCache } from './DataCache';
import { Item } from './Item';

export class MaterialList {
  public list: CodedMaterialList;

  public constructor() {
    this.list = {} as any;
  }

  public get(value: number) {
    return this.list[value];
  }

  public set(value: number, number = 0) {
    this.list[value] = number;
  }

  public add(value: number, number = 1) {
    if (!this.list[+value]) {
      this.list[+value] = 0;
    }

    this.list[+value] = this.list[+value] + number;

    return this.list[+value];
  }

  public subtract(value: number, number = 1) {
    if (!this.list[+value]) {
      this.list[+value] = 0;
    } else {
      this.list[+value] = this.list[+value] - number;
    }

    return this.list[+value];
  }

  public subtractFromList(list: CodedMaterialList) {
    Object.entries(list).forEach(([key, val]: [any, number]) =>
      this.subtract(key, val)
    );

    return this;
  }

  public addFromList(list: CodedMaterialList) {
    Object.entries(list).forEach(([key, val]: [any, number]) =>
      this.add(+key, +val)
    );

    return this;
  }

  public addFromLists(lists: CodedMaterialList[]) {
    lists.forEach((list) => this.addFromList(list));

    return this;
  }

  public clone() {
    const _list = new MaterialList();

    _list.list = { ...this.list };

    return _list;
  }

  public getAllCraftableItems(idsOnly = false): Item[] {
    let results = [];
    let changed = true;
    const tmpList = this.clone();

    while (changed === true) {
      const originalLength = results.length;

      results = Object.values(DataCache.Items).filter(
        ({ buildsFrom }) =>
          buildsFrom &&
          buildsFrom.length > 0 &&
          buildsFrom.every(({ id }) => tmpList.list[id])
      );
      results.forEach(({ id }) => tmpList.add(id, 4));

      changed = originalLength !== results.length;
    }

    if (idsOnly) {
      return results.map(({ id }) => id);
    }

    return results.map(({ id }) => new Item(id));
  }
}
