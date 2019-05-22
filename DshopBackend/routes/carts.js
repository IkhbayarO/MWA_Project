let express = require('express');
let router = express.Router();
let cartController = require('../api/controllers/cartContoller');

//your codes here

var verifyToken = require('../api/middlewares/auth/verifyToken')

//router.use(verifyToken())

//your codes here
router.get("/",(req,res)=>{
    cartController.get(req, res);
});

router.post("/",(req,res) => {
    cartController.create(req, res);
});

router.delete("/", (req, res) => {
    cartController.delete(req, res);
});

module.exports = router;