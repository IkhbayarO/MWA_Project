let User = require('../models/usersModel');

exports.get = (request, response) => {
    User.find().select('purchases').exec((error, data) => {
        if(error){
            throw error;
            response.status(500).json({Message: "Fail"})
        }

        console.log("Back get called  " + JSON.stringify(data));
        response.json(data);
    });
}

exports.create = (request, response) => {
    console.log("request userid  "+request.body.userId);
    console.log("request id  "+request.body.id);
    console.log("request name  "+request.body.name);
    console.log("request category "+request.body.category);
    let req = request.body;
    console.log("body  "+request.body)
    let userId = req.userId;
    console.log("Id "+ id);
    let purchse = {
        product:
            {   
                _id: req.productId, 
                name: req.name,
                category: req.category,
                price: req.price,
                isAvailable: req.isAvailable,
                image: req.image,
                description: req.description
            },
        date: req.date,
        status: req.status
    };
    User.findByIdAndUpdate({_id: userId},{$push: {purchases: purchse}},((error, success) => {
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
    let req = request.body;
    let userId = req.userId;
    let purchseId = request._id;

    User.find().where('User._id').equals(userId).exec((error, user) => {
        if(error) {
            console.log("Error in finding user:  "+error);
            response.status(500).json({Message: "User doesn't exist"});
        }
        if(user.purchases !== null){
            let purchse = user.purchases;
            let found = false;
            for(let i=0; i<purchse.length; i++){
                if(purchseId === purchse[i]._id){
                    purchse[i].status = req.status;
                    found = true;
                    break;
                }
            }

            if(found){
                user.save((error) => {
                    if(error){
                        console.log("Error in updating purchase:  "+error);
                    }
                    else{
                        response.json({Message: "Successfully updated"});
                    }
                });
            }
        }
    })
}





/*let purchse = {
        id: String,
        userId: String,
        name: String,
        category: String,
        price: Number,
        isAvailable: Boolean,
        image: [String],
        description: String,
        date: Date,
        status:String,
    };*/

    //hilina.purcases.push

    /*let purchse = new User({
        purchases:[
            {
                product:
                    {   name: req.name,
                        category: req.category,
                        price: req.price,
                        isAvailable: req.isAvailable,
                        image: req.image,
                        description: req.description
                    },
                date: req.date,
                status: req.status
           }
        ]
    });*/