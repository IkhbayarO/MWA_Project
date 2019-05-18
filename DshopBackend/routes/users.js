var express = require('express');
var router = express.Router();
var userController = require('../api/controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  userController.create(req,res)
});

router.post('',(req,res,next)=>{
  userController.create(req,res)
})

module.exports = router;
