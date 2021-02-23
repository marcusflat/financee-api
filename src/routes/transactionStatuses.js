const { express, app, serverless } = require('../app');
const TransactionStatusController = require('../controllers/TransactionStatusController');

const router = express.Router();

router.get('/', TransactionStatusController.get);
router.post('/', TransactionStatusController.create);


app.use('/statuses', router);

module.exports.handler = serverless(app);