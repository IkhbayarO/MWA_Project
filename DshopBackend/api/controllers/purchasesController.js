let User = require('../models/usersModel');

exports.get = (request, response) => {
    let userId = "5ce19f7731ad210ee85509a6";
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
    let userId = req.userId;
    let purchseId = userId + new Date().getTime();
    let purchse = {
        _id: purchseId,
        product:
            {   
                _id: req.productId, 
                name: req.name,
                category: req.category,
                price: req.price,
                isAvailable: false,
                image: req.image,
                description: req.description
            },
        date: new Date(),
        status: req.status
    };
    User.findOneAndUpdate({_id: userId}, {$push: {purchases: purchse}},{new: true, upsert: true},((error, success) => {
        if(error) {
            console.log("Error in findandupdate:  "+error);//throw error;
            response.status(500).json({Message: "Fail"});
        }
        else {
            response.status(200).json({Message: "Sucess", data: success});
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
                image: req.image,
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





