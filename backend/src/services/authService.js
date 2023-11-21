const authRepo = require("../controllers/authRepo");
const authService = {
    findOneuser: async(inputn)=>{
            const user = await authRepo.findOnerepo(inputn);
            return user;
    },
    servicebcrypt: async(a,b)=>{
    const realPassword = await authRepo.servicebcryptrepo(
        a,
        b
    )
    return realPassword;
}
}

module.exports = authService;