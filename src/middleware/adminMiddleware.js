const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
const User = require("../models/user");



const adminMiddleware = async (req, res, next) =>{
  try{
    const {token} = req.cookies;
    if(!token){
      throw  new Error("Token is not present");

    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
     const {_id} = payload;
     if(!id){
      throw new Error("Invalid Token");
     }
     const result = await User.findById(_id);

     if(payload.role !== "admin"){
        throw new Error("Access denied . Admins only");
     }
     if(!result){
      throw new Error("User doesnot exist");
     }

     const isBlocked = await redisClient.exists(`token:${token}`);

     if(isBlocked){
      throw new Error("User is blocked. Please contact to the admin");
     }
     req.result = result; 
     next();

  } catch(err){
    res.status(400).send("Error: " + err.message);
  }
}

module.exports = adminMiddleware;