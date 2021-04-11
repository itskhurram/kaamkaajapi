const Sequelize = require('sequelize');

module.exports = class Banners extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ban_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        ban_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ban_title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ban_file: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          default: true,
        },
      },
      {
        tableName: 'banners',
        sequelize,
      }
    );
  }
};
