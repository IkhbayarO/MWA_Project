var users = require("../models/usersModel");

//1. get all products
exports.getAllProducts = (req, res) => {
    users.find().select('products').exec((err, user) => {
        let prodList = new Array()

        user.forEach(usr => {
            usr.products.filter(p => {
                if (p.isAvailable == true) {
                    prodList.push(p)
                }
            })
        })

        res.json(prodList)
        // try {
        //     res.status(200).json({message: "success", data: product})
        // } catch (e) {
        //     throw e;
        //     res.status(400).json({message: "fail"});
        // }
    });
};

//2. get products by category
exports.getProductByCategory = (req, res) => {
    const categoryName = req.params.name;
    console.log(categoryName);

    // users.find({'products.$.category': categoryName}).select('products').exec((err, doc) => {
    //     res.status(200).json({message: "success", data: doc})
    // })

    users.find().select('products').exec((err, products) => {
        let productList = new Array()

        products.forEach(user => {
            let prods = user.products.filter(p => {
             if(p.category){
                if (p.category.toLocaleLowerCase() == categoryName.toLocaleLowerCase() && p.isAvailable == true) {
                    productList.push(p)
                }
             }
            });


        })

        res.status(200).json(productList)
    })
};


//3. get products by user id
exports.getProductsByUserId = (req, res) => {
    var id = req.params.id;
    users.find().where('_id').equals(id).select('products').exec((err, user) => {
        if (err) {
            throw err
        } else {


            res.status(200).json({message: "success", data: user[0].products})

        }

    });
};

//4. get product by product id
exports.getProductByID = (req, res) => {
    var pId = req.params.id;


    users.find().exec((err, data) => {
        let isHere = false;
        let product = null;
        data.forEach(user => {
            let prodList = user.products
            prodList.forEach(p => {
                console.log(p)
                if (p._id == pId) {
                    isHere = true;
                    product = p

                }

            })
        })

        if (isHere == false) {
            res.status(200).json({message: "success", data: null});
        } else {
            res.status(200).json({message: "success", data: product});
        }
    });


};

//5. update product
exports.updateProduct = (req, res) => {
    var pId = req.params.id
    var product = {

        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        isAvailable: req.body.isAvailable,

        description: req.body.description
    };

    // users.findOne({'products._id': pId}, {'products.$': product}, (err, p) => {
    //
    //     if(err){
    //         throw err
    //         res.status(500).json({message:'fail'})
    //     }else{
    //         p.name = name;
    //         p.category = category;
    //         p.price = price;
    //         p.isAvailable = isAvailable;
    //         p.description = description
    //
    //
    //     }


    users.findOne().where('products._id').equals(pId).exec((err, user) => {
        let products = new Array()
        user.products.forEach(p => {
            if (p._id == pId) {
                p.name = product.name;
                p.category = product.category;
                p.price = product.price;
                p.isAvailable = product.isAvailable;
                p.description = product.description
            }

            products.push(p)

        })

        user.products = products

        user.save((err) => {
            if (err) {
                throw err
                res.status(500).json({message: "fail"});
            } else {
                res.status(200).json({message: "success"});
            }

        })
    });


};

//6. add product
exports.addProduct = (req, res) => {
    var userId = req.params.id;
    console.log(req.body)
    console.log(req.file)
    var product = {

        name: req.body.data.name,
        category: req.body.data.category,
        price: req.body.data.price,
        isAvailable: true,
        image: ["https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803810_01.jpg"],
        description: req.body.data.description
    };

    console.log(product)

    users.findOne().where('_id').equals(userId).select('products').exec((err, user) => {

        user.products.push(product);

        user.save((err) => {
            if (err) {
                throw err
                res.sendStatus(500)
            } else {

                res.status(200).json({message:'success'})
            }

        })
    })


}



