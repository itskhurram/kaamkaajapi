const Sequelize = require('sequelize');

module.exports = class AccountType extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        act_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        act_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'account_type',
        sequelize,
      }
    );
  }
};
