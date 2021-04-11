const Sequelize = require('sequelize');

module.exports = class JobsApplied extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ja_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        job_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        mem_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ja_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cv_status_id: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        ja_isread: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        sr_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: 'jobs_applied',
        sequelize,
      }
    );
  }
};
