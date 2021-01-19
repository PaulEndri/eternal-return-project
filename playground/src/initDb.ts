import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('games', function (table) {
      table.bigInteger('id').primary();
      table.bigInteger('averageMmr');
      table.bigInteger('duration');
      table.bigInteger('winner1');
      table.bigInteger('winner2');
      table.bigInteger('winner3');
      table.string('version', 255);
      table.string('serverName', 255);
    })
    .createTable('game_player_records', function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('userNum');
      table.string('nickname', 255);
      table.bigInteger('gameId').references('games.id');
      table.bigInteger('seasonId').index();
      table.bigInteger('matchingMode').index();
      table.bigInteger('matchingTeamMode');
      table.bigInteger('characterNum');
      table.bigInteger('characterLevel');
      table.bigInteger('gameRank');
      table.bigInteger('playerKill');
      table.bigInteger('serverName');
      table.bigInteger('playerAssistant');
      table.bigInteger('monsterKill');
      table.bigInteger('bestWeapon');
      table.bigInteger('bestWeaponLevel');
      table.bigInteger('versionMajor');
      table.bigInteger('versionMinor');
      table.bigInteger('maxHp');
      table.bigInteger('maxSp');
      table.bigInteger('attackPower');
      table.bigInteger('defense');
      table.bigInteger('hpRegen');
      table.bigInteger('spRegen');
      table.bigInteger('attackSpeed');
      table.bigInteger('moveSpeed');
      table.bigInteger('outOfCombatMoveSpeed');
      table.bigInteger('sightRange');
      table.bigInteger('attackRange');
      table.bigInteger('criticalChance');
      table.bigInteger('criticalStrikeDamage');
      table.bigInteger('coolDownReduction');
      table.bigInteger('lifeSteal');
      table.bigInteger('amplifierToMonster');
      table.bigInteger('trapDamage');
      table.bigInteger('gainExp');
      table.string('startDtm', 255);
      table.bigInteger('duration');
      table.bigInteger('mmrBefore');
      table.bigInteger('damageToPlayer');
      table.bigInteger('damageToMonster');
      table.bigInteger('killerUserNum');
      table.bigInteger('playTime');
      table.bigInteger('watchTime');
      table.bigInteger('totalTime');
      table.bigInteger('botAdded');
      table.bigInteger('botRemain');
      table.bigInteger('restrictedAreaAccelerated');
      table.bigInteger('safeAreas');
      table.bigInteger('killer');
      table.string('killDetail', 255);
      table.string('causeOfDeath', 255);
      table.bigInteger('teamNumber');
      table.bigInteger('preMade');
      table.bigInteger('gainedNormalMmrKFactor');
    })
    .createTable('game_equipment_player_records', function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('gameId').references('games.id');
      table
        .bigInteger('gamePlayerRecordId')
        .references('game_player_records.id');
      table.integer('slot1');
      table.integer('slot2');
      table.integer('slot3');
      table.integer('slot4');
      table.integer('slot5');
      table.integer('slot6');
    })
    .createTable('game_skill_player_records', function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('gameId').references('games.id');
      table
        .bigInteger('gamePlayerRecordId')
        .references('game_player_records.id');
      table.integer('level1');
      table.integer('level2');
      table.integer('level3');
      table.integer('level4');
      table.integer('level5');
      table.integer('level6');
      table.integer('level7');
      table.integer('level8');
      table.integer('level9');
      table.integer('level10');
      table.integer('level11');
      table.integer('level12');
      table.integer('level13');
      table.integer('level14');
      table.integer('level15');
      table.integer('level16');
      table.integer('level17');
      table.integer('level18');
    });
}

const knex = Knex({
  client: 'mysql2',
  connection: {
    host: process.env.SQL_HOST,
    database: 'erbs',
    user: 'erbs',
    password: process.env.SQL_PASSWORD
  }
});
up(knex).then(() => {
  console.log('done');
});
