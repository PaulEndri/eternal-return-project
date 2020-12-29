**[ER:BS Api/Scraper](../README.md)**

> [Globals](../globals.md) / [api](../modules/api.md) / GenericApi

# Class: GenericApi

**`remark`** Generic Api Class

## Hierarchy

* **GenericApi**

## Index

### Properties

* [BASE\_URL](api.genericapi.md#base_url)

### Methods

* [getAllItems](api.genericapi.md#getallitems)
* [getAllLocationItems](api.genericapi.md#getalllocationitems)
* [getItem](api.genericapi.md#getitem)
* [getItemsForArea](api.genericapi.md#getitemsforarea)

### Object literals

* [ROUTES](api.genericapi.md#routes)

## Properties

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "http://api.playeternalreturn.com"

*Defined in [src/api/generic.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/api/generic.ts#L12)*

## Methods

### getAllItems

▸ **getAllItems**(`full?`: boolean, `force?`: boolean): Promise<Record<string, Item<IElement\>\>\>

*Defined in [src/api/generic.ts:54](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/api/generic.ts#L54)*

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

*Defined in [src/api/generic.ts:160](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/api/generic.ts#L160)*

**Returns:** Promise<Record<string, any\>\>

___

### getItem

▸ **getItem**(`itemName`: string): Promise<Item<IElement\>\>

*Defined in [src/api/generic.ts:154](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/api/generic.ts#L154)*

#### Parameters:

Name | Type |
------ | ------ |
`itemName` | string |

**Returns:** Promise<Item<IElement\>\>

___

### getItemsForArea

▸ **getItemsForArea**(`areaName`: string): Promise<Record<string, number\>\>

*Defined in [src/api/generic.ts:133](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/api/generic.ts#L133)*

#### Parameters:

Name | Type |
------ | ------ |
`areaName` | string |

**Returns:** Promise<Record<string, number\>\>

## Object literals

### ROUTES

▪ `Static` **ROUTES**: object

*Defined in [src/api/generic.ts:13](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/api/generic.ts#L13)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`ALL_ITEMS` | string | "/aesop/item/all" |
`LOCATION_ITEMS` | string | "/aesop/area?areaName={areaName}" |
