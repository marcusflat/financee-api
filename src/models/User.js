const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      firebaseId: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      preferences: DataTypes.JSONB
    }, {
      tableName: 'users',
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Team, { through: 'users_teams', foreignKey: 'user_id', as: 'teams' });
  }
}

module.exports = User;