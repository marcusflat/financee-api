const { Model, DataTypes } = require('sequelize');

class Account extends Model {
  static init(sequelize) {
    super.init({
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      teamId: DataTypes.INTEGER,
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      initialBalance: DataTypes.DECIMAL(10,2),
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    }, {
      tableName: 'accounts',
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Team, { foreignKey: 'team_id', as: 'team' });
  }
}

module.exports = Account;