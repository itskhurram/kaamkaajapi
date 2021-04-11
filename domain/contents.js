const Sequelize = require('sequelize');

module.exports = class Contents extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cnt_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        cnt_heading: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        cnt_title: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        cnt_details: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        cnt_keywords: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cnt_metades: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'contents',
        sequelize,
      }
    );
  }
};
