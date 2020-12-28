**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["api/generic"](../modules/_api_generic_.md) / GenericApi

# Class: GenericApi

## Hierarchy

* **GenericApi**

## Index

### Properties

* [BASE\_URL](_api_generic_.genericapi.md#base_url)

### Methods

* [getAllItems](_api_generic_.genericapi.md#getallitems)
* [getAllLocationItems](_api_generic_.genericapi.md#getalllocationitems)
* [getItem](_api_generic_.genericapi.md#getitem)
* [getItemsForArea](_api_generic_.genericapi.md#getitemsforarea)

### Object literals

* [ROUTES](_api_generic_.genericapi.md#routes)

## Properties

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "http://api.playeternalreturn.com"

## Methods

### getAllItems

▸ **getAllItems**(`full?`: boolean, `force?`: boolean): Promise<any\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`full` | boolean | false |
`force` | boolean | false |

**Returns:** Promise<any\>

___

### getAllLocationItems

▸ **getAllLocationItems**(): Promise<Record<string, any\>\>

**Returns:** Promise<Record<string, any\>\>

___

### getItem

▸ **getItem**(`itemName`: string): Promise<any\>

#### Parameters:

Name | Type |
------ | ------ |
`itemName` | string |

**Returns:** Promise<any\>

___

### getItemsForArea

▸ **getItemsForArea**(`areaName`: string): Promise<any\>

#### Parameters:

Name | Type |
------ | ------ |
`areaName` | string |

**Returns:** Promise<any\>

## Object literals

### ROUTES

▪ `Static` **ROUTES**: object

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`ALL_ITEMS` | string | "/aesop/item/all" |
`LOCATION_ITEMS` | string | "/aesop/area?areaName={areaName}" |
