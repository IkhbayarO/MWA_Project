let User = require('../models/usersModel');

exports.create = (request, response) => {
    let req = request.body.data;
    let userId = request.params.id;
    let cartId = userId + new Date().getTime();
    let product = {
        _id: req._id,
        name: req.name,
        category: req.category,
        price: req.price,
        isAvailable: req.isAvailable,
        image: req.image,
        description: req.description
    
    }
    console.log(product)
    let cart = {
        _id: cartId,
        product:product,
        date: new Date()
    }

    console.log(cart)
    User.findOneAndUpdate({_id: userId}, {$push: {cart: cart}},((error, success) => {
        if(error) {
            console.log("Error in findandupdate:  "+error);//throw error;
            response.status(500).json({Message: "Fail"});
        }
        else {
            response.status(200).json({Message: "Sucess", data: success});
        }
    }));


}

// if(user){
//     for(let i=0; i<user.length; i++){
//         for(let j=0; j<user[i].cart.length; j++){
//             if(user[i].cart[j]._id == cartId){
//                 user.cart.splice(j,1);
//                 break;
//             }
//         }
//     }
//     user.save((err) => {
//         if(err) {
//             throw err
//         } else {
//             response.status(200).json({Message: 'Successfully Updated'});
//         }
//     });
// }
exports.delete = (request, response) => {
    let req = request.body;
    let userId = req.userId;
    let cartId = req.cartId; 


    User.findOne().where('_id').equals(userId).exec((error, user) => {
        if (error) {
            response.status(500).json({message: "fail"});
        } else if (user) {
            var users = {'user': user};
            // find the delete uid in the favorites array
            var idx = user.cart ? user.cart.indexOf(cartId) : -1;
            // is it valid?
            if (idx !== -1) {
                // remove it from the array.
                user.cart.splice(idx, 1);
                // save the doc
                user.save(function(error) {
                    if (error) {
                        console.log(error);
                        response.status(500).json({message: "fail"});
                    } else {
                        // send the records
                        response.status(200).json({Message: "Successfully Deleted"});
                    }
            });
            // stop here, otherwise 404
            response.end();
            }
        }
        // send 404 not found
        response.send(null, 404);
    });
}

exports.get = (request, response) => {
    let userId = request.params.id
    User.find().where("_id").equals(userId).select('cart').exec((error, data) => {
        if(error){
            throw error;
            response.status(500).json({Message: "Fail"})
        }else{
            response.status(200).json({data:data});
        }


    });
}