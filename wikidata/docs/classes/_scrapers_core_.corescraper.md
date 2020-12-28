**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["scrapers/core"](../modules/_scrapers_core_.md) / CoreScraper

# Class: CoreScraper

## Hierarchy

* **CoreScraper**

  ↳ [AnimalScraper](_scrapers_animals_.animalscraper.md)

  ↳ [CharacterScraper](_scrapers_character_.characterscraper.md)

  ↳ [ItemScraper](_scrapers_item_.itemscraper.md)

  ↳ [LocationScraper](_scrapers_locations_.locationscraper.md)

## Index

### Constructors

* [constructor](_scrapers_core_.corescraper.md#constructor)

### Properties

* [cache](_scrapers_core_.corescraper.md#cache)
* [BASE\_URL](_scrapers_core_.corescraper.md#base_url)

### Methods

* [getPage](_scrapers_core_.corescraper.md#getpage)
* [getSimpleElement](_scrapers_core_.corescraper.md#getsimpleelement)

## Constructors

### constructor

\+ **new CoreScraper**(`cache?`: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)): [CoreScraper](_scrapers_core_.corescraper.md)

*Defined in [src/scrapers/core.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md) |

**Returns:** [CoreScraper](_scrapers_core_.corescraper.md)

## Properties

### cache

•  **cache**: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

*Defined in [src/scrapers/core.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L8)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Defined in [src/scrapers/core.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L7)*

## Methods

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

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

*Defined in [src/scrapers/core.ts:18](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`$` | any | - |
`el` | any | - |
`nameOnly` | boolean | false |

**Returns:** any
