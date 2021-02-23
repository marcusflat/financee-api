const { express, app, serverless } = require('../app');
const TransactionTypeController = require('../controllers/TransactionTypeController');

const router = express.Router();

router.get('/', TransactionTypeController.get);
router.post('/', TransactionTypeController.create);


app.use('/types', router);

module.exports.handler = serverless(app);