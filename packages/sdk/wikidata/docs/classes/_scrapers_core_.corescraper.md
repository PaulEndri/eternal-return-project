**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["scrapers/core"](../modules/_scrapers_core_.md) / CoreScraper

# Class: CoreScraper

## Hierarchy

* **CoreScraper**

  ↳ [ItemScraper](_scrapers_item_.itemscraper.md)

  ↳ [CharacterScraper](_scrapers_character_.characterscraper.md)

  ↳ [LocationScraper](_scrapers_locations_.locationscraper.md)

  ↳ [AnimalScraper](_scrapers_animals_.animalscraper.md)

## Index

### Constructors

* [constructor](_scrapers_core_.corescraper.md#constructor)

### Properties

* [cache](_scrapers_core_.corescraper.md#cache)
* [BASE\_URL](_scrapers_core_.corescraper.md#base_url)

### Methods

* [getPage](_scrapers_core_.corescraper.md#getpage)

## Constructors

### constructor

\+ **new CoreScraper**(`cache?`: IWikiCache): [CoreScraper](_scrapers_core_.corescraper.md)

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [CoreScraper](_scrapers_core_.corescraper.md)

## Properties

### cache

•  **cache**: IWikiCache

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

## Methods

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>
