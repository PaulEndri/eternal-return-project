**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / AnimalScraper

# Class: AnimalScraper

## Hierarchy

* [CoreScraper](wikidata.corescraper.md)

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

*Inherited from [CoreScraper](wikidata.corescraper.md).[constructor](wikidata.corescraper.md#constructor)*

*Defined in [packages/wikidata/src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/wikidata/src/scrapers/core.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [AnimalScraper](wikidata.animalscraper.md)

## Properties

### cache

•  **cache**: IWikiCache

*Inherited from [CoreScraper](wikidata.corescraper.md).[cache](wikidata.corescraper.md#cache)*

*Defined in [packages/wikidata/src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/wikidata/src/scrapers/core.ts#L12)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [CoreScraper](wikidata.corescraper.md).[BASE_URL](wikidata.corescraper.md#base_url)*

*Defined in [packages/wikidata/src/scrapers/core.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/wikidata/src/scrapers/core.ts#L11)*

## Methods

### getAll

▸ **getAll**(): Promise<{ [k:string]: T;  }\>

*Defined in [packages/wikidata/src/scrapers/animals.ts:49](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/wikidata/src/scrapers/animals.ts#L49)*

**Returns:** Promise<{ [k:string]: T;  }\>

___

### getAnimal

▸ **getAnimal**(`__namedParameters`: { href: string ; name: string  }): Promise<IAnimal\>

*Defined in [packages/wikidata/src/scrapers/animals.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/wikidata/src/scrapers/animals.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { href: string ; name: string  } |

**Returns:** Promise<IAnimal\>

___

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Inherited from [CoreScraper](wikidata.corescraper.md).[getPage](wikidata.corescraper.md#getpage)*

*Defined in [packages/wikidata/src/scrapers/core.ts:34](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/wikidata/src/scrapers/core.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>
