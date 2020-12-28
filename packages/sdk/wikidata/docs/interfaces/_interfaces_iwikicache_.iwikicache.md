**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["interfaces/IWikiCache"](../modules/_interfaces_iwikicache_.md) / IWikiCache

# Interface: IWikiCache

## Hierarchy

* **IWikiCache**

## Implemented by

* [WikICache](../classes/_utils_wikicache_.wikicache.md)

## Index

### Properties

* [get](_interfaces_iwikicache_.iwikicache.md#get)
* [getAll](_interfaces_iwikicache_.iwikicache.md#getall)
* [massInsert](_interfaces_iwikicache_.iwikicache.md#massinsert)
* [set](_interfaces_iwikicache_.iwikicache.md#set)

## Properties

### get

•  **get**: <T\>(key: string) => Promise<T\>

*Defined in src/interfaces/IWikiCache.ts:2*

___

### getAll

•  **getAll**: <T\>() => Promise<Record<string, T\>\>

*Defined in src/interfaces/IWikiCache.ts:5*

___

### massInsert

•  **massInsert**: <T\>(data: Record<string, T\>) => Promise<void\>

*Defined in src/interfaces/IWikiCache.ts:4*

___

### set

•  **set**: <T\>(key: string, value: T) => Promise<void\>

*Defined in src/interfaces/IWikiCache.ts:3*
