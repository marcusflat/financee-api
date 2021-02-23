const { express, app, serverless } = require('../app');
const TransactionStatus = require('../controllers/TransactionStatus');

const router = express.Router();

router.get('/', TransactionStatus.get);
router.post('/', TransactionStatus.create);


app.use('/statuses', router);

module.exports.handler = serverless(app);