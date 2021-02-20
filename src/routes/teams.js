const { express, app, serverless } = require('../app');
const TeamController = require('../controllers/TeamController');

const router = express.Router();

router.post('/', TeamController.create);
router.post('/add-user', TeamController.addUser);


app.use('/teams', router);

module.exports.handler = serverless(app);