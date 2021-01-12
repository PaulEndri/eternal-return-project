[![Known Vulnerabilities](https://snyk.io/test/github/PaulEndri/eternal-return-project/badge.svg?targetFile=packages/client/package.json)](https://snyk.io/test/github/PaulEndri/eternal-return-project?targetFile=packages/client/package.json) [![codecov](https://codecov.io/gh/PaulEndri/eternal-return-project/branch/master/graph/badge.svg?token=11E4G2GMXZ)](https://codecov.io/gh/PaulEndri/eternal-return-project)

# Eternal Return Black Survival Api Client

This is a simple NPM package that serves as a client wrapper around the official Eternal Return: Black Survival api, see [the official documentation](https://developer.eternalreturn.io/getting-started) for more information

## Environment Configuration

- API_KEY = The Api Key provided to you by the official API
- API_VER = defaults to 1

It is suggested the above environment variables get configured through a package such as the dotenv package or through your favorite way to set environment variable. These two can alternatively be set in the constructor for the client.

## Monorepo

This project is housed inside of a monorepo that contains my other ERBS work, monorepo stuff is using lerna

## Features

- First Class Typescript Support
- Wrappers for all current official methods
- Masteries, MetaData, and GameMode helpers
- Additional helper methods for pulling specific data from the api

## Exports

- [ErBsClient](/docs/classes/erbsclient.erbsclient-1.md)
- [GameModes](/docs/enums/erbsclient.gamemodes.md)
- [MasteryCodes](/docs/enums/erbsclient.masterycodes.md)
- [MetaTypes](/docs/enums/erbsclient.metayypes.md)

## Usage

```typescript
import { ErBsClient, GameModes } from 'erbs-client';

const client = new ErBsClient('my-key', 'v1');

const sampleMethods = [
  client.getPlayerNumber('myPlayerName'), // Search for a player number using the given player name
  client.getCharacters(), // Merges multiple metadata calls to return all stats for all characters, no parameters
  client.getTopPlayers(1, GameModes.Duos), // gets all top players for a given season and game mode
  client.getTopSolos(), // shorthand for getTopPlayers(#, GameModes.Solos), same exists for squads and duos
  client.getRankForPlayer(123456, 1, GameModes.Squads), // gets the rank of the selected player for the given season and mode
  client.getGamesForPlayer(123456), // gets all games for the given player (pagination WIP)
  client.getPlayerRecord(123456, 0) // gets all records for the given player for a given season
];

const results = await Promise.all(methods);
```

## Docs:

Check the typedocs above for more information or go through all the generated markdown here

> [Globals](docs/globals.md)
