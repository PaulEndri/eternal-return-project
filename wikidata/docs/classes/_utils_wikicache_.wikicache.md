**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["utils/wikiCache"](../modules/_utils_wikicache_.md) / WikICache

# Class: WikICache

## Hierarchy

* **WikICache**

## Implements

* [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

## Index

### Properties

* [\_cache](_utils_wikicache_.wikicache.md#_cache)
* [count](_utils_wikicache_.wikicache.md#count)

### Methods

* [get](_utils_wikicache_.wikicache.md#get)
* [getAll](_utils_wikicache_.wikicache.md#getall)
* [getCount](_utils_wikicache_.wikicache.md#getcount)
* [massInsert](_utils_wikicache_.wikicache.md#massinsert)
* [set](_utils_wikicache_.wikicache.md#set)

## Properties

### \_cache

• `Private` **\_cache**: {}

*Defined in src/utils/wikiCache.ts:4*

___

### count

• `Private` **count**: number = 0

*Defined in src/utils/wikiCache.ts:5*

## Methods

### get

▸ **get**<T\>(`key`: string): Promise<T\>

*Defined in src/utils/wikiCache.ts:7*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** Promise<T\>

___

### getAll

▸ **getAll**<T\>(): Promise<Record<string, T\>\>

*Defined in src/utils/wikiCache.ts:31*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

**Returns:** Promise<Record<string, T\>\>

___

### getCount

▸ **getCount**(): number

*Defined in src/utils/wikiCache.ts:35*

**Returns:** number

___

### massInsert

▸ **massInsert**<T\>(`data`: Record<string, T\>): Promise<void\>

*Defined in src/utils/wikiCache.ts:25*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

#### Parameters:

Name | Type |
------ | ------ |
`data` | Record<string, T\> |

**Returns:** Promise<void\>

___

### set

▸ **set**<T\>(`key`: string, `value`: T): Promise<void\>

*Defined in src/utils/wikiCache.ts:17*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`value` | T |

**Returns:** Promise<void\>
