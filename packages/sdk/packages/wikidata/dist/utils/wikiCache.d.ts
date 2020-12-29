/**
 * @packageDocumentation
 * @internal
 **/
import { IWikiCache } from '../../src/interfaces/IWikiCache';
export declare class WikiCache implements IWikiCache {
	private _cache;
	private count;
	get<T = any>(key: string): Promise<T>;
	set<T = any>(key: string, value: T): Promise<void>;
	massInsert<T = any>(data: Record<string, T>): Promise<void>;
	getAll<T = any>(): Promise<Record<string, T>>;
	getCount(): number;
}
//# sourceMappingURL=wikiCache.d.ts.map
