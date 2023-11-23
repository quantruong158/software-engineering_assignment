const studentRepo = require("../repositories/studentRepo");
const balanceService = {
    checkBalance: async (studentID, amount) => {
        const userBalance = await studentRepo.getBalanceByID(studentID);
        const checkBalance = userBalance >= amount;
        return checkBalance;
    },
    decrementBalance: async (studenID, amount) => {
        await studentRepo.decrementBalanceByID(studentID, amount);
        return ;
    }
}

module.exports = balanceService;