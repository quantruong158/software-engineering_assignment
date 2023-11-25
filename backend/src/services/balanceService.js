const studentRepo = require("../repositories/studentRepo");
const balanceService = {
    getBalanceByID: async (studentID) => {
        const balance = await studentRepo.getBalanceByID(studentID)
        return balance
    },
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