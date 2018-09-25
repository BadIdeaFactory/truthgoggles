import dotenv from 'dotenv'
dotenv.config();

module.exports = {
  "development": {
    "url": process.env.DATABASE_URL_DEV || "",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "url": process.env.DATABASE_URL_TEST || "",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "url": process.env.DATABASE_URL_PROD || "",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
