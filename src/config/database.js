const Sequelize = require('sequelize').Sequelize;

const { DB_URI } = process.env;

const sequelize = new Sequelize(DB_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;