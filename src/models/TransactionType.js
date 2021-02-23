const { Model, DataTypes } = require('sequelize');

class TransactionTypes extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'transaction_types',
      timestamps: false,
      sequelize
    })
  }

}

module.exports = TransactionTypes;