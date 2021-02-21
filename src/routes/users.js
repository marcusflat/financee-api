const { express, app, serverless } = require('../app');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:uuid', UserController.getOne);
router.post('/', UserController.create);


app.use('/users', router);

module.exports.handler = serverless(app);