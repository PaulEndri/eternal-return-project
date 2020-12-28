**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["scrapers/item"](../modules/_scrapers_item_.md) / ItemScraper

# Class: ItemScraper

## Hierarchy

* [CoreScraper](_scrapers_core_.corescraper.md)

  ↳ **ItemScraper**

## Index

### Constructors

* [constructor](_scrapers_item_.itemscraper.md#constructor)

### Properties

* [animalCache](_scrapers_item_.itemscraper.md#animalcache)
* [cache](_scrapers_item_.itemscraper.md#cache)
* [characterCache](_scrapers_item_.itemscraper.md#charactercache)
* [locationCache](_scrapers_item_.itemscraper.md#locationcache)
* [BASE\_URL](_scrapers_item_.itemscraper.md#base_url)

### Methods

* [getAll](_scrapers_item_.itemscraper.md#getall)
* [getArmors](_scrapers_item_.itemscraper.md#getarmors)
* [getConsumables](_scrapers_item_.itemscraper.md#getconsumables)
* [getDroppedFromAnimals](_scrapers_item_.itemscraper.md#getdroppedfromanimals)
* [getFoundLocations](_scrapers_item_.itemscraper.md#getfoundlocations)
* [getItem](_scrapers_item_.itemscraper.md#getitem)
* [getMaterials](_scrapers_item_.itemscraper.md#getmaterials)
* [getPage](_scrapers_item_.itemscraper.md#getpage)
* [getSimpleElement](_scrapers_item_.itemscraper.md#getsimpleelement)
* [getWeapons](_scrapers_item_.itemscraper.md#getweapons)
* [injectDetailsToItems](_scrapers_item_.itemscraper.md#injectdetailstoitems)

## Constructors

### constructor

\+ **new ItemScraper**(`itemCache?`: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md), `locationCache?`: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md), `animalCache?`: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md), `characterCache?`: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)): [ItemScraper](_scrapers_item_.itemscraper.md)

*Overrides [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

*Defined in [src/scrapers/item.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`itemCache?` | [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md) |
`locationCache?` | [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md) |
`animalCache?` | [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md) |
`characterCache?` | [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md) |

**Returns:** [ItemScraper](_scrapers_item_.itemscraper.md)

## Properties

### animalCache

• `Private` `Optional` **animalCache**: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

*Defined in [src/scrapers/item.ts:16](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L16)*

___

### cache

•  **cache**: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[cache](_scrapers_core_.corescraper.md#cache)*

*Defined in [src/scrapers/core.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L8)*

___

### characterCache

• `Private` `Optional` **characterCache**: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

*Defined in [src/scrapers/item.ts:17](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L17)*

___

### locationCache

• `Private` `Optional` **locationCache**: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

*Defined in [src/scrapers/item.ts:15](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L15)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[BASE_URL](_scrapers_core_.corescraper.md#base_url)*

*Defined in [src/scrapers/core.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L7)*

## Methods

### getAll

▸ **getAll**(`complete?`: boolean): Promise<{ armors: {} ; consumables: { beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] } ; materials: { [k:string]: T;  } ; weapons: {}  }\>

*Defined in [src/scrapers/item.ts:285](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L285)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each item  |

**Returns:** Promise<{ armors: {} ; consumables: { beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] } ; materials: { [k:string]: T;  } ; weapons: {}  }\>

___

### getArmors

▸ **getArmors**(`complete?`: boolean): Promise<{}\>

*Defined in [src/scrapers/item.ts:204](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L204)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each armor  |

**Returns:** Promise<{}\>

___

### getConsumables

▸ **getConsumables**(`complete?`: boolean): Promise<{ beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] }\>

*Defined in [src/scrapers/item.ts:234](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L234)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each consumable item  |

**Returns:** Promise<{ beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] }\>

___

### getDroppedFromAnimals

▸ **getDroppedFromAnimals**(`item`: [IElement](../interfaces/_interfaces_ielement_.ielement.md)): Promise<Record<string, [IElement](../interfaces/_interfaces_ielement_.ielement.md)\>\>

*Defined in [src/scrapers/item.ts:32](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`item` | [IElement](../interfaces/_interfaces_ielement_.ielement.md) |

**Returns:** Promise<Record<string, [IElement](../interfaces/_interfaces_ielement_.ielement.md)\>\>

___

### getFoundLocations

▸ **getFoundLocations**(`item`: [IElement](../interfaces/_interfaces_ielement_.ielement.md)): Promise<Record<string, [IElement](../interfaces/_interfaces_ielement_.ielement.md)\>\>

*Defined in [src/scrapers/item.ts:46](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`item` | [IElement](../interfaces/_interfaces_ielement_.ielement.md) |

**Returns:** Promise<Record<string, [IElement](../interfaces/_interfaces_ielement_.ielement.md)\>\>

___

### getItem

▸ **getItem**(`item`: [IElement](../interfaces/_interfaces_ielement_.ielement.md)): Promise<any\>

*Defined in [src/scrapers/item.ts:63](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L63)*

#### Parameters:

Name | Type |
------ | ------ |
`item` | [IElement](../interfaces/_interfaces_ielement_.ielement.md) |

**Returns:** Promise<any\>

___

### getMaterials

▸ **getMaterials**(`complete?`: boolean): Promise<{ [k:string]: T;  }\>

*Defined in [src/scrapers/item.ts:267](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L267)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each material  |

**Returns:** Promise<{ [k:string]: T;  }\>

___

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[getPage](_scrapers_core_.corescraper.md#getpage)*

*Defined in [src/scrapers/core.ts:30](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L30)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>

___

### getSimpleElement

▸ `Protected`**getSimpleElement**(`$`: any, `el`: any, `nameOnly?`: boolean): any

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[getSimpleElement](_scrapers_core_.corescraper.md#getsimpleelement)*

*Defined in [src/scrapers/core.ts:18](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`$` | any | - |
`el` | any | - |
`nameOnly` | boolean | false |

**Returns:** any

___

### getWeapons

▸ **getWeapons**(`complete?`: boolean): Promise<{}\>

*Defined in [src/scrapers/item.ts:142](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L142)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each weapon  |

**Returns:** Promise<{}\>

___

### injectDetailsToItems

▸ `Private`**injectDetailsToItems**(`items`: Array<[IElement](../interfaces/_interfaces_ielement_.ielement.md) \| Array<any\>\>): Promise<void\>

*Defined in [src/scrapers/item.ts:22](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/item.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`items` | Array<[IElement](../interfaces/_interfaces_ielement_.ielement.md) \| Array<any\>\> |

**Returns:** Promise<void\>
