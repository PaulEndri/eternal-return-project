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
* [BASE\_URL](_scrapers_locations_.locationscraper.md#base_url)

### Methods

* [getAll](_scrapers_locations_.locationscraper.md#getall)
* [getLocation](_scrapers_locations_.locationscraper.md#getlocation)
* [getPage](_scrapers_locations_.locationscraper.md#getpage)

## Constructors

### constructor

\+ **new LocationScraper**(`cache?`: any): [LocationScraper](_scrapers_locations_.locationscraper.md)

*Overrides [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | any |

**Returns:** [LocationScraper](_scrapers_locations_.locationscraper.md)

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

▸ **getAll**(`full?`: boolean): Promise<any\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`full` | boolean | false |

**Returns:** Promise<any\>

___

### getLocation

▸ **getLocation**(`__namedParameters`: { href: string ; name: string  }, `full?`: boolean): Promise<any\>

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

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>
