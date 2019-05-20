var User = require('../models/usersModel')

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

let cust = request.body

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
       
         response.status(500).json({message:'fail'})
      } 

      response.status(200).json({message:'success'})

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
   console.log(req.body.data)
   let login = req.body.data.email
   let pwd = req.body.data.password
   console.log(pwd)
   console.log(login)

   User.find().where('email').equals(login).where('password').equals(pwd).exec((err,data)=>{
      
      try {
          console.log(data.length)
         if(data.length>0)
         res.status(200).json({message:'success',data:data})
         else
         res.status(200).json({message:'fail'})

      } catch (e) {
         
      }

    
      
   })
}

