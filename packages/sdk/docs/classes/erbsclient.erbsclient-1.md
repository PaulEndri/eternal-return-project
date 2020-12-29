**[ER:BS Information](../README.md)**

> [Globals](../globals.md) / [ErBsClient](../modules/erbsclient.md) / ErBsClient

# Class: ErBsClient

## Hierarchy

* **ErBsClient**

## Index

### Constructors

* [constructor](erbsclient.erbsclient-1.md#constructor)

### Methods

* [getArmors](erbsclient.erbsclient-1.md#getarmors)
* [getCharacterAttributes](erbsclient.erbsclient-1.md#getcharacterattributes)
* [getCharacterData](erbsclient.erbsclient-1.md#getcharacterdata)
* [getCharacterLevelUpStats](erbsclient.erbsclient-1.md#getcharacterlevelupstats)
* [getCharacters](erbsclient.erbsclient-1.md#getcharacters)
* [getConsumables](erbsclient.erbsclient-1.md#getconsumables)
* [getGamesForPlayer](erbsclient.erbsclient-1.md#getgamesforplayer)
* [getItemLocations](erbsclient.erbsclient-1.md#getitemlocations)
* [getItemSpawns](erbsclient.erbsclient-1.md#getitemspawns)
* [getMaterials](erbsclient.erbsclient-1.md#getmaterials)
* [getMetaData](erbsclient.erbsclient-1.md#getmetadata)
* [getMetaDataHash](erbsclient.erbsclient-1.md#getmetadatahash)
* [getPlayerRecord](erbsclient.erbsclient-1.md#getplayerrecord)
* [getRankForPlayer](erbsclient.erbsclient-1.md#getrankforplayer)
* [getSpecialItems](erbsclient.erbsclient-1.md#getspecialitems)
* [getTopDuos](erbsclient.erbsclient-1.md#gettopduos)
* [getTopPlayers](erbsclient.erbsclient-1.md#gettopplayers)
* [getTopSolos](erbsclient.erbsclient-1.md#gettopsolos)
* [getTopSquads](erbsclient.erbsclient-1.md#gettopsquads)
* [getWeapons](erbsclient.erbsclient-1.md#getweapons)

## Constructors

### constructor

\+ **new ErBsClient**(`apiKey?`: string, `apiVersion?`: string): [ErBsClient](erbsclient.erbsclient-1.md)

*Defined in [packages/client/src/libs/api.ts:27](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L27)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`apiKey` | string | process.env.API\_KEY |
`apiVersion` | string | process.env.API\_VER \|\| 'v1' |

**Returns:** [ErBsClient](erbsclient.erbsclient-1.md)

## Methods

### getArmors

▸ **getArmors**(): Promise<IArmor[]\>

*Defined in [packages/client/src/libs/api.ts:94](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L94)*

**Returns:** Promise<IArmor[]\>

___

### getCharacterAttributes

▸ **getCharacterAttributes**(): Promise<ICharacterAttribute[]\>

*Defined in [packages/client/src/libs/api.ts:82](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L82)*

**Returns:** Promise<ICharacterAttribute[]\>

___

### getCharacterData

▸ **getCharacterData**(): Promise<ICharacterData[]\>

*Defined in [packages/client/src/libs/api.ts:78](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L78)*

**Returns:** Promise<ICharacterData[]\>

___

### getCharacterLevelUpStats

▸ **getCharacterLevelUpStats**(): Promise<ICharacterLevelUpStat[]\>

*Defined in [packages/client/src/libs/api.ts:86](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L86)*

**Returns:** Promise<ICharacterLevelUpStat[]\>

___

### getCharacters

▸ **getCharacters**(): Promise<{ attributes: attr[] = attributes
					.filter(({ characterCode }) =\> characterCode === code)
					.map(({ characterCode, character, ...attr }) =\> attr); levelUpStats: stat[] = stats
					.filter((stat) =\> stat.code === code)
					.map(({ code, name, ...stat }) =\> stat) }[]\>

*Defined in [packages/client/src/libs/api.ts:133](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L133)*

Returns all characters and their attributes and level up stats

**Returns:** Promise<{ attributes: attr[] = attributes
					.filter(({ characterCode }) =\> characterCode === code)
					.map(({ characterCode, character, ...attr }) =\> attr); levelUpStats: stat[] = stats
					.filter((stat) =\> stat.code === code)
					.map(({ code, name, ...stat }) =\> stat) }[]\>

___

### getConsumables

▸ **getConsumables**(): Promise<IConsumable[]\>

*Defined in [packages/client/src/libs/api.ts:105](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L105)*

Returns all consumables (foods and drinks)

**Returns:** Promise<IConsumable[]\>

___

### getGamesForPlayer

▸ **getGamesForPlayer**(`userId`: number): Promise<IUserGameHistory[]\>

*Defined in [packages/client/src/libs/api.ts:223](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L223)*

Returns all games for the selected player (pagination WIP)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | number | ER:BS userNum  |

**Returns:** Promise<IUserGameHistory[]\>

___

### getItemLocations

▸ **getItemLocations**(): Promise<IItemLocation[]\>

*Defined in [packages/client/src/libs/api.ts:126](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L126)*

Returns where all items can be found or looted

**Returns:** Promise<IItemLocation[]\>

___

### getItemSpawns

▸ **getItemSpawns**(): Promise<IItemSpawns[]\>

*Defined in [packages/client/src/libs/api.ts:90](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L90)*

**Returns:** Promise<IItemSpawns[]\>

___

### getMaterials

▸ **getMaterials**(): Promise<IItemMisc[]\>

*Defined in [packages/client/src/libs/api.ts:112](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L112)*

Returns all misc (material) items

**Returns:** Promise<IItemMisc[]\>

___

### getMetaData

▸ **getMetaData**(`type`: [MetaTypes](../enums/erbsclient.metatypes.md)): Promise<any\>

*Defined in [packages/client/src/libs/api.ts:60](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L60)*

#### Parameters:

Name | Type |
------ | ------ |
`type` | [MetaTypes](../enums/erbsclient.metatypes.md) |

**Returns:** Promise<any\>

___

### getMetaDataHash

▸ **getMetaDataHash**(): Promise<any\>

*Defined in [packages/client/src/libs/api.ts:72](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L72)*

**Returns:** Promise<any\>

___

### getPlayerRecord

▸ **getPlayerRecord**(`userId`: number, `season?`: number): Promise<IUserRecord[]\>

*Defined in [packages/client/src/libs/api.ts:237](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L237)*

Returns all records for a given player/season combination

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`userId` | number | - | ER:BS userNum |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRecord[]\>

___

### getRankForPlayer

▸ **getRankForPlayer**(`userId`: number, `season`: number, `mode`: [GameModes](../enums/erbsclient.gamemodes.md)): Promise<IUserRank\>

*Defined in [packages/client/src/libs/api.ts:207](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L207)*

Get rank for a given player in given season and mode

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | number | ER:BS userNum |
`season` | number | ER:BS Season Number |
`mode` | [GameModes](../enums/erbsclient.gamemodes.md) | Solos/Duos/Squads  |

**Returns:** Promise<IUserRank\>

___

### getSpecialItems

▸ **getSpecialItems**(): Promise<ISpecialItem[]\>

*Defined in [packages/client/src/libs/api.ts:119](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L119)*

Returns all special (trap) items

**Returns:** Promise<ISpecialItem[]\>

___

### getTopDuos

▸ **getTopDuos**(`season?`: number): Promise<IUserRank[]\>

*Defined in [packages/client/src/libs/api.ts:188](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L188)*

Shorthand for getTopPlayers(season, GameModes.Duos)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getTopPlayers

▸ **getTopPlayers**(`season`: number, `mode`: [GameModes](../enums/erbsclient.gamemodes.md)): Promise<IUserRank[]\>

*Defined in [packages/client/src/libs/api.ts:161](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L161)*

Gets top 1000 plkayers for a given season and mode

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`season` | number | ER:BS Season Number |
`mode` | [GameModes](../enums/erbsclient.gamemodes.md) | Solos/Duos/Squads  |

**Returns:** Promise<IUserRank[]\>

___

### getTopSolos

▸ **getTopSolos**(`season?`: number): Promise<IUserRank[]\>

*Defined in [packages/client/src/libs/api.ts:180](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L180)*

Shorthand for getTopPlayers(season, GameModes.Solos)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getTopSquads

▸ **getTopSquads**(`season?`: number): Promise<IUserRank[]\>

*Defined in [packages/client/src/libs/api.ts:196](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L196)*

Shorthand for getTopPlayers(season, GameModes.Squads)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getWeapons

▸ **getWeapons**(): Promise<IWeapon[]\>

*Defined in [packages/client/src/libs/api.ts:98](https://github.com/PaulEndri/eternal-return-project/blob/f8a270f/packages/client/src/libs/api.ts#L98)*

**Returns:** Promise<IWeapon[]\>
