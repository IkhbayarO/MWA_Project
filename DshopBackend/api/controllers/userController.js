var User = require('../models/usersModel')
var jwt = require('jsonwebtoken')
var signature  = require('../middlewares/auth/sign')
const key ="potato2020182"

exports.getAll = (req,res)=>{

   User.find().exec((err,data)=>{
      try {
         res.status(200).json({message:'success',data:data})
       
    } catch (err) {
       res.status(500).json({message:'fail'})
    }
   })
}

exports.create = (request,response)=>{

let cust = request.body.data
console.log(cust.password)
 let customer = new User({
    firstname:cust.firstname,
    lastname:cust.lastname,
    phone:cust.phone,
    email:cust.email,
    username:cust.username,
    password:cust.password
 })

 console.log(customer)
   customer.save((err)=>{
      if(err){
       throw err
         response.status(500).json({message:'fail'})
      }
      else{
          response.status(200).json({message:'success'})
      }



      // try {
      //      response.status(200).json({message:'success'})
         
      // } catch (err) {
      //    
      // }
     })

}


exports.checkUsername = (req,res)=>{

   let username = req.body.username

   User.find().where('username').equals(username).count().exec((err,count)=>{

      try {
         
         res.status(200).json({message:'success',data:count})

      } catch (err) {
         
      }
   })

}


exports.checkPhone = (req,res)=>{

   let phone = req.body.phone

   User.find().where('phone').equals(phone).count().exec((err,count)=>{

      try {
         
         res.status(200).json({message:'success',data:count})

      } catch (err) {
         
      }
   })

}

exports.checkEmail = (req,res)=>{

   let email = req.body.email

   User.find().where('email').equals(email).count().exec((err,count)=>{

      try {
         
         res.status(200).json({message:'success',data:count})

      } catch (err) {
         
      }
   })

}


exports.login = (req,res)=>{
   
 
   let login = req.body.data.email
   let pwd = req.body.data.password
   console.log(pwd)
   console.log(login)

   User.find().where('email').equals(login).where('password').equals(pwd).exec((err,data)=>{
      
      try {
          console.log(data.length)
         if(data.length>0){
            console.log("......"+data[0].firstname)
            let user = {
              firstname:data[0].firstname,
              lastname:data[0].lastname,
              username:data[0].username,
              phone:data[0].phone,
              type:data[0].type,
              email:data[0].email,
              id:data[0]._id,
              address:data[0].address
            }

            console.log(data[0])

            // console.log("........"+JSON.stringify(user)+"........")
            jwt.sign({user},'mwa',{expiresIn: '30day'}, (err,token)=>{
              
               res.status(200).json({message:'success',token:token})
           })
            
         }
         
         else
         res.status(200).json({message:'fail'})

      } catch (e) {
         
      }

    
      
   })
}



