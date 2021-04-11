const Sequelize = require('sequelize');

module.exports = class Events extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        event_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        event_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        event_details: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        event_start: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        event_end: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        event_dateadded: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        status_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        event_image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        event_short_details: {
          type: Sequelize.TEXT,
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
