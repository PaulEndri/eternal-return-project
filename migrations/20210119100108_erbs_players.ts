import * as Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('players', function (table) {
      table.bigInteger('id').primary();
      table.string('name', 255);
      table.string('previousNames', 255);
    })
    .createTable('player_season_records', function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('playerId').references('players.id');
      table.string('nickname', 255);
      table.integer('seasonId');
      table.integer('matchingMode');
      table.integer('matchingTeamMode');
      table.bigInteger('mmr');
      table.bigInteger('rank');
      table.bigInteger('rankSize');
      table.bigInteger('totalGames');
      table.bigInteger('totalWins');
      table.bigInteger('rankPercent');
      table.decimal('averageRank');
      table.decimal('averageKills');
      table.decimal('averageAssistants');
      table.decimal('averageHunts');
      table.bigInteger('top1');
      table.bigInteger('top2');
      table.bigInteger('top3');
      table.bigInteger('top5');
      table.bigInteger('top7');
    })
    .createTable('player_season_character_records', function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('playerId').references('players.id');
      table.integer('seasonId');
      table.integer('characterCode');
      table.integer('totalGames');
      table.integer('usages');
      table.integer('maxKillings');
      table.integer('top3');
      table.integer('top3Rate');
      table.decimal('averageRank');
      table.integer('wins');
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists('players')
    .dropTableIfExists('player_season_records')
    .dropTableIfExists('player_season_character_records');
}
