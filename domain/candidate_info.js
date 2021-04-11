const Sequelize = require('sequelize');

module.exports = class Candidateinfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cinfo_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        ind_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        exp_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sal_id_min: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sal_id_max: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cinfo_details: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      {
        tableName: 'candidate_info',
        sequelize,
      }
    );
  }
};
