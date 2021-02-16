const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres');

// const Category = sequelize.define('Category', {
//   uuid: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//   },
//   firebaseId: DataTypes.STRING,
//   name: DataTypes.STRING,
//   preferences: DataTypes.JSONB
// }, {
//   underscored: true,
//   timestamps: true,
//   tableName: categories
// })