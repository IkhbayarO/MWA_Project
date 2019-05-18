var User = require('../models/usersModel')

exports.create = (request,response)=>{
 var customer = new User({
    firstname:"Christophe",
    lastname:'Habineza',
    phone:'65734343',
    email:'asda@gg.com',
    username:'sina',
    password:"123456"

 })

//  customer.save((err)=>{
//     if(err) throw err;

//     console.log("User added Successfully!")
//    })

//   customer.address= {
//       street:"1000N 4th Strees",
//      city:"Fairfield",
//      state: "Iowa",
//      zip:52557
//    }
  

//    customer.save((err)=>{
//       if(err) throw err;
  
//       console.log("User added Successfully!")
//      })


   response.end("Hello From User Controller")

}