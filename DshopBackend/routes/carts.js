var express = require('express');
var router = express.Router();

//your codes here

var verifyToken = require('../api/middlewares/auth/verifyToken')

router.use(verifyToken())

//your codes here
router.get("/",(req,res)=>{
    res.end("carts")
})

module.exports = router;