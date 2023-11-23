const { User } = require("../repositories/model");
const studentRepo = {
    getBalanceByID: async (studentID) => {
        const user = await User.findByID(studentID) ; 
        return user.balance;
    },
    decrementBalanceByID: async (studentID, amount) => {
        //const user = await User.findOne({ studentID });
        const user = await User.findByID(studentID) ;
        user.balance -= amount;
        await user.save();
        return;
    }
}

module.exports = studentRepo;