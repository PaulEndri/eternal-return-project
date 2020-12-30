import { Items } from '../constants';
import { IMaterialList } from '../interfaces/IMaterialList';

export class MaterialList {
	public list: IMaterialList;

	public constructor() {
		this.list = {} as any;
	}

	public set(value: Items, number = 0) {
		this.list[value] = number;
	}

	public add(value: Items, number = 1) {
		if (!this.list[value]) {
			this.list[value] = 0;
		}

		this.list[value] = this.list[value] + number;

		return this.list[value];
	}

	public subtract(value: Items, number = 1) {
		if (!this.list[value]) {
			this.list[value] = 0;
		} else {
			this.list[value] = this.list[value] - number;
		}

		return this.list[value];
	}

	public addFromList(list: IMaterialList) {
		Object.entries(list).forEach(([ key, val ]: [Items, number]) => this.add(key, val));
	}

	public addFromLists(lists: IMaterialList[]) {
		lists.forEach(this.addFromList);
	}

	public clone() {
		const _list = new MaterialList();

		_list.list = { ...this.list };

		return _list;
	}
}
