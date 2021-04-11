const Sequelize = require('sequelize');

module.exports = class Jobs extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        job_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        emp_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        job_position: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cat_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        jtype_id: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        crl_id: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        job_min_edu: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_max_edu: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_career_level: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        job_min_exp: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_max_exp: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_min_sal: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_max_sal: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        status_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_dateposted: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        job_lastdate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        job_showsal: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        job_showcom: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        countries_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        state_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        city_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        state_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ljcat_id: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        ind_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_vacancie: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        job_skills: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        req_traveling: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        shift_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        approval_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        delete_job: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        job_sal_negotiable: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
      },
      {
        tableName: 'jobs',
        sequelize,
      }
    );
  }
};
