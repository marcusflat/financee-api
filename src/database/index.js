const Sequelize = require('sequelize').Sequelize;
const dbConfig = require('../config/database');

const User = require('../models/User');
const Team = require('../models/Team');

const connection = new Sequelize(dbConfig);

User.init(connection);
Team.init(connection);

User.associate(connection.models);
Team.associate(connection.models);

module.exports = connection;