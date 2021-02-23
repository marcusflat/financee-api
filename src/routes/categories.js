const { express, app, serverless } = require('../app');
const CategoryController = require('../controllers/CategoryController');

const router = express.Router();

router.get('/', CategoryController.get);
router.post('/', CategoryController.create);


app.use('/categories', router);

module.exports.handler = serverless(app);