**[erbs-wiki-api](../README.md)**

> [Globals](../globals.md) / ["scrapers/character"](../modules/_scrapers_character_.md) / CharacterScraper

# Class: CharacterScraper

## Hierarchy

* [CoreScraper](_scrapers_core_.corescraper.md)

  ↳ **CharacterScraper**

## Index

### Constructors

* [constructor](_scrapers_character_.characterscraper.md#constructor)

### Properties

* [cache](_scrapers_character_.characterscraper.md#cache)
* [BASE\_URL](_scrapers_character_.characterscraper.md#base_url)

### Methods

* [getAll](_scrapers_character_.characterscraper.md#getall)
* [getCharacter](_scrapers_character_.characterscraper.md#getcharacter)
* [getPage](_scrapers_character_.characterscraper.md#getpage)

## Constructors

### constructor

\+ **new CharacterScraper**(`cache?`: IWikiCache): [CharacterScraper](_scrapers_character_.characterscraper.md)

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [CharacterScraper](_scrapers_character_.characterscraper.md)

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

▸ **getAll**(`weaponData?`: Record<string, any\>): Promise<any\>

#### Parameters:

Name | Type |
------ | ------ |
`weaponData?` | Record<string, any\> |

**Returns:** Promise<any\>

___

### getCharacter

▸ **getCharacter**(`__namedParameters`: { href: string ; name: string  }): Promise<any\>

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
