const Sequelize = require('sequelize');

module.exports = class Emails extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        eml_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        eml_title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        eml_subject: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        eml_contents: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        eml_from_address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
      },
      {
        tableName: 'emails',
        sequelize,
      }
    );
  }
};
