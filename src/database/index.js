const Sequelize = require('sequelize').Sequelize;
const dbConfig = require('../config/database');

const User = require('../models/User');
const Team = require('../models/Team');
const Account = require('../models/Account');

const connection = new Sequelize(dbConfig);

User.init(connection);
Team.init(connection);
Account.init(connection);

User.associate(connection.models);
Team.associate(connection.models);
Account.associate(connection.models);

module.exports = connection;