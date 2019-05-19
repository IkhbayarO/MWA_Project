var users = require("../models/usersModel");

//1. get all products
exports.getAllProducts = (req, res) => {
    users.find().select('products').exec((err, product)=>{
        try{
            res.status(200).json({message: "success", data: product})
        }catch (e) {
            throw e;
            res.status(400).json({message: "fail"});
        }
    });
};

//2. get products by category
exports.getProductByCategory = (req, res) => {
    var name = req.body.name;
    users.find().where("products.category").equals(name).select("products").exec((err, product)=>{
        try{
            res.status(200).json({message: "success", data: product})
        }catch (e) {
            throw e;
            res.status(400).json({message: "fail"});
        }
    })
};

//3. get products by user id
exports.getProductsByUserId = (req, res) => {
    var id = req.params.id;
    users.find().where(_id).equals(id).select('products').exec( (err, product) => {
        try{
            res.status(200).json({message: "success", data: product})
        }catch (e) {
            throw e;
            res.status(400).json({message: "fail"});
        }
    });
};

//4. get product by product id
exports.getProductByID = (req, res) => {
    const pId = req.params.id;

    users.findById(pId, (err, product)=>{
        try{
            res.status(200).json({message: "success", data: product});
        }catch (e) {
            throw e;
            res.status(500).json({message: "fail"});
        }
    });
};

//5. update product
exports.updateProduct = (req, res) => {
    var pId = req.params.id
    var product = new Product({
        id: pId,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        isAvailable: req.body.isAvailable,
        image: req.body.image,
        description: req.body.description
    });

    users.findOneAndUpdate({'products._id': pId}, {'products.$': product}, (err) => {
        try {
            res.status(201).json({message: "success"});
        } catch (e) {
            throw e;
            res.status(500).json({message: "fail"});
        }
    });
};

//6. add product
exports.addProduct = (req, res) => {
    var userId = req.params.id;

    var product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        isAvailable: req.body.isAvailable,
        image: req.body.image,
        description: req.body.description
    });

    users.find({}).where('_id').equals(userId).select('products').push(product).exec((err) => {
        try {
            res.status(201).json({message: "success"});
        } catch (e) {
            throw e;
            res.status(500).json({message: "fail"});
        }
    });
};



