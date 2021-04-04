'use strict';

const Sequelize = require('sequelize');
const environment = require('../../infrastructure/environment');

class ConfigureDatabase {
  constructor() {
    this.sequelize = new Sequelize(
      environment.DATABASE_NAME,
      environment.DATABASE_USER,
      environment.DATABASE_PASSWORD,
      {
        dialect: 'mysql',
        host: environment.DATABASE_HOST,
      }
    );
  }

  getSequelize = () => {
    return this.sequelize;
  };
}

const sequelize = new ConfigureDatabase().getSequelize();

//sequelize.import('../sequelizeModels/Users');

module.exports = sequelize;
