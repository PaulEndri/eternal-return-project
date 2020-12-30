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
* [getPlayerNumber](erbsclient.erbsclient-1.md#getplayernumber)
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

*Defined in [packages/client/src/libs/api.ts:27](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L27)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`apiKey` | string | process.env.API\_KEY |
`apiVersion` | string | process.env.API\_VER \|\| 'v1' |

**Returns:** [ErBsClient](erbsclient.erbsclient-1.md)

## Methods

### getArmors

▸ **getArmors**(): Promise<IArmor[]\>

*Defined in [packages/client/src/libs/api.ts:92](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L92)*

**Returns:** Promise<IArmor[]\>

___

### getCharacterAttributes

▸ **getCharacterAttributes**(): Promise<ICharacterAttribute[]\>

*Defined in [packages/client/src/libs/api.ts:80](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L80)*

**Returns:** Promise<ICharacterAttribute[]\>

___

### getCharacterData

▸ **getCharacterData**(): Promise<ICharacterData[]\>

*Defined in [packages/client/src/libs/api.ts:76](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L76)*

**Returns:** Promise<ICharacterData[]\>

___

### getCharacterLevelUpStats

▸ **getCharacterLevelUpStats**(): Promise<ICharacterLevelUpStat[]\>

*Defined in [packages/client/src/libs/api.ts:84](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L84)*

**Returns:** Promise<ICharacterLevelUpStat[]\>

___

### getCharacters

▸ **getCharacters**(): Promise<{ attributes: attr[] = attributes
					.filter(({ characterCode }) =\> characterCode === code)
					.map(({ characterCode, character, ...attr }) =\> attr); levelUpStats: stat[] = stats
					.filter((stat) =\> stat.code === code)
					.map(({ code, name, ...stat }) =\> stat) }[]\>

*Defined in [packages/client/src/libs/api.ts:131](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L131)*

Returns all characters and their attributes and level up stats

**Returns:** Promise<{ attributes: attr[] = attributes
					.filter(({ characterCode }) =\> characterCode === code)
					.map(({ characterCode, character, ...attr }) =\> attr); levelUpStats: stat[] = stats
					.filter((stat) =\> stat.code === code)
					.map(({ code, name, ...stat }) =\> stat) }[]\>

___

### getConsumables

▸ **getConsumables**(): Promise<IConsumable[]\>

*Defined in [packages/client/src/libs/api.ts:103](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L103)*

Returns all consumables (foods and drinks)

**Returns:** Promise<IConsumable[]\>

___

### getGamesForPlayer

▸ **getGamesForPlayer**(`userId`: number): Promise<IUserGameHistory[]\>

*Defined in [packages/client/src/libs/api.ts:221](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L221)*

Returns all games for the selected player (pagination WIP)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | number | ER:BS userNum  |

**Returns:** Promise<IUserGameHistory[]\>

___

### getItemLocations

▸ **getItemLocations**(): Promise<IItemLocation[]\>

*Defined in [packages/client/src/libs/api.ts:124](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L124)*

Returns where all items can be found or looted

**Returns:** Promise<IItemLocation[]\>

___

### getItemSpawns

▸ **getItemSpawns**(): Promise<IItemSpawns[]\>

*Defined in [packages/client/src/libs/api.ts:88](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L88)*

**Returns:** Promise<IItemSpawns[]\>

___

### getMaterials

▸ **getMaterials**(): Promise<IItemMisc[]\>

*Defined in [packages/client/src/libs/api.ts:110](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L110)*

Returns all misc (material) items

**Returns:** Promise<IItemMisc[]\>

___

### getMetaData

▸ **getMetaData**(`type`: [MetaTypes](../enums/erbsclient.metatypes.md)): Promise<any\>

*Defined in [packages/client/src/libs/api.ts:58](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L58)*

#### Parameters:

Name | Type |
------ | ------ |
`type` | [MetaTypes](../enums/erbsclient.metatypes.md) |

**Returns:** Promise<any\>

___

### getMetaDataHash

▸ **getMetaDataHash**(): Promise<any\>

*Defined in [packages/client/src/libs/api.ts:70](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L70)*

**Returns:** Promise<any\>

___

### getPlayerNumber

▸ **getPlayerNumber**(`name`: string): Promise<{ nickname: string ; userNum: number  }\>

*Defined in [packages/client/src/libs/api.ts:250](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L250)*

Player number lookup

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Player name  |

**Returns:** Promise<{ nickname: string ; userNum: number  }\>

___

### getPlayerRecord

▸ **getPlayerRecord**(`userId`: number, `season?`: number): Promise<IUserRecord[]\>

*Defined in [packages/client/src/libs/api.ts:235](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L235)*

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

*Defined in [packages/client/src/libs/api.ts:205](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L205)*

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

*Defined in [packages/client/src/libs/api.ts:117](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L117)*

Returns all special (trap) items

**Returns:** Promise<ISpecialItem[]\>

___

### getTopDuos

▸ **getTopDuos**(`season?`: number): Promise<IUserRank[]\>

*Defined in [packages/client/src/libs/api.ts:186](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L186)*

Shorthand for getTopPlayers(season, GameModes.Duos)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getTopPlayers

▸ **getTopPlayers**(`season`: number, `mode`: [GameModes](../enums/erbsclient.gamemodes.md)): Promise<IUserRank[]\>

*Defined in [packages/client/src/libs/api.ts:159](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L159)*

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

*Defined in [packages/client/src/libs/api.ts:178](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L178)*

Shorthand for getTopPlayers(season, GameModes.Solos)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getTopSquads

▸ **getTopSquads**(`season?`: number): Promise<IUserRank[]\>

*Defined in [packages/client/src/libs/api.ts:194](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L194)*

Shorthand for getTopPlayers(season, GameModes.Squads)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`season` | number | 0 | ER:BS Season Number  |

**Returns:** Promise<IUserRank[]\>

___

### getWeapons

▸ **getWeapons**(): Promise<IWeapon[]\>

*Defined in [packages/client/src/libs/api.ts:96](https://github.com/PaulEndri/eternal-return-project/blob/6cfa1d0/packages/client/src/libs/api.ts#L96)*

**Returns:** Promise<IWeapon[]\>
