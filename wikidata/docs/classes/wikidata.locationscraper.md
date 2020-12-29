**[ER:BS Api/Scraper](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / LocationScraper

# Class: LocationScraper

## Hierarchy

* CoreScraper

  ↳ **LocationScraper**

## Index

### Constructors

* [constructor](wikidata.locationscraper.md#constructor)

### Properties

* [cache](wikidata.locationscraper.md#cache)
* [BASE\_URL](wikidata.locationscraper.md#base_url)

### Methods

* [getAll](wikidata.locationscraper.md#getall)
* [getLocation](wikidata.locationscraper.md#getlocation)
* [getPage](wikidata.locationscraper.md#getpage)

## Constructors

### constructor

\+ **new LocationScraper**(`cache?`: any): [LocationScraper](wikidata.locationscraper.md)

*Overrides [CharacterScraper](wikidata.characterscraper.md).[constructor](wikidata.characterscraper.md#constructor)*

*Defined in [src/scrapers/locations.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/locations.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | any |

**Returns:** [LocationScraper](wikidata.locationscraper.md)

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

▸ **getAll**(`full?`: boolean): Promise<any\>

*Defined in [src/scrapers/locations.ts:76](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/locations.ts#L76)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`full` | boolean | false |

**Returns:** Promise<any\>

___

### getLocation

▸ **getLocation**(`__namedParameters`: { href: string ; name: string  }, `full?`: boolean): Promise<any\>

*Defined in [src/scrapers/locations.ts:19](https://github.com/PaulEndri/eternal-return-project/blob/7676c9e/wikidata/src/scrapers/locations.ts#L19)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { href: string ; name: string  } | - |
`full` | boolean | false |

**Returns:** Promise<any\>

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
