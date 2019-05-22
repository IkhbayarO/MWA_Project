var express = require('express');
var router = express.Router();
var userController = require('../api/controllers/userController');
var jwt= require('jsonwebtoken')
const key ="potato2020182"

var verifyToken = require('../api/middlewares/auth/verifyToken')
var tokenDecoder = require("../api/middlewares/tokenDecoder")


/* GET users listing. */
router.get('/', verifyToken(),tokenDecoder(),  function(req, res, next) {
  userController.getAll(req,res)
});

router.post('/signup',(req,res,next)=>{
  userController.create(req,res)
})

router.post('/login',(req,res)=>{
  userController.login(req,res);
})

router.put('/update/address/:id',verifyToken(), (req,res)=>{
  userController.updateAddress(req,res)
})

module.exports = router;
