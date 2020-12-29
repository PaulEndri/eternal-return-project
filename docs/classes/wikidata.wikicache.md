**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / WikiCache

# Class: WikiCache

## Hierarchy

* **WikiCache**

## Implements

* IWikiCache

## Index

### Methods

* [get](wikidata.wikicache.md#get)
* [getAll](wikidata.wikicache.md#getall)
* [getCount](wikidata.wikicache.md#getcount)
* [massInsert](wikidata.wikicache.md#massinsert)
* [set](wikidata.wikicache.md#set)

## Methods

### get

▸ **get**<T\>(`key`: string): Promise<T\>

*Defined in [packages/wikidata/src/utils/wikiCache.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/utils/wikiCache.ts#L11)*

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

*Defined in [packages/wikidata/src/utils/wikiCache.ts:35](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/utils/wikiCache.ts#L35)*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

**Returns:** Promise<Record<string, T\>\>

___

### getCount

▸ **getCount**(): number

*Defined in [packages/wikidata/src/utils/wikiCache.ts:39](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/utils/wikiCache.ts#L39)*

**Returns:** number

___

### massInsert

▸ **massInsert**<T\>(`data`: Record<string, T\>): Promise<void\>

*Defined in [packages/wikidata/src/utils/wikiCache.ts:29](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/utils/wikiCache.ts#L29)*

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

*Defined in [packages/wikidata/src/utils/wikiCache.ts:21](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/utils/wikiCache.ts#L21)*

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
