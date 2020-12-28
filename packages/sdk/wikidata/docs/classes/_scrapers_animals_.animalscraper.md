**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["scrapers/animals"](../modules/_scrapers_animals_.md) / AnimalScraper

# Class: AnimalScraper

## Hierarchy

* [CoreScraper](_scrapers_core_.corescraper.md)

  ↳ **AnimalScraper**

## Index

### Constructors

* [constructor](_scrapers_animals_.animalscraper.md#constructor)

### Properties

* [cache](_scrapers_animals_.animalscraper.md#cache)
* [BASE\_URL](_scrapers_animals_.animalscraper.md#base_url)

### Methods

* [getAll](_scrapers_animals_.animalscraper.md#getall)
* [getAnimal](_scrapers_animals_.animalscraper.md#getanimal)
* [getPage](_scrapers_animals_.animalscraper.md#getpage)
* [getSimpleElement](_scrapers_animals_.animalscraper.md#getsimpleelement)

## Constructors

### constructor

\+ **new AnimalScraper**(`cache?`: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)): [AnimalScraper](_scrapers_animals_.animalscraper.md)

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

*Defined in [src/scrapers/core.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md) |

**Returns:** [AnimalScraper](_scrapers_animals_.animalscraper.md)

## Properties

### cache

•  **cache**: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[cache](_scrapers_core_.corescraper.md#cache)*

*Defined in [src/scrapers/core.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L8)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[BASE_URL](_scrapers_core_.corescraper.md#base_url)*

*Defined in [src/scrapers/core.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L7)*

## Methods

### getAll

▸ **getAll**(): Promise<any\>

*Defined in [src/scrapers/animals.ts:44](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/animals.ts#L44)*

**Returns:** Promise<any\>

___

### getAnimal

▸ **getAnimal**(`__namedParameters`: { href: string ; name: string  }): Promise<any\>

*Defined in [src/scrapers/animals.ts:6](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/animals.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { href: string ; name: string  } |

**Returns:** Promise<any\>

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
