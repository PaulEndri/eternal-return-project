**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / CoreScraper

# Class: CoreScraper

## Hierarchy

* **CoreScraper**

  ↳ [ItemScraper](wikidata.itemscraper.md)

  ↳ [CharacterScraper](wikidata.characterscraper.md)

  ↳ [LocationScraper](wikidata.locationscraper.md)

  ↳ [AnimalScraper](wikidata.animalscraper.md)

## Index

### Constructors

* [constructor](wikidata.corescraper.md#constructor)

### Properties

* [cache](wikidata.corescraper.md#cache)
* [BASE\_URL](wikidata.corescraper.md#base_url)

### Methods

* [getPage](wikidata.corescraper.md#getpage)

## Constructors

### constructor

\+ **new CoreScraper**(`cache?`: IWikiCache): [CoreScraper](wikidata.corescraper.md)

*Defined in [packages/wikidata/src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/core.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [CoreScraper](wikidata.corescraper.md)

## Properties

### cache

•  **cache**: IWikiCache

*Defined in [packages/wikidata/src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/core.ts#L12)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Defined in [packages/wikidata/src/scrapers/core.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/core.ts#L11)*

## Methods

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Defined in [packages/wikidata/src/scrapers/core.ts:34](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/wikidata/src/scrapers/core.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>
