import * as Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists('game_equipment_player_records')
    .dropTableIfExists('game_skill_player_records')
    .createTable('game_equipment_player_records', function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('gameId').references('games.id');
      table.bigInteger('gamePlayerRecordId');
      table.integer('itemId');
    })
    .createTable('game_skill_player_records', function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('gameId').references('games.id');
      table.bigInteger('gamePlayerRecordId');
      table.integer('skillId');
      table.integer('level');
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists('game_equipment_player_records')
    .dropTableIfExists('game_skill_player_records');
}
