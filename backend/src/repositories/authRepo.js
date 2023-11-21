const bcrypt = require("bcrypt"); // hash password
const { Printer, User } = require("../repositories/model");

const authRepo = {
    //Login
    findOnerepo: async(input)=>{
            const user = await User.findOne(input);
            
    },
    servicebcryptrepo: async(a,b)=>{
    const realPassword = await bcrypt.compare(
        a,
        b
    )
}
    
}

module.exports = authRepo;