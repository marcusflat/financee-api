const { express, app, serverless } = require('../app');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ data: [
    { 
      id: '2',
      name: 'mercado',
    }
  ] })
});



app.use('/category', router);

module.exports.handler = serverless(app);