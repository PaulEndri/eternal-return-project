export interface IWikiCache {
    get: <T = any>(key: string) => Promise<T>;
    set: <T = any>(key: string, value: T) => Promise<void>;
    massInsert: <T = any>(data: Record<string, T>) => Promise<void>;
    getAll: <T = any>() => Promise<Record<string, T>>;
}
//# sourceMappingURL=IWikiCache.d.ts.map