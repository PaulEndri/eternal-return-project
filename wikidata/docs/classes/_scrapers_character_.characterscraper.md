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
* [getSimpleElement](_scrapers_character_.characterscraper.md#getsimpleelement)

### Object literals

* [statMap](_scrapers_character_.characterscraper.md#statmap)

## Constructors

### constructor

\+ **new CharacterScraper**(`cache?`: [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md)): [CharacterScraper](_scrapers_character_.characterscraper.md)

*Inherited from [CoreScraper](_scrapers_core_.corescraper.md).[constructor](_scrapers_core_.corescraper.md#constructor)*

*Defined in [src/scrapers/core.ts:8](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/core.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`cache?` | [IWikiCache](../interfaces/_interfaces_iwikicache_.iwikicache.md) |

**Returns:** [CharacterScraper](_scrapers_character_.characterscraper.md)

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

▸ **getAll**(`weaponData?`: Record<string, any\>): Promise<any\>

*Defined in [src/scrapers/character.ts:113](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/character.ts#L113)*

#### Parameters:

Name | Type |
------ | ------ |
`weaponData?` | Record<string, any\> |

**Returns:** Promise<any\>

___

### getCharacter

▸ **getCharacter**(`__namedParameters`: { href: string ; name: string  }): Promise<any\>

*Defined in [src/scrapers/character.ts:19](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/character.ts#L19)*

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

## Object literals

### statMap

▪ `Private` **statMap**: object

*Defined in [src/scrapers/character.ts:6](https://github.com/PaulEndri/eternal-return-project/blob/1ca823a/wikidata/src/scrapers/character.ts#L6)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`Attack power` | string | "AttackPower" |
`Bonus atk. speed` | string | "AttackSpeed" |
`Bonus crit rate` | string | "CrtiticalChance" |
`Defense` | string | "Defense" |
`Health` | string | "HP" |
`Health regen` | string | "HpRegen" |
`Move. speed` | string | "MoveSpeed" |
`Sight range` | string | "SightRange" |
`Stamina` | string | "SP" |
`Stamina regen` | string | "SpRegen" |
