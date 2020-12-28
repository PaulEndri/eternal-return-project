**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["utils/wikiCache"](../modules/_utils_wikicache_.md) / WikICache

# Class: WikICache

## Hierarchy

* **WikICache**

## Implements

* IWikiCache

## Index

### Methods

* [get](_utils_wikicache_.wikicache.md#get)
* [getAll](_utils_wikicache_.wikicache.md#getall)
* [getCount](_utils_wikicache_.wikicache.md#getcount)
* [massInsert](_utils_wikicache_.wikicache.md#massinsert)
* [set](_utils_wikicache_.wikicache.md#set)

## Methods

### get

▸ **get**<T\>(`key`: string): Promise<T\>

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

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

**Returns:** Promise<Record<string, T\>\>

___

### getCount

▸ **getCount**(): number

**Returns:** number

___

### massInsert

▸ **massInsert**<T\>(`data`: Record<string, T\>): Promise<void\>

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
