const Sequelize = require('sequelize');

module.exports = class CVStatus extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cv_status_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        cv_status_name: {
          type: Sequelize.STRING,
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
