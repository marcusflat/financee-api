const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      teamId: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN
    }, {
      tableName: 'categories',
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Team, { through: 'teams', foreignKey: 'team_id', as: 'team' });
  }
}

module.exports = Category;