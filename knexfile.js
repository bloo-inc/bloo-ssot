module.exports = {
  local: {
    client: 'postgresql',
    connection: {
      database: 'bloo',
      user:     'postgres',
      password: 'secret'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'bloo_migrations'
    }
  },
  container: {
    client: 'postgresql',
    connection: {
      database: 'bloo',
      user: 'postgres',
      password: process.env.POSTGRES_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'bloo_migrations'
    }
  }
};
