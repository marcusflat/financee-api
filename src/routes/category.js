const { express, app, serverless } = require('../app');
const router = express.Router();
const sequelize = require('../config/database');
const User = require('../components/user/user.model');
const DataTypes = require('sequelize').DataTypes;

router.get('/', async (req, res) => {

  try {
    await sequelize.authenticate();
    User(sequelize, DataTypes).sync();
  } catch (e) {
    console.log(e)
  }
  
  res.json({ data: [
    { 
      id: '2',
      name: 'mercado',
    }
  ] })
});



app.use('/category', router);

module.exports.handler = serverless(app);