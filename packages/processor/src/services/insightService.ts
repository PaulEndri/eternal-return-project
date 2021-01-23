// import { Character } from 'erbs-sdk';
// import {
//   CharacterModeRates,
//   EquipmentRates,
//   GamePlayers,
//   SkillLevelRates
// } from '../models/sql.models';
// export class InsightService {
//   private async getWinRateForCharacter(characterCode: number) {}
//   private async getPlayRateForCharacter(characterCode: number) {
//     const playedGames = await GamePlayers.query()
//       .select(['count', 'matchingTeamMode as mode'])
//       .where('characterNum', '=', characterCode)
//       .groupBy(['characterNum', 'matchingTeamMode'])
//       .count('*');

//     const allGames = await GamePlayers.query()
//       .select(['count', 'matchingTeamMode'])
//       .count('*')
//       .groupBy(['matchingTeamMode']);

//     const results = allGames.map((gameData: any) => {
//       const played: any = playedGames.find(
//         (x) => x.matchingTeamMode === gameData.matchingTeamMode
//       );

//       try {
//         return [
//           gameData.matchingTeamMode,
//           (+played.count / +gameData.count).toFixed()
//         ];
//       } catch (e) {
//         console.warn(e);
//       }

//       return [gameData.matchingTeamMode, 0];
//     });

//     return results;
//   }

//   private async processCharacterSkillInsights(characterCode: number) {
//     const results = await SkillLevelRates.query()
//       .where('characterNum', '=', characterCode)
//       .orderBy('level', 'ASC');

//     const data = {};
//     const resultSet = [];
//     for (const result of results) {
//       if (data[result.level]) {
//         data[result.level].push([result.skillId, result.count]);
//       } else {
//         data[result.level] = [[result.skillId, result.count]];
//       }
//     }

//     return Object.entries(data).map(([level, values]) => {
//       con;
//     });
//   }
//   public async generateCharacterInsights(characterCode: number) {
//     const character = new Character(characterCode);
//     const [
//       equipment,
//       skills,
//       wins,
//       { allGames, playedGames }
//     ] = await Promise.all([
//       EquipmentRates.query().where('characterNum', '=', characterCode),
//       CharacterModeRates.query().where('characterNum', '=', characterCode),
//       this.getPlayRateForCharacter(characterCode)
//     ]);
//   }
// }
