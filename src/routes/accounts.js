const { express, app, serverless } = require('../app');
const AccountController = require('../controllers/AccountController');

const router = express.Router();

router.get('/', AccountController.getAll);
router.post('/', AccountController.create);


app.use('/accounts', router);

module.exports.handler = serverless(app);