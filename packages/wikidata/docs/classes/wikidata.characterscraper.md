**[ER:BS Api/Scraper](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / CharacterScraper

# Class: CharacterScraper

## Hierarchy

* CoreScraper

  ↳ **CharacterScraper**

## Index

### Constructors

* [constructor](wikidata.characterscraper.md#constructor)

### Properties

* [cache](wikidata.characterscraper.md#cache)
* [BASE\_URL](wikidata.characterscraper.md#base_url)

### Methods

* [getAll](wikidata.characterscraper.md#getall)
* [getCharacter](wikidata.characterscraper.md#getcharacter)
* [getPage](wikidata.characterscraper.md#getpage)

## Constructors

### constructor

\+ **new CharacterScraper**(`cache?`: IWikiCache): [CharacterScraper](wikidata.characterscraper.md)

*Inherited from [CharacterScraper](wikidata.characterscraper.md).[constructor](wikidata.characterscraper.md#constructor)*

*Defined in [src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/scrapers/core.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [CharacterScraper](wikidata.characterscraper.md)

## Properties

### cache

•  **cache**: IWikiCache

*Inherited from [ItemScraper](wikidata.itemscraper.md).[cache](wikidata.itemscraper.md#cache)*

*Defined in [src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/scrapers/core.ts#L12)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [ItemScraper](wikidata.itemscraper.md).[BASE_URL](wikidata.itemscraper.md#base_url)*

*Defined in [src/scrapers/core.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/scrapers/core.ts#L11)*

## Methods

### getAll

▸ **getAll**(`weaponData?`: Record<string, any\>): Promise<{ [k:string]: T;  }\>

*Defined in [src/scrapers/character.ts:119](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/scrapers/character.ts#L119)*

#### Parameters:

Name | Type |
------ | ------ |
`weaponData?` | Record<string, any\> |

**Returns:** Promise<{ [k:string]: T;  }\>

___

### getCharacter

▸ **getCharacter**(`__namedParameters`: { href: string ; name: string  }): Promise<ICharacter\>

*Defined in [src/scrapers/character.ts:24](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/scrapers/character.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { href: string ; name: string  } |

**Returns:** Promise<ICharacter\>

___

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Inherited from [ItemScraper](wikidata.itemscraper.md).[getPage](wikidata.itemscraper.md#getpage)*

*Defined in [src/scrapers/core.ts:34](https://github.com/PaulEndri/eternal-return-project/blob/0121a07/wikidata/src/scrapers/core.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>
