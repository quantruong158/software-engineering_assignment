const { User } = require("../repositories/model");
const studentRepo = {
    getBalanceByID: async (studentID) => {
        const user = await User.findOne({ studentID }); // find by username - attribute in the model.js
        // const user = await User.findByID(studentID) ; // find by ID - the auto ID created by mongoose
        return user.balance;
    },
    decrementBalanceByID: async (studentID, amount) => {
        const user = await User.findOne({ studentID });
        // const user = await User.findByID(studentID) ;
        user.balance -= amount;
        await user.save();
        return;
    }
}

module.exports = studentRepo;