let User = require('../models/usersModel');
let sellsController = require('./sellsController').create;

exports.get = (request, response) => {
    let userId = request.params.id
    User.find().where("_id").equals(userId).select('purchases').exec((error, data) => {
        if(error){
            throw error;
            response.status(500).json({Message: "Fail"})
        }

        response.json(data);
    });
}

exports.create = (request, response) => {


    let req = request.body;
    let userId = req.customerId;
    let purchseId = userId + new Date().getTime();

    let purchse = {
        _id: purchseId,
        product: {
            name:request.body.product.name,
            category: request.body.product.category,
            price:request.body.product.price,
            image: request.body.product.image,
            description: request.body.product.description,
            _id:request.body.product._id
        },
        date: new Date(),
        status: "pending"
    }

    console.log(purchse)
    User.findOneAndUpdate({_id: userId}, {$push: {purchases: purchse}},((error, success) => {
        if(error) {
            console.log("Error in findandupdate:  "+error);
            response.status(500).json({Message: "Fail"});
        }
        else {
            sellsController(request, response);
        }
    }));
}

exports.update = (request, response) => {
    let req = request.body;
    let userId = req.userId;
    let purchseId = req.purchseId;
    
    let purchse = {
        _id: purchseId,
        product:
            {
                _id: req.productId, 
                name: req.name,
                category: req.category,
                price: req.price,
                isAvailable: false,
                image: [req.image],
                description: req.description
            },
        date: req.date,
        status: req.status
    };
    User.findOneAndUpdate({'purchases._id': purchseId}, {'purchases.$': purchse}, (err, data) => {
        try {
            response.status(200).json({message: "success", Data: data});
        } catch (e) {
            throw e;
            response.status(500).json({message: "fail"});
        }
    });

    // User.findOne().where('_id').equals(userId).select('purchases').exec((err,user)=>{
    //
    //     user.purchases.push(purchse)
    //     user.save((err)=>{
    //         if(err) throw err
    //         else
    //             res.status(200).json({message:'success'})
    //     })
    // })
} 



exports.delete = (request, response) => {
    let userId = request.params.userId;
    User.update({"_id": userId}, {$set: {"sells": []}},
        {new: true, upsert: true}, (error, success) =>{
            if(error){
                throw error;
                response.status(500).json({Message: "Fail"});
            }
            else{
                response.status(200).json({Message: "Successfully updated", Data: success});
            }
    });
}





