const Sequelize = require('sequelize');

module.exports = class Status extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        status_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        status_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'status',
        sequelize,
      }
    );
  }
};
