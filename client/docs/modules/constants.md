**[ER:BS Api/Scraper](../README.md)**

> [Globals](../globals.md) / constants

# Module: constants

## Index

### Enumerations

* [GameModes](../enums/constants.gamemodes.md)
* [MasteryCodes](../enums/constants.masterycodes.md)
* [MetaTypes](../enums/constants.metatypes.md)

### Object literals

* [ROUTES](constants.md#routes)

## Object literals

### ROUTES

▪ `Const` **ROUTES**: object

*Defined in constants/Routes.ts:1*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`data` | object | { default: string = "/data/{metaType}" } |
`rank` | object | { top: string = "/rank/top/{seasonId}/{matchingTeamMode}"; user: string = "/rank/{userNum}/{seasonId}/{matchingTeamMode}" } |
`user` | object | { games: string = "/user/games/{userNum}"; stats: string = "/user/stats/{userNum}/{seasonId}" } |
