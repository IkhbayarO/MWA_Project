var users = require("../models/usersModel");

//1. get all products
exports.getAllProducts = (req, res) => {
    users.find().select('products').exec((err, user) => {
        let prodList = new Array()

        user.forEach(usr=>{
            usr.products.filter(p=>{
                if(p.isAvailable==true){
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

    users.find().select('products').exec((err,products)=>{
       let productList = new Array()

        products.forEach(user=>{
           let prods = user.products.filter(p=>{
               console.log(p.category.toLocaleLowerCase())
               if(p.category.toLocaleLowerCase()==categoryName.toLocaleLowerCase()&& p.isAvailable==true){
                   productList.push(p)
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
        if(err){
           throw err
        }else{

           
            
            res.status(200).json({message: "success",data: user[0].products})
        
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
        id: pId,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        isAvailable: req.body.isAvailable,
        image: req.body.image,
        description: req.body.description
    };

    users.findOneAndUpdate({'products._id': pId}, {'products.$': product}, (err, p) => {
        try {
            res.status(201).json({message: "success", data: p});
        } catch (e) {
            throw e;
            res.status(500).json({message: "fail"});
        }
    });
};

//6. add product
exports.addProduct = (req, res) => {
    var userId = req.params.id;

    var product = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        isAvailable: req.body.isAvailable,
        image: req.body.image,
        description: req.body.description
    };

    users.findOneAndUpdate({_id: userId}, {$push: {products: product}},
        ((err, success) => {
            if (err) {
                throw err;
                res.status(500).json({message: "fail"});

            } else {
                res.status(201).json({message: "success", data: success});
            }
        }));
};



