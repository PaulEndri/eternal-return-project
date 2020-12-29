"use strict";
/**
 * @packageDocumentation
 * @module ErBsClient
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErBsClient = void 0;
const GameModes_1 = require("../constants/GameModes");
const MetaTypes_1 = require("../constants/MetaTypes");
const Routes_1 = require("../constants/Routes");
const node_fetch_1 = __importDefault(require("node-fetch"));
const metaCache = {};
class ErBsClient {
    constructor(apiKey = process.env.API_KEY, apiVersion = process.env.API_VER || 'v1') {
        this.apiKey = apiKey;
        this.apiVersion = apiVersion;
        this.baseURL = 'https://open-api.bser.io';
    }
    async call(route, complete = false) {
        if (!this.apiKey) {
            throw new Error('No Api Key Passed In');
        }
        const response = await node_fetch_1.default(`${this.baseURL}/${this.apiVersion}/${route}`.replace('//', '/'), {
            headers: {
                'x-api-key': this.apiKey
            }
        });
        if (response.ok) {
            const results = await response.json();
            return complete ? results : results.data;
        }
        else {
            throw new Error(await response.text());
        }
    }
    generateDataRoute(type) {
        return Routes_1.ROUTES.data.default.replace('{metaType}', type);
    }
    async getMetaData(type) {
        if (metaCache[type]) {
            return metaCache[type];
        }
        const data = await this.call(this.generateDataRoute(type));
        metaCache[type] = data;
        return data;
    }
    async getMetaDataHash() {
        const route = Routes_1.ROUTES.data.default.replace('{metaType}', 'hash');
        return await this.call(route);
    }
    async getCharacterData() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.Character));
    }
    async getCharacterAttributes() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.CharacterAttributes));
    }
    async getCharacterLevelUpStats() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.CharacterLevelUpStat));
    }
    async getItemSpawns() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.ItemSpawn));
    }
    async getArmors() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.ItemArmor));
    }
    async getWeapons() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.ItemWeapon));
    }
    /**
     * Returns all consumables (foods and drinks)
     */
    async getConsumables() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.ItemConsumable));
    }
    /**
     * Returns all misc (material) items
     */
    async getMaterials() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.ItemMisc));
    }
    /**
     * Returns all special (trap) items
     */
    async getSpecialItems() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.ItemSpecial));
    }
    /**
     * Returns where all items can be found or looted
     */
    async getItemLocations() {
        return (await this.getMetaData(MetaTypes_1.MetaTypes.HowToFindItem));
    }
    /**
     * Returns all characters and their attributes and level up stats
     */
    async getCharacters() {
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
    async getTopPlayers(season, mode) {
        if (!season || !mode) {
            throw new Error(`Invalid Parameters Passed to getTopPlayers: Season = ${season} and Mode = ${mode}`);
        }
        const route = Routes_1.ROUTES.rank.top
            .replace('{seasonId}', season.toString())
            .replace('{matchingTeamMode}', mode.toString());
        const response = await this.call(route, true);
        return response.topRanks;
    }
    /**
     * Shorthand for getTopPlayers(season, GameModes.Solos)
     * @param season ER:BS Season Number
     */
    async getTopSolos(season = 0) {
        return await this.getTopPlayers(season, GameModes_1.GameModes.Solo);
    }
    /**
     * Shorthand for getTopPlayers(season, GameModes.Duos)
     * @param season ER:BS Season Number
     */
    async getTopDuos(season = 0) {
        return await this.getTopPlayers(season, GameModes_1.GameModes.Duos);
    }
    /**
     * Shorthand for getTopPlayers(season, GameModes.Squads)
     * @param season ER:BS Season Number
     */
    async getTopSquads(season = 0) {
        return await this.getTopPlayers(season, GameModes_1.GameModes.Squads);
    }
    /**
     * Get rank for a given player in given season and mode
     *
     * @param userId ER:BS userNum
     * @param season ER:BS Season Number
     * @param mode Solos/Duos/Squads
     */
    async getRankForPlayer(userId, season, mode) {
        const route = Routes_1.ROUTES.rank.user
            .replace('{seasonId}', season.toString())
            .replace('{matchingTeamMode}', mode.toString())
            .replace('{userNum}', userId.toString());
        const response = await this.call(route, true);
        return response.userRank;
    }
    /**
     * Returns all games for the selected player (pagination WIP)
     *
     * @param userId ER:BS userNum
     */
    async getGamesForPlayer(userId) {
        const route = Routes_1.ROUTES.user.games.replace('{userNum}', userId.toString());
        const response = await this.call(route, true);
        return response.userGames;
    }
    /**
     * Returns all records for a given player/season combination
     *
     * @param userId ER:BS userNum
     * @param season ER:BS Season Number
     */
    async getPlayerRecord(userId, season = 0) {
        const route = Routes_1.ROUTES.user.games
            .replace('{seasonId}', season.toString())
            .replace('{userNum}', userId.toString());
        const response = await this.call(route, true);
        return response.userStats;
    }
}
exports.ErBsClient = ErBsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0lBR0k7Ozs7OztBQUVKLHNEQUFtRDtBQUNuRCxzREFBbUQ7QUFDbkQsZ0RBQTZDO0FBYzdDLDREQUErQjtBQUUvQixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFckIsTUFBYSxVQUFVO0lBR3RCLFlBQ1MsU0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFDNUIsYUFBYSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJO1FBRHhDLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQThCO1FBSnpDLFlBQU8sR0FBRywwQkFBMEIsQ0FBQztJQUsxQyxDQUFDO0lBRUksS0FBSyxDQUFDLElBQUksQ0FBVSxLQUFLLEVBQUUsUUFBUSxHQUFHLEtBQUs7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxvQkFBSyxDQUMzQixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUNoRTtZQUNDLE9BQU8sRUFBRTtnQkFDUixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDeEI7U0FDRCxDQUNELENBQUM7UUFFRixJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQVMsQ0FBQztTQUM5QzthQUFNO1lB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RUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxPQUFPLFFBQVEsQ0FBQyxRQUFxQixDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQWM7UUFDNUMsTUFBTSxLQUFLLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV4RSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlDLE9BQU8sUUFBUSxDQUFDLFNBQStCLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFjLEVBQUUsTUFBTSxHQUFHLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQzdCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFMUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxPQUFPLFFBQVEsQ0FBQyxTQUEwQixDQUFDO0lBQzVDLENBQUM7Q0FDRDtBQTVORCxnQ0E0TkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogXHJcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxyXG4gKiBAbW9kdWxlIEVyQnNDbGllbnRcclxuICoqL1xyXG5cclxuaW1wb3J0IHsgR2FtZU1vZGVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL0dhbWVNb2Rlcyc7XHJcbmltcG9ydCB7IE1ldGFUeXBlcyB9IGZyb20gJy4uL2NvbnN0YW50cy9NZXRhVHlwZXMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi9jb25zdGFudHMvUm91dGVzJztcclxuaW1wb3J0IHsgSUFybW9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQXJtb3InO1xyXG5pbXBvcnQgeyBJQ2hhcmFjdGVyQXR0cmlidXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ2hhcmFjdGVyQXR0cmlidXRlJztcclxuaW1wb3J0IHsgSUNoYXJhY3RlckRhdGEgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDaGFyYWN0ZXJEYXRhJztcclxuaW1wb3J0IHsgSUNoYXJhY3RlckxldmVsVXBTdGF0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ2hhcmFjdGVyTGV2ZWxVcFN0YXQnO1xyXG5pbXBvcnQgeyBJQ29uc3VtYWJsZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSUNvbnN1bWFibGUnO1xyXG5pbXBvcnQgeyBJSXRlbUxvY2F0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JSXRlbUxvY2F0aW9uJztcclxuaW1wb3J0IHsgSUl0ZW1NaXNjIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JSXRlbU1pc2MnO1xyXG5pbXBvcnQgeyBJSXRlbVNwYXducyB9IGZyb20gJy4uL2ludGVyZmFjZXMvSUl0ZW1TcGF3bnMnO1xyXG5pbXBvcnQgeyBJU3BlY2lhbEl0ZW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lTcGVjaWFsSXRlbSc7XHJcbmltcG9ydCB7IElVc2VyR2FtZUhpc3RvcnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lVc2VyR2FtZUhpc3RvcnknO1xyXG5pbXBvcnQgeyBJVXNlclJhbmsgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lVc2VyUmFuayc7XHJcbmltcG9ydCB7IElVc2VyUmVjb3JkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JVXNlclJlY29yZCc7XHJcbmltcG9ydCB7IElXZWFwb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lXZWFwb24nO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcblxyXG5jb25zdCBtZXRhQ2FjaGUgPSB7fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFckJzQ2xpZW50IHtcclxuXHRwcml2YXRlIGJhc2VVUkwgPSAnaHR0cHM6Ly9vcGVuLWFwaS5ic2VyLmlvJztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFwaUtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVksXHJcblx0XHRwcml2YXRlIGFwaVZlcnNpb24gPSBwcm9jZXNzLmVudi5BUElfVkVSIHx8ICd2MSdcclxuXHQpIHt9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgY2FsbDxUID0gYW55Pihyb3V0ZSwgY29tcGxldGUgPSBmYWxzZSkge1xyXG5cdFx0aWYgKCF0aGlzLmFwaUtleSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIEFwaSBLZXkgUGFzc2VkIEluJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0YCR7dGhpcy5iYXNlVVJMfS8ke3RoaXMuYXBpVmVyc2lvbn0vJHtyb3V0ZX1gLnJlcGxhY2UoJy8vJywgJy8nKSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCd4LWFwaS1rZXknOiB0aGlzLmFwaUtleVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAocmVzcG9uc2Uub2spIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0cmV0dXJuIGNvbXBsZXRlID8gcmVzdWx0cyA6IHJlc3VsdHMuZGF0YSBhcyBUO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdlbmVyYXRlRGF0YVJvdXRlKHR5cGU6IE1ldGFUeXBlcykge1xyXG5cdFx0cmV0dXJuIFJPVVRFUy5kYXRhLmRlZmF1bHQucmVwbGFjZSgne21ldGFUeXBlfScsIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGdldE1ldGFEYXRhKHR5cGU6IE1ldGFUeXBlcykge1xyXG5cdFx0aWYgKG1ldGFDYWNoZVt0eXBlXSkge1xyXG5cdFx0XHRyZXR1cm4gbWV0YUNhY2hlW3R5cGVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmNhbGwodGhpcy5nZW5lcmF0ZURhdGFSb3V0ZSh0eXBlKSk7XHJcblxyXG5cdFx0bWV0YUNhY2hlW3R5cGVdID0gZGF0YTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBnZXRNZXRhRGF0YUhhc2goKSB7XHJcblx0XHRjb25zdCByb3V0ZSA9IFJPVVRFUy5kYXRhLmRlZmF1bHQucmVwbGFjZSgne21ldGFUeXBlfScsICdoYXNoJyk7XHJcblxyXG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMuY2FsbChyb3V0ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZ2V0Q2hhcmFjdGVyRGF0YSgpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuQ2hhcmFjdGVyKSkgYXMgSUNoYXJhY3RlckRhdGFbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBnZXRDaGFyYWN0ZXJBdHRyaWJ1dGVzKCkge1xyXG5cdFx0cmV0dXJuIChhd2FpdCB0aGlzLmdldE1ldGFEYXRhKE1ldGFUeXBlcy5DaGFyYWN0ZXJBdHRyaWJ1dGVzKSkgYXMgSUNoYXJhY3RlckF0dHJpYnV0ZVtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGdldENoYXJhY3RlckxldmVsVXBTdGF0cygpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuQ2hhcmFjdGVyTGV2ZWxVcFN0YXQpKSBhcyBJQ2hhcmFjdGVyTGV2ZWxVcFN0YXRbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtU3Bhd25zKCkge1xyXG5cdFx0cmV0dXJuIChhd2FpdCB0aGlzLmdldE1ldGFEYXRhKE1ldGFUeXBlcy5JdGVtU3Bhd24pKSBhcyBJSXRlbVNwYXduc1tdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGdldEFybW9ycygpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuSXRlbUFybW9yKSkgYXMgSUFybW9yW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZ2V0V2VhcG9ucygpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuSXRlbVdlYXBvbikpIGFzIElXZWFwb25bXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYWxsIGNvbnN1bWFibGVzIChmb29kcyBhbmQgZHJpbmtzKVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBnZXRDb25zdW1hYmxlcygpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuSXRlbUNvbnN1bWFibGUpKSBhcyBJQ29uc3VtYWJsZVtdO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhbGwgbWlzYyAobWF0ZXJpYWwpIGl0ZW1zXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGdldE1hdGVyaWFscygpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuSXRlbU1pc2MpKSBhcyBJSXRlbU1pc2NbXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYWxsIHNwZWNpYWwgKHRyYXApIGl0ZW1zXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGdldFNwZWNpYWxJdGVtcygpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuSXRlbVNwZWNpYWwpKSBhcyBJU3BlY2lhbEl0ZW1bXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgd2hlcmUgYWxsIGl0ZW1zIGNhbiBiZSBmb3VuZCBvciBsb290ZWRcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgZ2V0SXRlbUxvY2F0aW9ucygpIHtcclxuXHRcdHJldHVybiAoYXdhaXQgdGhpcy5nZXRNZXRhRGF0YShNZXRhVHlwZXMuSG93VG9GaW5kSXRlbSkpIGFzIElJdGVtTG9jYXRpb25bXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYWxsIGNoYXJhY3RlcnMgYW5kIHRoZWlyIGF0dHJpYnV0ZXMgYW5kIGxldmVsIHVwIHN0YXRzXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGdldENoYXJhY3RlcnMoKSB7XHJcblx0XHRjb25zdCBbIGRhdGEsIGF0dHJpYnV0ZXMsIHN0YXRzIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcblx0XHRcdHRoaXMuZ2V0Q2hhcmFjdGVyRGF0YSgpLFxyXG5cdFx0XHR0aGlzLmdldENoYXJhY3RlckF0dHJpYnV0ZXMoKSxcclxuXHRcdFx0dGhpcy5nZXRDaGFyYWN0ZXJMZXZlbFVwU3RhdHMoKVxyXG5cdFx0XSk7XHJcblxyXG5cdFx0cmV0dXJuIGRhdGEubWFwKChjaGFyYWN0ZXIpID0+IHtcclxuXHRcdFx0Y29uc3QgeyBjb2RlIH0gPSBjaGFyYWN0ZXI7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLmNoYXJhY3RlcixcclxuXHRcdFx0XHRsZXZlbFVwU3RhdHM6IHN0YXRzXHJcblx0XHRcdFx0XHQuZmlsdGVyKChzdGF0KSA9PiBzdGF0LmNvZGUgPT09IGNvZGUpXHJcblx0XHRcdFx0XHQubWFwKCh7IGNvZGUsIG5hbWUsIC4uLnN0YXQgfSkgPT4gc3RhdCksXHJcblx0XHRcdFx0YXR0cmlidXRlczogYXR0cmlidXRlc1xyXG5cdFx0XHRcdFx0LmZpbHRlcigoeyBjaGFyYWN0ZXJDb2RlIH0pID0+IGNoYXJhY3RlckNvZGUgPT09IGNvZGUpXHJcblx0XHRcdFx0XHQubWFwKCh7IGNoYXJhY3RlckNvZGUsIGNoYXJhY3RlciwgLi4uYXR0ciB9KSA9PiBhdHRyKVxyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIHRvcCAxMDAwIHBsa2F5ZXJzIGZvciBhIGdpdmVuIHNlYXNvbiBhbmQgbW9kZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBzZWFzb24gRVI6QlMgU2Vhc29uIE51bWJlclxyXG5cdCAqIEBwYXJhbSBtb2RlIFNvbG9zL0R1b3MvU3F1YWRzXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGdldFRvcFBsYXllcnMoc2Vhc29uOiBudW1iZXIsIG1vZGU6IEdhbWVNb2Rlcykge1xyXG5cdFx0aWYgKCFzZWFzb24gfHwgIW1vZGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBJbnZhbGlkIFBhcmFtZXRlcnMgUGFzc2VkIHRvIGdldFRvcFBsYXllcnM6IFNlYXNvbiA9ICR7c2Vhc29ufSBhbmQgTW9kZSA9ICR7bW9kZX1gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCByb3V0ZSA9IFJPVVRFUy5yYW5rLnRvcFxyXG5cdFx0XHQucmVwbGFjZSgne3NlYXNvbklkfScsIHNlYXNvbi50b1N0cmluZygpKVxyXG5cdFx0XHQucmVwbGFjZSgne21hdGNoaW5nVGVhbU1vZGV9JywgbW9kZS50b1N0cmluZygpKTtcclxuXHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2FsbChyb3V0ZSwgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLnRvcFJhbmtzIGFzIElVc2VyUmFua1tdO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2hvcnRoYW5kIGZvciBnZXRUb3BQbGF5ZXJzKHNlYXNvbiwgR2FtZU1vZGVzLlNvbG9zKVxyXG5cdCAqIEBwYXJhbSBzZWFzb24gRVI6QlMgU2Vhc29uIE51bWJlclxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBnZXRUb3BTb2xvcyhzZWFzb24gPSAwKSB7XHJcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5nZXRUb3BQbGF5ZXJzKHNlYXNvbiwgR2FtZU1vZGVzLlNvbG8pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2hvcnRoYW5kIGZvciBnZXRUb3BQbGF5ZXJzKHNlYXNvbiwgR2FtZU1vZGVzLkR1b3MpXHJcblx0ICogQHBhcmFtIHNlYXNvbiBFUjpCUyBTZWFzb24gTnVtYmVyXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGdldFRvcER1b3Moc2Vhc29uID0gMCkge1xyXG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMuZ2V0VG9wUGxheWVycyhzZWFzb24sIEdhbWVNb2Rlcy5EdW9zKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNob3J0aGFuZCBmb3IgZ2V0VG9wUGxheWVycyhzZWFzb24sIEdhbWVNb2Rlcy5TcXVhZHMpXHJcblx0ICogQHBhcmFtIHNlYXNvbiBFUjpCUyBTZWFzb24gTnVtYmVyXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGdldFRvcFNxdWFkcyhzZWFzb24gPSAwKSB7XHJcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5nZXRUb3BQbGF5ZXJzKHNlYXNvbiwgR2FtZU1vZGVzLlNxdWFkcyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgcmFuayBmb3IgYSBnaXZlbiBwbGF5ZXIgaW4gZ2l2ZW4gc2Vhc29uIGFuZCBtb2RlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gdXNlcklkIEVSOkJTIHVzZXJOdW1cclxuXHQgKiBAcGFyYW0gc2Vhc29uIEVSOkJTIFNlYXNvbiBOdW1iZXJcclxuXHQgKiBAcGFyYW0gbW9kZSBTb2xvcy9EdW9zL1NxdWFkc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBnZXRSYW5rRm9yUGxheWVyKHVzZXJJZDogbnVtYmVyLCBzZWFzb246IG51bWJlciwgbW9kZTogR2FtZU1vZGVzKSB7XHJcblx0XHRjb25zdCByb3V0ZSA9IFJPVVRFUy5yYW5rLnVzZXJcclxuXHRcdFx0LnJlcGxhY2UoJ3tzZWFzb25JZH0nLCBzZWFzb24udG9TdHJpbmcoKSlcclxuXHRcdFx0LnJlcGxhY2UoJ3ttYXRjaGluZ1RlYW1Nb2RlfScsIG1vZGUudG9TdHJpbmcoKSlcclxuXHRcdFx0LnJlcGxhY2UoJ3t1c2VyTnVtfScsIHVzZXJJZC50b1N0cmluZygpKTtcclxuXHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2FsbChyb3V0ZSwgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLnVzZXJSYW5rIGFzIElVc2VyUmFuaztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYWxsIGdhbWVzIGZvciB0aGUgc2VsZWN0ZWQgcGxheWVyIChwYWdpbmF0aW9uIFdJUClcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB1c2VySWQgRVI6QlMgdXNlck51bVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBnZXRHYW1lc0ZvclBsYXllcih1c2VySWQ6IG51bWJlcikge1xyXG5cdFx0Y29uc3Qgcm91dGUgPSBST1VURVMudXNlci5nYW1lcy5yZXBsYWNlKCd7dXNlck51bX0nLCB1c2VySWQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNhbGwocm91dGUsIHRydWUpO1xyXG5cclxuXHRcdHJldHVybiByZXNwb25zZS51c2VyR2FtZXMgYXMgSVVzZXJHYW1lSGlzdG9yeVtdO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhbGwgcmVjb3JkcyBmb3IgYSBnaXZlbiBwbGF5ZXIvc2Vhc29uIGNvbWJpbmF0aW9uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gdXNlcklkIEVSOkJTIHVzZXJOdW1cclxuXHQgKiBAcGFyYW0gc2Vhc29uIEVSOkJTIFNlYXNvbiBOdW1iZXJcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgZ2V0UGxheWVyUmVjb3JkKHVzZXJJZDogbnVtYmVyLCBzZWFzb24gPSAwKSB7XHJcblx0XHRjb25zdCByb3V0ZSA9IFJPVVRFUy51c2VyLmdhbWVzXHJcblx0XHRcdC5yZXBsYWNlKCd7c2Vhc29uSWR9Jywgc2Vhc29uLnRvU3RyaW5nKCkpXHJcblx0XHRcdC5yZXBsYWNlKCd7dXNlck51bX0nLCB1c2VySWQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNhbGwocm91dGUsIHRydWUpO1xyXG5cclxuXHRcdHJldHVybiByZXNwb25zZS51c2VyU3RhdHMgYXMgSVVzZXJSZWNvcmRbXTtcclxuXHR9XHJcbn1cclxuIl19