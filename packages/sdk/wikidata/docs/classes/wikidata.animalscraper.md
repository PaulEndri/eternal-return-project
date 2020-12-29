**[ER:BS Api/Scraper](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / AnimalScraper

# Class: AnimalScraper

## Hierarchy

* CoreScraper

  ↳ **AnimalScraper**

## Index

### Constructors

* [constructor](wikidata.animalscraper.md#constructor)

### Properties

* [cache](wikidata.animalscraper.md#cache)
* [BASE\_URL](wikidata.animalscraper.md#base_url)

### Methods

* [getAll](wikidata.animalscraper.md#getall)
* [getAnimal](wikidata.animalscraper.md#getanimal)
* [getPage](wikidata.animalscraper.md#getpage)

## Constructors

### constructor

\+ **new AnimalScraper**(`cache?`: IWikiCache): [AnimalScraper](wikidata.animalscraper.md)

*Inherited from [CharacterScraper](wikidata.characterscraper.md).[constructor](wikidata.characterscraper.md#constructor)*

*Defined in [src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/core.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [AnimalScraper](wikidata.animalscraper.md)

## Properties

### cache

•  **cache**: IWikiCache

*Inherited from [ItemScraper](wikidata.itemscraper.md).[cache](wikidata.itemscraper.md#cache)*

*Defined in [src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/core.ts#L12)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [ItemScraper](wikidata.itemscraper.md).[BASE_URL](wikidata.itemscraper.md#base_url)*

*Defined in [src/scrapers/core.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/core.ts#L11)*

## Methods

### getAll

▸ **getAll**(): Promise<{ [k:string]: T;  }\>

*Defined in [src/scrapers/animals.ts:49](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/animals.ts#L49)*

**Returns:** Promise<{ [k:string]: T;  }\>

___

### getAnimal

▸ **getAnimal**(`__namedParameters`: { href: string ; name: string  }): Promise<IAnimal\>

*Defined in [src/scrapers/animals.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/animals.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { href: string ; name: string  } |

**Returns:** Promise<IAnimal\>

___

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Inherited from [ItemScraper](wikidata.itemscraper.md).[getPage](wikidata.itemscraper.md#getpage)*

*Defined in [src/scrapers/core.ts:34](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/core.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>
