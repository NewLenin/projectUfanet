const jwt=require('jsonwebtoken')
const{secret}=require('./config')
const token = require('./authController')

module.exports=function(req,res,next){
    
    if(req.method==="OPTIONS"){
        next()
    }
    const token = req.body
    
    try{
     
      if(!token){
          return res.status(403).json({message:"Пользователь не авторизован"})
      } 
      const decodeData=jwt.verify(token,secret)
      
    req.user=decodeData
    
    next()
    } catch(e){

    }
}