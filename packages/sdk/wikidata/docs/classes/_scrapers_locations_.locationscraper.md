**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["scrapers/locations"](../modules/_scrapers_locations_.md) / LocationScraper

# Class: LocationScraper

## Hierarchy

* [CoreScraper](_scrapers_core_.corescraper.md)

  ↳ **LocationScraper**

## Index

### Constructors

* [constructor](_scrapers_locations_.locationscraper.md#constructor)

### Properties

* [cache](_scrapers_locations_.locationscraper.md#cache)
* [genericApi](_scrapers_locations_.locationscraper.md#genericapi)
* [BASE\_URL](_scrapers_locations_.locationscraper.md#base_url)

### Methods

* [getAll](_scrapers_locations_.locationscraper.md#getall)
* [getLocation](_scrapers_locations_.locationscraper.md#getlocation)
* [getPage](_scrapers_locations_.locationscraper.md#getpage)
* [getSimpleElement](_scrapers_locations_.locationscraper.md#getsimpleelement)

## Constructors

### constructor

\+ **new LocationScraper**(`cache?`: any): [LocationScraper](_scrapers_locations_.locationscraper.md)

*Overrides [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

*Defined in [src/scrapers/locations.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/locations.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | any |

**Returns:** [LocationScraper](_scrapers_locations_.locationscraper.md)

## Properties

### cache

•  **cache**: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[cache](_scrapers_core_.corescraper.md#cache)*

*Defined in [src/scrapers/core.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L8)*

___

### genericApi

• `Private` **genericApi**: [GenericApi](_api_generic_.genericapi.md)

*Defined in [src/scrapers/locations.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/locations.ts#L7)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[BASE_URL](_scrapers_core_.corescraper.md#base_url)*

*Defined in [src/scrapers/core.ts:7](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L7)*

## Methods

### getAll

▸ **getAll**(`full?`: boolean): Promise<any\>

*Defined in [src/scrapers/locations.ts:72](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/locations.ts#L72)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`full` | boolean | false |

**Returns:** Promise<any\>

___

### getLocation

▸ **getLocation**(`__namedParameters`: { href: string ; name: string  }, `full?`: boolean): Promise<any\>

*Defined in [src/scrapers/locations.ts:15](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/locations.ts#L15)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { href: string ; name: string  } | - |
`full` | boolean | false |

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
