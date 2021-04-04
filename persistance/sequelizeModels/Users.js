const Sequelize = require('sequelize');

module.exports = class Users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        uid: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.STRING,
      },
      {
        tableName: 'users',
        sequelize,
      }
    );
  }
};
