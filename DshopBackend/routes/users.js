var express = require('express');
var router = express.Router();
var userController = require('../api/controllers/userController');

var verifyToken = require('../api/middlewares/auth/verifyToken')

/* GET users listing. */
router.get('/', verifyToken(),  function(req, res, next) {
  userController.getAll(req,res)
});

router.post('/signup',(req,res,next)=>{
  userController.create(req,res)
})

router.post('/login',(req,res)=>{
  userController.login(req,res);
})

module.exports = router;
