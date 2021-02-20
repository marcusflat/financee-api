const { Model, DataTypes } = require('sequelize');

class Team extends Model {
  static init(sequelize) {
    super.init({
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ownerId: DataTypes.INTEGER
    }, {
      tableName: 'teams',
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'owner_id', as: 'owner' });
    this.belongsToMany(models.User, { through: 'users_teams', foreignKey: 'team_id', as: 'users' });
  }
}

module.exports = Team;