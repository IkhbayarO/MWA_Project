let express = require('express');
let router = express.Router();
let sellsController = require('../api/controllers/sellsController');
var verifyToken = require('../api/middlewares/auth/verifyToken')
var authCust =require('../api/middlewares/auth/authCust')

router.use(verifyToken())
//your codes here
router.get('/', (req, res) => {
    sellsController.get(req, res);
});


router.post('/',authCust(), (req, res) => {
    sellsController.create(req, res);
});

router.put('/', authCust(), (req, res) => {
    sellsController.update(req, res);
});

module.exports = router;