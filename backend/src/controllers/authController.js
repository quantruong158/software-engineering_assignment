const bcrypt = require("bcrypt"); // hash password
const jwt = require("jsonwebtoken");
const authService = require("../controllers/authService");
const authController = {
    //Login
    loginUser: async(req,res)=>{
        try{
            const user = await authService.findOneuser({username: req.body.username});
            if(!user){
                res.status(404).json("wrong username!");
            }
            const realPassword = await authService.servicebcrypt(
                req.body.password,
                user.password
            )
            if(!realPassword){
                res.status(404).json("wrong password!");
            }
            // if(user && realPassword){
            //     const accessToken = jwt.sign({
            //         id: user.id,
            //         adminSPSO: user.adminSPSO
            //     },
            //     process.env.JWT_ACCESS_KEY,
            //     {expiresIn: "30d"}
            //     );
            //     const {password, ...others} = user._doc;
            //     res.status(200).json({...others,accessToken});
            // }
        }catch(err){
            res.status(500).json(err);
        }
    },
    //Logout
    logoutUser: async(req,res)=>{
        try{
            res.status(200).json("logout success");
        }catch(err){
            res.status(500).json(err);
        }
    }
}

module.exports = authController;