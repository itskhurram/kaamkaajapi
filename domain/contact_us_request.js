const Sequelize = require('sequelize');

module.exports = class ContactUsRequest extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cu_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        is_viewed: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cu_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cu_email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cu_subject: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cu_comment: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pro_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        cu_phone: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'contact_us_request',
        sequelize,
      }
    );
  }
};
