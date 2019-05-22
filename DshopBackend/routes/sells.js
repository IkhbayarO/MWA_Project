let express = require('express');
let router = express.Router();
let sellsController = require('../api/controllers/sellsController');
var verifyToken = require('../api/middlewares/auth/verifyToken')
var authCust =require('../api/middlewares/auth/authCust')

// router.use(verifyToken())
// authCust()
//your codes here
router.get('/:id', (req, res) => {
    sellsController.get(req, res);
});


router.post('/', (req, res) => {
    sellsController.create(req, res);
});

router.put('/', (req, res) => {
    sellsController.update(req, res);
});

router.delete('/:userId', (req, res) => {
    sellsController.delete(req, res);
});

module.exports = router;