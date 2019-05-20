let express = require('express');
let router = express.Router();
let sellsController = require('../api/controllers/sellsController');

//your codes here
router.get('/', (req, res) => {
    sellsController.get(req, res);
});

router.post('/', (req, res) => {
    sellsController.create(req, res);
});

router.put('/', (req, res) => {
    sellsController.update(req, res);
});

module.exports = router;