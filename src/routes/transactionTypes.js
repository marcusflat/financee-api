const { express, app, serverless } = require('../app');
const TransactionTypes = require('../controllers/TransactionTypes');

const router = express.Router();

router.get('/', TransactionTypes.get);
router.post('/', TransactionTypes.create);


app.use('/types', router);

module.exports.handler = serverless(app);