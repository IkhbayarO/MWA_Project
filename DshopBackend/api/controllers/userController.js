var User = require('../models/usersModel')

exports.create = (request,response)=>{


     var cust = request.body

 var customer = new User({
    firstname:cust.firstname,
    lastname:cust.lastname,
    phone: cust.phone,
    email:cust.email,
    username:cust.username,
    password:cust.password
 })


//    customer.save((err)=>{
//       if(err) throw err;
  
//       console.log("User added Successfully!")
//      })


   response.status(200).json({message:'success',})

}

