var express = require('express');
var router = express.Router();
var productController = require('../api/controllers/productController');

//1. get all products (done)
router.get('/', (req, res)=> {
    productController.getAllProducts(req, res);
});



//2. get products by category
router.get('/category',  (req, res)=> {
   productController.getProductByCategory(req, res)
});

//3. get products by user id
router.get("/user/:id", (req, res)=>{
   productController.getProductsByUserId(req, res);
});


//4. get product by product id (done)
router.get("/:id", (req, res)=>{
   productController.getProductByID(req, res);
});

//5. update product
router.put("/:id", (req, res)=>{
   productController.updateProduct(req, res);
});

//6. add product
router.post("/add/:id", (req, res)=>{
   productController.addProduct(req, res);
});




module.exports = router;