**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / GenericApi

# Class: GenericApi

## Hierarchy

* **GenericApi**

## Index

### Properties

* [BASE\_URL](wikidata.genericapi.md#base_url)

### Methods

* [getAllItems](wikidata.genericapi.md#getallitems)
* [getAllLocationItems](wikidata.genericapi.md#getalllocationitems)
* [getItem](wikidata.genericapi.md#getitem)
* [getItemsForArea](wikidata.genericapi.md#getitemsforarea)

### Object literals

* [ROUTES](wikidata.genericapi.md#routes)

## Properties

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "http://api.playeternalreturn.com"

*Defined in [packages/wikidata/src/api/generic.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/api/generic.ts#L12)*

## Methods

### getAllItems

▸ **getAllItems**(`full?`: boolean, `force?`: boolean): Promise<Record<string, Item<IElement\>\>\>

*Defined in [packages/wikidata/src/api/generic.ts:54](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/api/generic.ts#L54)*

Get all items from the getAllItem route with minor processing

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`full` | boolean | false | if true will location Information |
`force` | boolean | false | if true will bypass cache  |

**Returns:** Promise<Record<string, Item<IElement\>\>\>

___

### getAllLocationItems

▸ **getAllLocationItems**(): Promise<Record<string, any\>\>

*Defined in [packages/wikidata/src/api/generic.ts:160](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/api/generic.ts#L160)*

**Returns:** Promise<Record<string, any\>\>

___

### getItem

▸ **getItem**(`itemName`: string): Promise<Item<IElement\>\>

*Defined in [packages/wikidata/src/api/generic.ts:154](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/api/generic.ts#L154)*

#### Parameters:

Name | Type |
------ | ------ |
`itemName` | string |

**Returns:** Promise<Item<IElement\>\>

___

### getItemsForArea

▸ **getItemsForArea**(`areaName`: string): Promise<Record<string, number\>\>

*Defined in [packages/wikidata/src/api/generic.ts:133](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/api/generic.ts#L133)*

#### Parameters:

Name | Type |
------ | ------ |
`areaName` | string |

**Returns:** Promise<Record<string, number\>\>

## Object literals

### ROUTES

▪ `Static` **ROUTES**: object

*Defined in [packages/wikidata/src/api/generic.ts:13](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/api/generic.ts#L13)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`ALL_ITEMS` | string | "/aesop/item/all" |
`LOCATION_ITEMS` | string | "/aesop/area?areaName={areaName}" |
