/** 
 * @packageDocumentation
 * @internal
 **/
import { IWikiCache } from '../interfaces/IWikiCache';

export class WikiCache implements IWikiCache {
	private _cache = {};
	private count = 0;

	public get<T = any>(key: string) {
		let value = this._cache[key];

		if (typeof value === 'object') {
			value = { ...value };
		}

		return Promise.resolve(value as T);
	}

	public set<T = any>(key: string, value: T) {
		this._cache[key] = value;

		this.count = value !== null ? this.count + 1 : this.count - 1;

		return Promise.resolve();
	}

	public async massInsert<T = any>(data: Record<string, T>) {
		await Promise.all(
			Object.entries(data).map(([ key, val ]: [string, T]) => this.set(key, val))
		);
	}

	public getAll<T = any>() {
		return Promise.resolve(this._cache as Record<string, T>);
	}

	public getCount() {
		return this.count;
	}
}
