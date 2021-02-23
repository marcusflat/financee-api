const Sequelize = require('sequelize').Sequelize;
const dbConfig = require('../config/database');

const User = require('../models/User');
const Team = require('../models/Team');
const Account = require('../models/Account');
const TransactionStatus = require('../models/TransactionStatus');
const TransactionType = require('../models/TransactionType');
const Category = require('../models/Category');

const connection = new Sequelize(dbConfig);

User.init(connection);
Team.init(connection);
Account.init(connection);
TransactionStatus.init(connection);
TransactionType.init(connection);
Category.init(connection);

User.associate(connection.models);
Team.associate(connection.models);
Account.associate(connection.models);
Category.associate(connection.models);

module.exports = connection;