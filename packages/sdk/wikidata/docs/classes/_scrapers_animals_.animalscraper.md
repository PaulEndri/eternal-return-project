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

## Constructors

### constructor

\+ **new AnimalScraper**(`cache?`: IWikiCache): [AnimalScraper](_scrapers_animals_.animalscraper.md)

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [AnimalScraper](_scrapers_animals_.animalscraper.md)

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

▸ **getAll**(): Promise<any\>

**Returns:** Promise<any\>

___

### getAnimal

▸ **getAnimal**(`__namedParameters`: { href: string ; name: string  }): Promise<any\>

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { href: string ; name: string  } |

**Returns:** Promise<any\>

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
