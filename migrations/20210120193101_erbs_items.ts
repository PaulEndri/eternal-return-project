import * as Knex from 'knex';

import dotenv from 'dotenv';

dotenv.config();
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('items', function (table) {
    table.bigInteger('id').primary();
    table.string('name', 255);
    table.string('type', 255);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('items');
}
