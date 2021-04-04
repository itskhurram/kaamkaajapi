'use strict';
const dotenv = require('dotenv');
class Environment {
  constructor() {
    dotenv.config();
    this.PORT = process.env.PORT || 9000;
    this.URL = process.env.URL || 'http://localhost';
    this.DATABASE_NAME = process.env.DatabaseName || 'DatabaseName';
    this.DATABASE_USER = process.env.Database_Username || 'db_user';
    this.DATABASE_PASSWORD = process.env.Database_Password || 'db_password';
    this.DATABASE_DIALECT = process.env.Database_Dialect || 'mysql';
    this.DATABASE_HOST = process.env.Database_Host || 'localhost';
  }
}
module.exports = new Environment();
