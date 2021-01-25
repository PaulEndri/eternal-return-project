import { Model } from 'objection';
import dotenv from 'dotenv';
import Knex from 'knex';
import { IUserGameHistory, IUserRecord } from 'erbs-client';

export enum SQL_VIEWS {
  EQUIP_STATS = 'equipment_statistics',
  SKILL_STATS = 'skill_statistics',
  CHARACTER_RATES = 'character_winrates',
  CHARACTER_RATES_BY_MODE = 'character_winrates_by_mode',
  CHARACTER_RATES_BY_MODE_AND_VERSION = 'character_winrates_by_mode_and_version'
}

dotenv.config();

const knex = Knex({
  client: 'mysql2',
  useNullAsDefault: true,
  connection: {
    host: process.env.SQL_HOST,
    database: 'erbs',
    user: 'erbs',
    password: process.env.SQL_PASSWORD
  }
});

Model.knex(knex);

export class Player extends Model {
  public name: string;
  public id: number;
  public seasonRecords?: IUserRecord[];
  public games?: IUserGameHistory[];
  public lastUpdated?: Date | string;

  static get tableName() {
    return 'players';
  }

  $beforeUpdate() {
    this.lastUpdated = new Date().toISOString();
  }

  $beforeInsert() {
    this.lastUpdated = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      games: {
        relation: Model.HasManyRelation,
        modelClass: GamePlayers,
        join: {
          to: 'game_player_records.userNum',
          from: 'players.id'
        }
      },
      seasonRecords: {
        relation: Model.HasManyRelation,
        modelClass: PlayerSeasons,
        join: {
          to: 'player_season_records.playerId',
          from: 'players.id'
        }
      }
    };
  }
}

export class Games extends Model {
  static get tableName() {
    return 'games';
  }

  static get relationMappings() {
    return {
      players: {
        relation: Model.HasManyRelation,
        modelClass: GamePlayers,
        join: {
          from: 'games.id',
          to: 'game_player_records.gameId'
        }
      }
    };
  }
}

export class GamePlayers extends Model {
  public matchingTeamMode: number;
  public gameId: number;

  static get tableName() {
    return 'game_player_records';
  }

  static get relationMappings() {
    return {
      game: {
        relation: Model.HasOneRelation,
        modelClass: Games,
        join: {
          from: 'game_player_records.gameId',
          to: 'games.id'
        }
      },
      skills: {
        relation: Model.HasManyRelation,
        modelClass: GamePlayerSkills,
        join: {
          to: 'game_skill_player_records.gamePlayerRecordId',
          from: 'game_player_records.id'
        }
      },
      equipment: {
        relation: Model.HasManyRelation,
        modelClass: GamePlayerEquipments,
        join: {
          to: 'game_equipment_player_records.gamePlayerRecordId',
          from: 'game_player_records.id'
        }
      }
    };
  }
}

export class GamePlayerEquipments extends Model {
  static get tableName() {
    return 'game_equipment_player_records';
  }

  static get relationMappings() {
    return {
      game: {
        relation: Model.HasOneRelation,
        modelClass: Games,
        join: {
          from: 'game_equipment_player_records.gameId',
          to: 'games.id'
        }
      },
      player: {
        relation: Model.HasOneRelation,
        modelClass: GamePlayers,
        join: {
          from: 'game_equipment_player_records.gamePlayerRecordId',
          to: 'game_player_records.id'
        }
      }
    };
  }
}

export class GamePlayerSkills extends Model {
  static get tableName() {
    return 'game_skill_player_records';
  }

  static get relationMappings() {
    return {
      game: {
        relation: Model.HasOneRelation,
        modelClass: Games,
        join: {
          from: 'game_skill_player_records.gameId',
          to: 'games.id'
        }
      },
      player: {
        relation: Model.HasOneRelation,
        modelClass: GamePlayers,
        join: {
          from: 'game_skill_player_records.gamePlayerRecordId',
          to: 'game_player_records.id'
        }
      }
    };
  }
}

export class PlayerSeasons extends Model {
  static get tableName() {
    return 'player_season_records';
  }

  static get relationMappings() {
    return {
      player: {
        relation: Model.HasOneRelation,
        modelClass: Player,
        join: {
          from: 'player_season_records.playerId',
          to: 'player.id'
        }
      },
      characterStats: {
        relation: Model.HasManyRelation,
        modelClass: PlayerSeasonCharacters,
        join: {
          to: 'player_season_character_records.playerSeasonRecordId',
          from: 'player_season_records.id'
        }
      }
    };
  }
}

export class PlayerSeasonCharacters extends Model {
  static get tableName() {
    return 'player_season_character_records';
  }

  static get relationMappings() {
    return {
      player: {
        relation: Model.HasOneRelation,
        modelClass: Player,
        join: {
          from: 'player_season_character_records.playerId',
          to: 'player.id'
        }
      },
      season: {
        relation: Model.HasOneRelation,
        modelClass: PlayerSeasons,
        join: {
          from: ['player_season_character_records.playerSeasonRecordId'],
          to: ['player_season_records.id']
        }
      }
    };
  }
}

export class CharacterRates extends Model {
  static get tableName() {
    return SQL_VIEWS.CHARACTER_RATES;
  }
}

export class CharacterModeRates extends Model {
  static get tableName() {
    return SQL_VIEWS.CHARACTER_RATES_BY_MODE;
  }
}

export class CharacterModeVersionRates extends Model {
  static get tableName() {
    return SQL_VIEWS.CHARACTER_RATES_BY_MODE_AND_VERSION;
  }
}
export class EquipmentRates extends Model {
  public itemId: number;
  public type: string;

  static get tableName() {
    return SQL_VIEWS.EQUIP_STATS;
  }
}

export class SkillLevelRates extends Model {
  public level: number;
  public count: number;
  public skillId: number;

  static get tableName() {
    return SQL_VIEWS.SKILL_STATS;
  }
}
