/**
 * @packageDocumentation
 * @module ErBsClient
 **/

import { GameModes } from '../constants/GameModes';
import { MetaTypes } from '../constants/MetaTypes';
import { ROUTES } from '../constants/Routes';
import { IArmor } from '../interfaces/IArmor';
import { ICharacterAttribute } from '../interfaces/ICharacterAttribute';
import { ICharacterData } from '../interfaces/ICharacterData';
import { ICharacterLevelUpStat } from '../interfaces/ICharacterLevelUpStat';
import { IConsumable } from '../interfaces/IConsumable';
import { IItemLocation } from '../interfaces/IItemLocation';
import { IItemMisc } from '../interfaces/IItemMisc';
import { IItemSpawns } from '../interfaces/IItemSpawns';
import { ISpecialItem } from '../interfaces/ISpecialItem';
import { IUserGameHistory } from '../interfaces/IUserGameHistory';
import { IUserRank } from '../interfaces/IUserRank';
import { IUserRecord } from '../interfaces/IUserRecord';
import { IWeapon } from '../interfaces/IWeapon';
import fetch from 'node-fetch';

let metaCache = {};

export class ErBsClient {
  private baseURL = 'https://open-api.bser.io';

  constructor(
    private apiKey = process.env.API_KEY,
    private apiVersion = process.env.API_VER || 'v1'
  ) {}

  private async call<T = any>(route, complete = false) {
    if (!this.apiKey) {
      throw new Error('No Api Key Passed In');
    }

    const response = await fetch(`${this.baseURL}/${this.apiVersion}${route}`, {
      headers: {
        'x-api-key': this.apiKey || process.env.API_KEY
      }
    });

    if (response.ok) {
      const results = await response.json();
      return complete ? results : (results.data as T);
    } else {
      throw new Error(await response.text());
    }
  }

  private generateDataRoute(type: MetaTypes) {
    return ROUTES.data.default.replace('{metaType}', type);
  }

  public async getMetaData(type: MetaTypes) {
    if (metaCache[type]) {
      return metaCache[type];
    }

    const data = await this.call(this.generateDataRoute(type));

    metaCache[type] = data;

    return data;
  }

  public async getMetaDataHash() {
    const route = ROUTES.data.default.replace('{metaType}', 'hash');

    return await this.call(route);
  }

  public async getCharacterData() {
    return (await this.getMetaData(MetaTypes.Character)) as ICharacterData[];
  }

  public async getCharacterAttributes() {
    return (await this.getMetaData(
      MetaTypes.CharacterAttributes
    )) as ICharacterAttribute[];
  }

  public async getCharacterLevelUpStats() {
    return (await this.getMetaData(
      MetaTypes.CharacterLevelUpStat
    )) as ICharacterLevelUpStat[];
  }

  public async getItemSpawns() {
    return (await this.getMetaData(MetaTypes.ItemSpawn)) as IItemSpawns[];
  }

  public async getArmors() {
    return (await this.getMetaData(MetaTypes.ItemArmor)) as IArmor[];
  }

  public async getWeapons() {
    return (await this.getMetaData(MetaTypes.ItemWeapon)) as IWeapon[];
  }

  /**
   * Returns all consumables (foods and drinks)
   */
  public async getConsumables() {
    return (await this.getMetaData(MetaTypes.ItemConsumable)) as IConsumable[];
  }

  /**
   * Returns all misc (material) items
   */
  public async getMaterials() {
    return (await this.getMetaData(MetaTypes.ItemMisc)) as IItemMisc[];
  }

  /**
   * Returns all special (trap) items
   */
  public async getSpecialItems() {
    return (await this.getMetaData(MetaTypes.ItemSpecial)) as ISpecialItem[];
  }

  /**
   * Returns where all items can be found or looted
   */
  public async getItemLocations() {
    return (await this.getMetaData(MetaTypes.HowToFindItem)) as IItemLocation[];
  }

  /**
   * Returns all characters and their attributes and level up stats
   */
  public async getCharacters() {
    const [data, attributes, stats] = await Promise.all([
      this.getCharacterData(),
      this.getCharacterAttributes(),
      this.getCharacterLevelUpStats()
    ]);

    return data.map((character) => {
      const { code } = character;

      return {
        ...character,
        levelUpStats: stats
          .filter((stat) => stat.code === code)
          .map(({ code, name, ...stat }) => stat),
        attributes: attributes
          .filter(({ characterCode }) => characterCode === code)
          .map(({ characterCode, character, ...attr }) => attr)
      };
    });
  }

  /**
   * Gets top 1000 plkayers for a given season and mode
   *
   * @param season ER:BS Season Number
   * @param mode Solos/Duos/Squads
   */
  public async getTopPlayers(season: number, mode: GameModes) {
    if (season === null || season === undefined || !mode) {
      throw new Error(
        `Invalid Parameters Passed to getTopPlayers: Season = ${season} and Mode = ${mode}`
      );
    }
    const route = ROUTES.rank.top
      .replace('{seasonId}', season.toString())
      .replace('{matchingTeamMode}', mode.toString());

    const response = await this.call(route, true);

    return response.topRanks as IUserRank[];
  }

  /**
   * Shorthand for getTopPlayers(season, GameModes.Solos)
   * @param season ER:BS Season Number
   */
  public async getTopSolos(season = 0) {
    return await this.getTopPlayers(season, GameModes.Solo);
  }

  /**
   * Shorthand for getTopPlayers(season, GameModes.Duos)
   * @param season ER:BS Season Number
   */
  public async getTopDuos(season = 0) {
    return await this.getTopPlayers(season, GameModes.Duos);
  }

  /**
   * Shorthand for getTopPlayers(season, GameModes.Squads)
   * @param season ER:BS Season Number
   */
  public async getTopSquads(season = 0) {
    return await this.getTopPlayers(season, GameModes.Squads);
  }

  /**
   * Get rank for a given player in given season and mode
   *
   * @param userId ER:BS userNum
   * @param season ER:BS Season Number
   * @param mode Solos/Duos/Squads
   */
  public async getRankForPlayer(
    userId: number,
    season: number,
    mode: GameModes
  ) {
    const route = ROUTES.rank.user
      .replace('{seasonId}', season.toString())
      .replace('{matchingTeamMode}', mode.toString())
      .replace('{userNum}', userId.toString());

    const response = await this.call(route, true);

    return response.userRank as IUserRank;
  }

  /**
   * Returns all games for the selected player (pagination WIP)
   *
   * @param userId ER:BS userNum
   */
  public async getGamesForPlayer(userId: number) {
    const route = ROUTES.user.games.replace('{userNum}', userId.toString());

    const response = await this.call(route, true);

    return response.userGames as IUserGameHistory[];
  }

  /**
   * Returns all records for a given player/season combination
   *
   * @param userId ER:BS userNum
   * @param season ER:BS Season Number
   */
  public async getPlayerRecord(userId: number, season = 0) {
    const route = ROUTES.user.stats
      .replace('{seasonId}', season.toString())
      .replace('{userNum}', userId.toString());

    const response = await this.call(route, true);

    return response.userStats as IUserRecord[];
  }

  /**
   * Player number lookup
   *
   * @param name Player name
   */
  public async getPlayerNumber(name: string) {
    const route = ROUTES.user.number.replace('{name}', name);

    const response = await this.call(route, true);

    return response.user as { userNum: number; nickname: string };
  }

  public flushCache() {
    metaCache = {};
  }
}
