const Sequelize = require('sequelize');

module.exports = class Connections extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        connection_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id_from: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        user_id_to: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        cnc_is_confirmed: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        cnc_datetime: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        tableName: 'connections',
        sequelize,
      }
    );
  }
};
