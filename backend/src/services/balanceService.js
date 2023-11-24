const studentRepo = require("../repositories/studentRepo");
const balanceService = {
    checkBalance: async (studentID, amount) => {
        const userBalance = await studentRepo.getBalanceByID(studentID);
        const checkBalance = userBalance >= amount;
        return checkBalance;
    },
    decrementBalance: async (studentID, amount) => {
        await studentRepo.decrementBalanceByID(studentID, amount);
    }
}

module.exports = balanceService;