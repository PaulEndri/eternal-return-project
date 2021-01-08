import { CodedMaterialList } from '../interfaces/IMaterialList';
import { DataCache } from './DataCache';

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
    if (!this.list[value]) {
      this.list[value] = 0;
    }

    this.list[value] = this.list[value] + number;

    return this.list[value];
  }

  public subtract(value: number, number = 1) {
    if (!this.list[value]) {
      this.list[value] = 0;
    } else {
      this.list[value] = this.list[value] - number;
    }

    return this.list[value];
  }

  public addFromList(list: CodedMaterialList) {
    Object.entries(list).forEach(([key, val]: [any, number]) =>
      this.add(key, val)
    );
  }

  public addFromLists(lists: CodedMaterialList[]) {
    lists.forEach((list) => this.addFromList(list));
  }

  public clone() {
    const _list = new MaterialList();

    _list.list = { ...this.list };

    return _list;
  }

  public getAllCraftableItems(idsOnly = false) {
    const results = Object.values(DataCache.Items).filter(({ buildsFrom }) =>
      buildsFrom.every(({ id }) => this.list[id])
    );

    if (idsOnly) {
      return results.map(({ id }) => id);
    }

    return results;
  }
}
