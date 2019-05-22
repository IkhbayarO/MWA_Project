var jwt= require('jsonwebtoken')
const key ="potato2020182"


exports.sign = (user)=>{

    jwt.sign({user},key,{expiresin:"30 days"}, (err,token)=>{
        return token
    })
}


exports.verifyToken =function()
{
return (req,res,next)=>{

    //get auth header value
const bearerHeader = req.header['authorization']

//check if bearer is undefined or not 
if(typeof bearerHeader!=='undefined'){
     
    //split 
    const bearer = bearerHeader.split(' ')

    //get token from array
    const bearToken = bearer[1];

    //set the next middleware
      console.log(bearToken)
    req.token = bearToken
      
    next()

}else{

    //forbidden
    res.sendStatus(403)
}

}

}



module.exports.authCustomer = function(){

return (req,res,next)=>{
      console.log(req.token)
    jwt.verify(req.token,key,(err,authdata)=>{
        if(err){
            console.log(err)
            res.sendStatus(403)
        }else{
            console.log(authdata)
            req.customer = authdata
            next()
        }

    })
}

}
module.exports.authAdmin = function(){

  return (req,res,next)=>{

    jwt.verify(req.token,key,(err,authdata)=>{
        if(err){
            res.sendStatus(403)
        }else{
            console.log(authdata)
            req.customer = authdata
            next()
        }

    })
}

}
