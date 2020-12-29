**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / [WikiData](../modules/wikidata.md) / CharacterScraper

# Class: CharacterScraper

## Hierarchy

* [CoreScraper](wikidata.corescraper.md)

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

*Inherited from [CoreScraper](wikidata.corescraper.md).[constructor](wikidata.corescraper.md#constructor)*

*Defined in [packages/wikidata/src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/scrapers/core.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | IWikiCache |

**Returns:** [CharacterScraper](wikidata.characterscraper.md)

## Properties

### cache

•  **cache**: IWikiCache

*Inherited from [CoreScraper](wikidata.corescraper.md).[cache](wikidata.corescraper.md#cache)*

*Defined in [packages/wikidata/src/scrapers/core.ts:12](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/scrapers/core.ts#L12)*

___

### BASE\_URL

▪ `Static` **BASE\_URL**: string = "https://eternalreturn.gamepedia.com/"

*Inherited from [CoreScraper](wikidata.corescraper.md).[BASE_URL](wikidata.corescraper.md#base_url)*

*Defined in [packages/wikidata/src/scrapers/core.ts:11](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/scrapers/core.ts#L11)*

## Methods

### getAll

▸ **getAll**(`weaponData?`: Record<string, any\>): Promise<{ [k:string]: T;  }\>

*Defined in [packages/wikidata/src/scrapers/character.ts:119](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/scrapers/character.ts#L119)*

#### Parameters:

Name | Type |
------ | ------ |
`weaponData?` | Record<string, any\> |

**Returns:** Promise<{ [k:string]: T;  }\>

___

### getCharacter

▸ **getCharacter**(`__namedParameters`: { href: string ; name: string  }): Promise<ICharacter\>

*Defined in [packages/wikidata/src/scrapers/character.ts:24](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/scrapers/character.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { href: string ; name: string  } |

**Returns:** Promise<ICharacter\>

___

### getPage

▸ **getPage**(`page`: string, `skipCache?`: boolean): Promise<any\>

*Inherited from [CoreScraper](wikidata.corescraper.md).[getPage](wikidata.corescraper.md#getpage)*

*Defined in [packages/wikidata/src/scrapers/core.ts:34](https://github.com/PaulEndri/eternal-return-project/blob/4e6b63d/packages/wikidata/src/scrapers/core.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | string | - |
`skipCache` | boolean | false |

**Returns:** Promise<any\>
