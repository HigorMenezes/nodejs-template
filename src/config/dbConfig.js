require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const db = {
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USERNAME || 'dbname',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_DATABASE || 'admin',
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: process.env.DB_STORAGE || './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

module.exports = db
