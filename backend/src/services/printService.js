const balanceService = require("../services/balanceService")
const loggingService = require("../services/loggingService")
const fileService = null // require(../services/fileService)

const printService = {
    calculatePages: async(file, config) => { 
        //!hard code return 
        //!implement later
        return 5;
    },
    
    print: async(studentID, file, printerID, pageAmount) => { 
        const checkingBalance = await balanceService.checkBalance(student_ID, page_amount);
        if (!checkingBalance) { 
            throw new Error("You do not have enough balance to print")
        }
        //*const create_file_record

        //*const store_file
        //!implement later
        const fileID = 0;
        const startTime = 0;
        const endTime = 0;


        const decreaseBalance = await balanceService.decrementBalance(studentID, pageAmount);
        const createLog = await loggingService.createLog(
            studentID,
            printerID,
            fileID,
            startTime,
            endTime,
            pageAmount
        )
    }

}