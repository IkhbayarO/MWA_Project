let User = require('../models/usersModel');

exports.get = (request, response) => {
    let userId = request.params.id
    User.find().where("_id").equals(userId).select('sells').exec((error, data) => {
        if(error){
            throw error;
            response.status(500).json({Message: "Fail"});
        }
        response.json(data);
    });
}

exports.create =  (request, response) => {
       let req = request.body;
      let product = {
           name:request.body.product.name,
            category: request.body.product.category,
            price:request.body.product.price,
            image: request.body.product.image,
            description: request.body.product.description,
            _id:request.body.product._id
    }
       let customerId = req.customerId
       let salesId;

        User.findOne().where('products._id').equals(product._id).exec((error, user) => {
            if(error) {
                throw error;
                response.status(500).json({Message: "Fail"});
            }
            else {
                User.findOne().where('_id').equals(customerId).exec((err, cust) => {
                    if(err){
                        throw err;
                        response.status(500).json({Message: "Fail"});
                    }
                    else {
                        salesId =  user._id + new Date().getTime(); 
                        let sales = {
                                        _id: salesId,
                                        product: product,
                                        date:new Date(),
                                        status:"pending",
                                        customer: user.customer,
                                            payment:req.payment
                                        }
                                    
                        user.sells.push(sales);
                        user.save((err) => {
                            if(err) {
                                throw err
                            } else {
                                response.status(200).json({Message: 'Successfully Updated'});
                            }
                        });
                    }
                });
            }
        });
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
