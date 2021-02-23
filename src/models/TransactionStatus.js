const { Model, DataTypes } = require('sequelize');

class TransactionStatus extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'transaction_statuses',
      timestamps: false,
      sequelize
    })
  }

}

module.exports = TransactionStatus;