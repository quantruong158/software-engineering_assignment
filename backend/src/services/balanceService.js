const studentRepo = require("../repositories/studentRepo");
const balanceService = {
    checkBalance: async (studentID, amount) => {
        const checkBalan = await studentRepo.getBalanceByID(studentID, amount);
        return checkBalan;
    },
    decrementBalance: async (studenID, amount) => {
        await studentRepo.decrementBalanceByID(studentID, amount);
        return ;
    }
}

module.exports = balanceService;