import { ICache } from '../interfaces/ICache';

export class Cache implements ICache {
	private _cache = {};

	public get<T = any>(key: string) {
		return Promise.resolve(this._cache[key] as T);
	}

	public set<T = any>(key: string, value: T) {
		this._cache[key] = value;

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
}
