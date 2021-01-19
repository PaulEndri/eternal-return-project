// Update with your config settings.

module.exports = {
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './db/dev.sqlite'
  //   }
  // },
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.SQL_HOST,
      database: 'erbs',
      user: 'erbs',
      password: process.env.SQL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  }
};
