let User = require('../models/usersModel');

exports.get = (request, response) => {
    let userId = "5ce19f7731ad210ee85509a6";
    User.find().where("_id").equals(userId).select('sells').exec((error, data) => {
        if(error){
            throw error;
            response.status(500).json({Message: "Fail"});
        }
        response.json(data);
    });
}

exports.create = (request, response) => {
        let req = request.body;
        let userId = req.userId;
        let salesId = userId + new Date().getTime();
        let sales = {
            _id: salesId,
            product:
                {   _id: req.productId,
                    name: req.name,
                    category: req.category,
                    price: req.price,
                    isAvailable: false,
                    image: req.image,
                    description: req.description
                },
            date:new Date(),
            status:req.status,
            customer:{
                _id: req.customerId,
                firstName: req.firstName,
                lastName: req.lastName,
                Phone: req.Phone,
                email: req.email,
                address:{
                    street: req.street,
                    city: req.city,
                    state: req.state,
                    zip: req.zip
                },
                payment:req.payment
            }
        }
        User.findOneAndUpdate({_id: userId},{$push: {sells: sales}},{new: true, upsert: true},((error, success) => {
            if(error) {
                throw error;
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
        let salesId = req.salesId;
        let sales = {
            _id: salesId,
            product:
                {   _id: req.productId,
                    name: req.name,
                    category: req.category,
                    price: req.price,
                    isAvailable: false,
                    image: req.image,
                    description: req.description
                },
            date:new Date(),
            status:req.status,
            customer:{
                _id: req.customerId,
                firstName: req.firstName,
                lastName: req.lastName,
                Phone: req.Phone,
                email: req.email,
                address:{
                    street: req.street,
                    city: req.city,
                    state: req.state,
                    zip: req.zip
                },
                payment:req.payment
            }
        }
        User.findOneAndUpdate({'sells._id': salesId}, {'sells.$': sales}, (err, data) => {
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
    User.update({"_id": userId}, {$set: {"purchases": []}},
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