import { GameModes } from '../constants/GameModes';
import { MetaTypes } from '../constants/MetaTypes';
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
export declare class ErBsClient {
    private apiKey;
    private apiVersion;
    private baseURL;
    constructor(apiKey?: string, apiVersion?: string);
    private call;
    private generateDataRoute;
    getMetaData(type: MetaTypes): Promise<any>;
    getMetaDataHash(): Promise<any>;
    getCharacterData(): Promise<ICharacterData[]>;
    getCharacterAttributes(): Promise<ICharacterAttribute[]>;
    getCharacterLevelUpStats(): Promise<ICharacterLevelUpStat[]>;
    getItemSpawns(): Promise<IItemSpawns[]>;
    getArmors(): Promise<IArmor[]>;
    getWeapons(): Promise<IWeapon[]>;
    /**
     * Returns all consumables (foods and drinks)
     */
    getConsumables(): Promise<IConsumable[]>;
    /**
     * Returns all misc (material) items
     */
    getMaterials(): Promise<IItemMisc[]>;
    /**
     * Returns all special (trap) items
     */
    getSpecialItems(): Promise<ISpecialItem[]>;
    /**
     * Returns where all items can be found or looted
     */
    getItemLocations(): Promise<IItemLocation[]>;
    /**
     * Returns all characters and their attributes and level up stats
     */
    getCharacters(): Promise<{
        levelUpStats: {
            maxHp: number;
            maxSp: number;
            attackPower: number;
            defense: number;
            criticalChance: number;
            hpRegen: number;
            spRegen: number;
            attackSpeed: number;
            moveSpeed: number;
        }[];
        attributes: {
            mastery: string;
            controlDifficulty: number;
            attack: number;
            defense: number;
            disruptor: number;
            move: number;
            assistance: number;
        }[];
        code: number;
        name: string;
        maxHp: number;
        maxSp: number;
        initExtraPoint: number;
        maxExtraPoint: number;
        attackPower: number;
        defense: number;
        criticalStrikeChance: number;
        hpRegen: number;
        spRegen: number;
        attackSpeed: number;
        moveSpeed: number;
        sightRange: number;
        radius: number;
        uiHeight: number;
        resource: string;
    }[]>;
    /**
     * Gets top 1000 plkayers for a given season and mode
     *
     * @param season ER:BS Season Number
     * @param mode Solos/Duos/Squads
     */
    getTopPlayers(season: number, mode: GameModes): Promise<IUserRank[]>;
    /**
     * Shorthand for getTopPlayers(season, GameModes.Solos)
     * @param season ER:BS Season Number
     */
    getTopSolos(season?: number): Promise<IUserRank[]>;
    /**
     * Shorthand for getTopPlayers(season, GameModes.Duos)
     * @param season ER:BS Season Number
     */
    getTopDuos(season?: number): Promise<IUserRank[]>;
    /**
     * Shorthand for getTopPlayers(season, GameModes.Squads)
     * @param season ER:BS Season Number
     */
    getTopSquads(season?: number): Promise<IUserRank[]>;
    /**
     * Get rank for a given player in given season and mode
     *
     * @param userId ER:BS userNum
     * @param season ER:BS Season Number
     * @param mode Solos/Duos/Squads
     */
    getRankForPlayer(userId: number, season: number, mode: GameModes): Promise<IUserRank>;
    /**
     * Returns all games for the selected player (pagination WIP)
     *
     * @param userId ER:BS userNum
     */
    getGamesForPlayer(userId: number): Promise<IUserGameHistory[]>;
    /**
     * Returns all records for a given player/season combination
     *
     * @param userId ER:BS userNum
     * @param season ER:BS Season Number
     */
    getPlayerRecord(userId: number, season?: number): Promise<IUserRecord[]>;
}
//# sourceMappingURL=api.d.ts.map