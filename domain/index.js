'use strict';

const Sequelize = require('sequelize');
const environment = require('../infrastructure/environment');
const fileSystem = require('fs');
const filePath = require('path');

class ConfigureDatabase {
  constructor() {
    this.sequelize = new Sequelize(
      environment.DATABASE_NAME,
      environment.DATABASE_USER,
      environment.DATABASE_PASSWORD,
      {
        dialect: 'mysql',
        host: environment.DATABASE_HOST,
        logging: false,
      }
    );

    const models = Object.assign(
      {},
      ...fileSystem
        .readdirSync(__dirname)
        .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
        .map((file) => {
          const model = require(filePath.join(__dirname, file));
          return { [model.name]: model.init(this.sequelize) };
        })
    );
    for (const model of Object.keys(models)) {
      typeof models[model].associate === 'function' &&
        models[model].associate(models);
    }
  }
  getSequelize = () => {
    return this.sequelize;
  };
}

const sequelize = new ConfigureDatabase().getSequelize();

module.exports = sequelize;
