const Sequelize = require('sequelize');

module.exports = class Countries extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        countries_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        countries_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        countries_iso_code_2: {
          type: Sequelize.CHAR(2),
          allowNull: false,
        },
        countries_iso_code_3: {
          type: Sequelize.CHAR(3),
          allowNull: false,
        },
        address_format_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: 'countries',
        sequelize,
      }
    );
  }
};
