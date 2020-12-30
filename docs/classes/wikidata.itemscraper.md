**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / ItemScraper

# Class: ItemScraper

## Hierarchy

* [CoreScraper](wikidata.corescraper.md)

  ↳ **ItemScraper**

## Index

### Constructors

* [constructor](wikidata.itemscraper.md#constructor)

### Properties

* [cache](wikidata.itemscraper.md#cache)
* [BASE\_URL](wikidata.itemscraper.md#base_url)

### Methods

* [getAll](wikidata.itemscraper.md#getall)
* [getArmors](wikidata.itemscraper.md#getarmors)
* [getConsumables](wikidata.itemscraper.md#getconsumables)
* [getDroppedFromAnimals](wikidata.itemscraper.md#getdroppedfromanimals)
* [getFoundLocations](wikidata.itemscraper.md#getfoundlocations)
* [getItem](wikidata.itemscraper.md#getitem)
* [getMaterials](wikidata.itemscraper.md#getmaterials)
* [getPage](wikidata.itemscraper.md#getpage)
* [getWeapons](wikidata.itemscraper.md#getweapons)

## Constructors

### constructor

\+ **new ItemScraper**(`itemCache?`: IWikiCache, `locationCache?`: IWikiCache, `animalCache?`: IWikiCache): [ItemScraper](wikidata.itemscraper.md)

*Overrides [CoreScraper](wikidata.corescraper.md).[constructor](wikidata.corescraper.md#constructor)*

*Defined in [packages/wikidata/src/scrapers/item.ts:17](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`itemCache?` | IWikiCache |
`locationCache?` | IWikiCache |
`animalCache?` | IWikiCache |

**Returns:** [ItemScraper](wikidata.itemscraper.md)

## Properties

### cache

•  **cache**: IWikiCache

*Inherited from [CoreScraper](wikidata.corescraper.md).[cache](wikidata.corescraper.md#cache)*

*Defined in [packages/wikidata/src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/core.ts#L12)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [CoreScraper](wikidata.corescraper.md).[BASE_URL](wikidata.corescraper.md#base_url)*

*Defined in [packages/wikidata/src/scrapers/core.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/core.ts#L11)*

## Methods

### getAll

▸ **getAll**(`complete?`: boolean): Promise<{ armors: Record<string, string[] \| Record<string, Item<IElement\>\>\> ; consumables: { beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] } ; materials: { [k:string]: T;  } ; weapons: Record<string, { abilityDetails: any ; name: string ; usableBy: string[] ; weapons: string[] \| Record<string, Item\>  }\>  }\>

*Defined in [packages/wikidata/src/scrapers/item.ts:296](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L296)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each item  |

**Returns:** Promise<{ armors: Record<string, string[] \| Record<string, Item<IElement\>\>\> ; consumables: { beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] } ; materials: { [k:string]: T;  } ; weapons: Record<string, { abilityDetails: any ; name: string ; usableBy: string[] ; weapons: string[] \| Record<string, Item\>  }\>  }\>

___

### getArmors

▸ **getArmors**(`complete?`: boolean): Promise<Record<string, string[] \| Record<string, Item<IElement\>\>\>\>

*Defined in [packages/wikidata/src/scrapers/item.ts:215](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L215)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each armor  |

**Returns:** Promise<Record<string, string[] \| Record<string, Item<IElement\>\>\>\>

___

### getConsumables

▸ **getConsumables**(`complete?`: boolean): Promise<{ beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] }\>

*Defined in [packages/wikidata/src/scrapers/item.ts:245](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L245)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each consumable item  |

**Returns:** Promise<{ beverage: { [k:string]: T;  } = complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ]; food: { [k:string]: T;  } = complete ? Object.fromEntries(food) : [ ...new Set(food) ]; summon: { [k:string]: T;  } = complete ? Object.fromEntries(special) : [ ...new Set(special) ] }\>

___

### getDroppedFromAnimals

▸ **getDroppedFromAnimals**(`item`: IElement): Promise<Record<string, IElement\>\>

*Defined in [packages/wikidata/src/scrapers/item.ts:36](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L36)*

#### Parameters:

Name | Type |
------ | ------ |
`item` | IElement |

**Returns:** Promise<Record<string, IElement\>\>

___

### getFoundLocations

▸ **getFoundLocations**(`item`: IElement): Promise<Record<string, IElement\>\>

*Defined in [packages/wikidata/src/scrapers/item.ts:50](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L50)*

#### Parameters:

Name | Type |
------ | ------ |
`item` | IElement |

**Returns:** Promise<Record<string, IElement\>\>

___

### getItem

▸ **getItem**(`item`: IElement): Promise<Item<IElement\>\>

*Defined in [packages/wikidata/src/scrapers/item.ts:66](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L66)*

#### Parameters:

Name | Type |
------ | ------ |
`item` | IElement |

**Returns:** Promise<Item<IElement\>\>

___

### getMaterials

▸ **getMaterials**(`complete?`: boolean): Promise<{ [k:string]: T;  }\>

*Defined in [packages/wikidata/src/scrapers/item.ts:278](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L278)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each material  |

**Returns:** Promise<{ [k:string]: T;  }\>

___

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Inherited from [CoreScraper](wikidata.corescraper.md).[getPage](wikidata.corescraper.md#getpage)*

*Defined in [packages/wikidata/src/scrapers/core.ts:34](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/core.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>

___

### getWeapons

▸ **getWeapons**(`complete?`: boolean): Promise<Record<string, { abilityDetails: any ; name: string ; usableBy: string[] ; weapons: string[] \| Record<string, Item\>  }\>\>

*Defined in [packages/wikidata/src/scrapers/item.ts:145](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/item.ts#L145)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`complete` | boolean | false | if true, also fetch details for each weapon  |

**Returns:** Promise<Record<string, { abilityDetails: any ; name: string ; usableBy: string[] ; weapons: string[] \| Record<string, Item\>  }\>\>
