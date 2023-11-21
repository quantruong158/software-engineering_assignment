const jwt = require("jsonwebtoken");

const middlewareController = {
    //verify token
    verifyToken: (req,res,next) => {
        const token = req.headers.token;
        if(token){
            // header: Bearer 123456  -> take '123456'
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err,user) => {
                if(err){
                    res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });

        }
        else{
            res.status(401).json("you're not authenticated !!");
        }
    },

    //verifyTokenAdmin
    verifyTokenAdmin: (req,res,next) => {
        middlewareController.verifyToken(req,res, () => {
            if(req.user.id == req.params.id || req.user.adminSPSO){
                next();
            }
            else {
                res.status(403).json("You're not allowed to do this");
            }
        });
    },
}

module.exports = middlewareController;