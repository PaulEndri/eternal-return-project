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

* [cache](_scrapers_item_.itemscraper.md#cache)
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
* [getWeapons](_scrapers_item_.itemscraper.md#getweapons)

## Constructors

### constructor

\+ **new ItemScraper**(`itemCache?`: IWikiCache, `locationCache?`: IWikiCache, `animalCache?`: IWikiCache, `characterCache?`: IWikiCache): [ItemScraper](_scrapers_item_.itemscraper.md)

*Overrides [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

#### Parameters:

Name | Type |
------ | ------ |
`itemCache?` | IWikiCache |
`locationCache?` | IWikiCache |
`animalCache?` | IWikiCache |
`characterCache?` | IWikiCache |

**Returns:** [ItemScraper](_scrapers_item_.itemscraper.md)

## Properties

### cache

•  **cache**: IWikiCache

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[cache](_scrapers_core_.corescraper.md#cache)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[BASE_URL](_scrapers_core_.corescraper.md#base_url)*

## Methods

### getAll

▸ **getAll**(`complete?`: boolean): Promise<{ armors: {} ; consumables: { beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] } ; materials: { [k:string]: T;  } ; weapons: {}  }\>

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each item  |

**Returns:** Promise<{ armors: {} ; consumables: { beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] } ; materials: { [k:string]: T;  } ; weapons: {}  }\>

___

### getArmors

▸ **getArmors**(`complete?`: boolean): Promise<{}\>

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each armor  |

**Returns:** Promise<{}\>

___

### getConsumables

▸ **getConsumables**(`complete?`: boolean): Promise<{ beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] }\>

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each consumable item  |

**Returns:** Promise<{ beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] }\>

___

### getDroppedFromAnimals

▸ **getDroppedFromAnimals**(`item`: IElement): Promise<Record<string, IElement\>\>

#### Parameters:

Name | Type |
------ | ------ |
`item` | IElement |

**Returns:** Promise<Record<string, IElement\>\>

___

### getFoundLocations

▸ **getFoundLocations**(`item`: IElement): Promise<Record<string, IElement\>\>

#### Parameters:

Name | Type |
------ | ------ |
`item` | IElement |

**Returns:** Promise<Record<string, IElement\>\>

___

### getItem

▸ **getItem**(`item`: IElement): Promise<any\>

#### Parameters:

Name | Type |
------ | ------ |
`item` | IElement |

**Returns:** Promise<any\>

___

### getMaterials

▸ **getMaterials**(`complete?`: boolean): Promise<{ [k:string]: T;  }\>

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each material  |

**Returns:** Promise<{ [k:string]: T;  }\>

___

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[getPage](_scrapers_core_.corescraper.md#getpage)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>

___

### getWeapons

▸ **getWeapons**(`complete?`: boolean): Promise<{}\>

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each weapon  |

**Returns:** Promise<{}\>
