const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

;
const authenticate = async(req,res,next)=>{
    try {
        const token = req.cookies.jwtoken;
        const  verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const userRoot = await User.findOne({_id: verifyToken._id, "tokens.token": token});

        if(!userRoot){ throw new Error("User not found")}
        req.token = token;
        req.userRoot = userRoot;
        req.userId = userRoot._id;

        next();
    } catch (error) {
        res.status(401).send("Unauthorised:No token provided");
        console.log(error)
    }
};
module.exports = authenticate