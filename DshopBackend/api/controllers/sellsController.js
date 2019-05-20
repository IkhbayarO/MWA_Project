let User = require('../models/usersModel');

exports.get = (request, response) => {
    User.find().select('sells').exec((error, data) => {
        if(error){
            throw error;
            response.status(500).json({Message: "Fail"})
        }
        console.log("Back get called  " + JSON.stringify(data));
        response.json(data);
    });
}

exports.create = (request, response) => {
        let req = request.body;
        let userId = req.userId;
        let sales = {
            product:
                {   _id: req.productId,
                    name: req.name,
                    category: req.category,
                    price: req.price,
                    isAvailable: req.isAvailable,
                    image: req.image,
                    description: req.description
                },
            date:req.date,
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
        User.findByIdAndUpdate({_id: userId},{$push: {sells: sales}},((error, success) => {
            if(error) {
                throw error;
                response.status(500).json({Message: "Fail"});
            }
            else {
                response.status(500).json({Message: "Sucess", data: success});
            }
        }));
}

exports.update = (request, response) => {

}