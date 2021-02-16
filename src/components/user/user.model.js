module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    firebaseId: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preferences: DataTypes.JSONB
  }, {
    underscored: true,
    timestamps: true,
    tableName: 'users'
  });

  return User;
};