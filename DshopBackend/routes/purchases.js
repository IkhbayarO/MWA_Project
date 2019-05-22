let express = require('express');
let router = express.Router();
let purchseController = require('../api/controllers/purchasesController');

//import auth middleware 

var verifyToken = require('../api/middlewares/auth/verifyToken')
//router.use(verifyToken())



//your codes here
router.get("/",(req, res) => {
    purchseController.get(req, res);
});

router.post("/", (req,res) => {
    purchseController.create(req,res)
});

router.put("/", (req, res) => {
    purchseController.update(req, res);
});

router.delete("/:userId", (req, res) => { 
    purchseController.delete(req, res);
});

module.exports = router;