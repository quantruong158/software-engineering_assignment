const bcrypt = require("bcrypt"); // hash password
const { User } = require("../repositories/model");

const authRepo = {
    //Login
    findOnerepo: async(input)=>{
            const user = await User.findOne(input);
            return user;
    },
    servicebcryptrepo: async(a,b)=>{
    const realPassword = await bcrypt.compare(
        a,
        b
    )
    return realPassword;
}
    
}

module.exports = authRepo;