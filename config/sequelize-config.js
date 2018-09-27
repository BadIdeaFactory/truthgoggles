const dotenv = require('dotenv')
dotenv.config();

module.exports = {
  "development": {
    "url": process.env.DATABASE_URL_DEVELOPMENT || "",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "url": process.env.DATABASE_URL_TEST || "",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "url": process.env.DATABASE_URL_PRODUCTION || "",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
