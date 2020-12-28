**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["api/generic"](../modules/_api_generic_.md) / GenericApi

# Class: GenericApi

## Hierarchy

* **GenericApi**

## Index

### Properties

* [itemCache](_api_generic_.genericapi.md#itemcache)
* [locationCache](_api_generic_.genericapi.md#locationcache)
* [BASE\_URL](_api_generic_.genericapi.md#base_url)

### Methods

* [getAllItems](_api_generic_.genericapi.md#getallitems)
* [getAllLocationItems](_api_generic_.genericapi.md#getalllocationitems)
* [getAllRequirements](_api_generic_.genericapi.md#getallrequirements)
* [getItem](_api_generic_.genericapi.md#getitem)
* [getItemsForArea](_api_generic_.genericapi.md#getitemsforarea)

### Object literals

* [ROUTES](_api_generic_.genericapi.md#routes)

## Properties

### itemCache

• `Private` **itemCache**: [WikICache](_utils_wikicache_.wikicache.md) = new WikICache()

*Defined in src/api/generic.ts:13*

___

### locationCache

• `Private` **locationCache**: [WikICache](_utils_wikicache_.wikicache.md) = new WikICache()

*Defined in src/api/generic.ts:14*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "http://api.playeternalreturn.com"

*Defined in src/api/generic.ts:7*

## Methods

### getAllItems

▸ **getAllItems**(`full?`: boolean, `force?`: boolean): Promise<any\>

*Defined in src/api/generic.ts:43*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`full` | boolean | false |
`force` | boolean | false |

**Returns:** Promise<any\>

___

### getAllLocationItems

▸ **getAllLocationItems**(): Promise<Record<string, any\>\>

*Defined in src/api/generic.ts:149*

**Returns:** Promise<Record<string, any\>\>

___

### getAllRequirements

▸ `Private`**getAllRequirements**(`needles`: string[], `cache`: Record<string, [IGenericItem](../interfaces/_interfaces_igenericitem_.igenericitem.md)\>, `results?`: {}): object

*Defined in src/api/generic.ts:16*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`needles` | string[] | - |
`cache` | Record<string, [IGenericItem](../interfaces/_interfaces_igenericitem_.igenericitem.md)\> | - |
`results` | {} | {} |

**Returns:** object

___

### getItem

▸ **getItem**(`itemName`: string): Promise<any\>

*Defined in src/api/generic.ts:143*

#### Parameters:

Name | Type |
------ | ------ |
`itemName` | string |

**Returns:** Promise<any\>

___

### getItemsForArea

▸ **getItemsForArea**(`areaName`: string): Promise<any\>

*Defined in src/api/generic.ts:122*

#### Parameters:

Name | Type |
------ | ------ |
`areaName` | string |

**Returns:** Promise<any\>

## Object literals

### ROUTES

▪ `Static` **ROUTES**: object

*Defined in src/api/generic.ts:8*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`ALL_ITEMS` | string | "/aesop/item/all" |
`LOCATION_ITEMS` | string | "/aesop/area?areaName={areaName}" |
