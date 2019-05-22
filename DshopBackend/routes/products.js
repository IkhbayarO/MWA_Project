var express = require('express');
var router = express.Router();
var productController = require('../api/controllers/productController');
var verifyToken = require('../api/middlewares/auth/verifyToken')
var multer=require("multer");
var uploader = multer({ dest: 'uploads/' });

//1. get all products (done)
router.get('/', (req, res) => {
    productController.getAllProducts(req, res);
});


//2. get products by category
router.get('/category/:name', (req, res) => {
    productController.getProductByCategory(req, res)
    console.log(req.params.name);
});

//3. get products by user id
router.get("/user/:id", (req, res) => {
    productController.getProductsByUserId(req, res);
});


//4. get product by product id (done)
router.get("/single/:id", (req, res) => {
    productController.getProductByID(req, res);
});

//5. update product
router.put("/:id",  (req, res)=>{
   productController.updateProduct(req, res);
});

//6. add product
router.post("/add/:id", (req, res)=>{
   productController.addProduct(req, res);
});

router.post("/upload",uploader.single('image'),(req,res)=>{
    console.log(req.file)

    res.json({upload:'yes'})
})

module.exports = router;