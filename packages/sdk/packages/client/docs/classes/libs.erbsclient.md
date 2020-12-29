**[ER:BS Api/Scraper](../README.md)**

> [Globals](../globals.md) / [libs](../modules/libs.md) / ErBsClient

# Class: ErBsClient

## Hierarchy

* **ErBsClient**

## Index

### Constructors

* [constructor](libs.erbsclient.md#constructor)

### Methods

* [getArmors](libs.erbsclient.md#getarmors)
* [getCharacterAttributes](libs.erbsclient.md#getcharacterattributes)
* [getCharacterData](libs.erbsclient.md#getcharacterdata)
* [getCharacterLevelUpStats](libs.erbsclient.md#getcharacterlevelupstats)
* [getCharacters](libs.erbsclient.md#getcharacters)
* [getConsumables](libs.erbsclient.md#getconsumables)
* [getGamesForPlayer](libs.erbsclient.md#getgamesforplayer)
* [getItemLocations](libs.erbsclient.md#getitemlocations)
* [getItemSpawns](libs.erbsclient.md#getitemspawns)
* [getMaterials](libs.erbsclient.md#getmaterials)
* [getMetaData](libs.erbsclient.md#getmetadata)
* [getMetaDataHash](libs.erbsclient.md#getmetadatahash)
* [getPlayerRecord](libs.erbsclient.md#getplayerrecord)
* [getRankForPlayer](libs.erbsclient.md#getrankforplayer)
* [getSpecialItems](libs.erbsclient.md#getspecialitems)
* [getTopDuos](libs.erbsclient.md#gettopduos)
* [getTopPlayers](libs.erbsclient.md#gettopplayers)
* [getTopSolos](libs.erbsclient.md#gettopsolos)
* [getTopSquads](libs.erbsclient.md#gettopsquads)
* [getWeapons](libs.erbsclient.md#getweapons)

## Constructors

### constructor

\+ **new ErBsClient**(`apiKey?`: string, `apiVersion?`: string): [ErBsClient](libs.erbsclient.md)

*Defined in libs/api.ts:21*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`apiKey` | string | process.env.API\_KEY |
`apiVersion` | string | process.env.API\_VER \|\| 'v1' |

**Returns:** [ErBsClient](libs.erbsclient.md)

## Methods

### getArmors

▸ **getArmors**(): Promise<IArmor[]\>

*Defined in libs/api.ts:88*

**Returns:** Promise<IArmor[]\>

___

### getCharacterAttributes

▸ **getCharacterAttributes**(): Promise<ICharacterAttribute[]\>

*Defined in libs/api.ts:76*

**Returns:** Promise<ICharacterAttribute[]\>

___

### getCharacterData

▸ **getCharacterData**(): Promise<ICharacterData[]\>

*Defined in libs/api.ts:72*

**Returns:** Promise<ICharacterData[]\>

___

### getCharacterLevelUpStats

▸ **getCharacterLevelUpStats**(): Promise<ICharacterLevelUpStat[]\>

*Defined in libs/api.ts:80*

**Returns:** Promise<ICharacterLevelUpStat[]\>

___

### getCharacters

▸ **getCharacters**(): Promise<{ attributes: attr[] = attributes
					.filter(({ characterCode }) =\> characterCode === code)
					.map(({ characterCode, character, ...attr }) =\> attr); levelUpStats: stat[] = stats
					.filter((stat) =\> stat.code === code)
					.map(({ code, name, ...stat }) =\> stat) }[]\>

*Defined in libs/api.ts:127*

Returns all characters and their attributes and level up stats

**Returns:** Promise<{ attributes: attr[] = attributes
					.filter(({ characterCode }) =\> characterCode === code)
					.map(({ characterCode, character, ...attr }) =\> attr); levelUpStats: stat[] = stats
					.filter((stat) =\> stat.code === code)
					.map(({ code, name, ...stat }) =\> stat) }[]\>

___

### getConsumables

▸ **getConsumables**(): Promise<IConsumable[]\>

*Defined in libs/api.ts:99*

Returns all consumables (foods and drinks)

**Returns:** Promise<IConsumable[]\>

___

### getGamesForPlayer

▸ **getGamesForPlayer**(`userId`: number): Promise<IUserGameHistory[]\>

*Defined in libs/api.ts:217*

Returns all games for the selected player (pagination WIP)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | number | ER:BS userNum  |

**Returns:** Promise<IUserGameHistory[]\>

___

### getItemLocations

▸ **getItemLocations**(): Promise<IItemLocation[]\>

*Defined in libs/api.ts:120*

Returns where all items can be found or looted

**Returns:** Promise<IItemLocation[]\>

___

### getItemSpawns

▸ **getItemSpawns**(): Promise<IItemSpawns[]\>

*Defined in libs/api.ts:84*

**Returns:** Promise<IItemSpawns[]\>

___

### getMaterials

▸ **getMaterials**(): Promise<IItemMisc[]\>

*Defined in libs/api.ts:106*

Returns all misc (material) items

**Returns:** Promise<IItemMisc[]\>

___

### getMetaData

▸ **getMetaData**(`type`: [MetaTypes](../enums/constants.metatypes.md)): Promise<any\>

*Defined in libs/api.ts:54*

#### Parameters:

Name | Type |
------ | ------ |
`type` | [MetaTypes](../enums/constants.metatypes.md) |

**Returns:** Promise<any\>

___

### getMetaDataHash

▸ **getMetaDataHash**(): Promise<any\>

*Defined in libs/api.ts:66*

**Returns:** Promise<any\>

___

### getPlayerRecord

▸ **getPlayerRecord**(`userId`: number, `season?`: number): Promise<IUserRecord[]\>

*Defined in libs/api.ts:231*

Returns all records for a given player/season combination

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`userId` | number | - | ER:BS userNum |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRecord[]\>

___

### getRankForPlayer

▸ **getRankForPlayer**(`userId`: number, `season`: number, `mode`: [GameModes](../enums/constants.gamemodes.md)): Promise<IUserRank\>

*Defined in libs/api.ts:201*

Get rank for a given player in given season and mode

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | number | ER:BS userNum |
`season` | number | ER:BS Season Number |
`mode` | [GameModes](../enums/constants.gamemodes.md) | Solos/Duos/Squads  |

**Returns:** Promise<IUserRank\>

___

### getSpecialItems

▸ **getSpecialItems**(): Promise<ISpecialItem[]\>

*Defined in libs/api.ts:113*

Returns all special (trap) items

**Returns:** Promise<ISpecialItem[]\>

___

### getTopDuos

▸ **getTopDuos**(`season?`: number): Promise<IUserRank[]\>

*Defined in libs/api.ts:182*

Shorthand for getTopPlayers(season, GameModes.Duos)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getTopPlayers

▸ **getTopPlayers**(`season`: number, `mode`: [GameModes](../enums/constants.gamemodes.md)): Promise<IUserRank[]\>

*Defined in libs/api.ts:155*

Gets top 1000 plkayers for a given season and mode

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`season` | number | ER:BS Season Number |
`mode` | [GameModes](../enums/constants.gamemodes.md) | Solos/Duos/Squads  |

**Returns:** Promise<IUserRank[]\>

___

### getTopSolos

▸ **getTopSolos**(`season?`: number): Promise<IUserRank[]\>

*Defined in libs/api.ts:174*

Shorthand for getTopPlayers(season, GameModes.Solos)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getTopSquads

▸ **getTopSquads**(`season?`: number): Promise<IUserRank[]\>

*Defined in libs/api.ts:190*

Shorthand for getTopPlayers(season, GameModes.Squads)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getWeapons

▸ **getWeapons**(): Promise<IWeapon[]\>

*Defined in libs/api.ts:92*

**Returns:** Promise<IWeapon[]\>
