const { User } = require("../repositories/model");
const studentRepo = {
    getBalanceByID: async (studentID, amount) => {
        const user = await User.findOne({ studentID }); // find by username - attribute in the model.js
        // const user = await User.findByID(studentID) ; // find by ID - the auto ID created by mongoose
        const checkBalance = user.balance >= amount;
        return checkBalance;
    },
    decrementBalanceByID: async (studentID, amount) => {
        const user = await User.findOne({ studentID });
        // const user = await User.findByID(studentID) ;
        if (user.balance >= amount) {
            user.balance -= amount;
            await user.save();
            return true;
        } else {
            return false;
        }
    }
}

module.exports = studentRepo;