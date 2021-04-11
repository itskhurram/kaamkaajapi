const Sequelize = require('sequelize');

module.exports = class JobCities extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        job_city_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        job_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        city_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: 'job_cities',
        sequelize,
      }
    );
  }
};
