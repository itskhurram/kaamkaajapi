const Sequelize = require('sequelize');

module.exports = class Cities extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        city_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        city_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        state_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        countries_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: 'cities',
        sequelize,
      }
    );
  }
};
