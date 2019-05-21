var express = require('express');
var router = express.Router();

var verifyToken = require('../api/middlewares/auth/verifyToken')

router.use(verifyToken())

//your codes here
router.get("/",(req,res)=>{
    res.end("categories")
})
module.exports = router;