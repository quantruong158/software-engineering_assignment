const balanceService = require("../services/balanceService")
const loggingService = require("../services/loggingService")
const fileService = null // require(../services/fileService)

const printService = {
    calculate_pages: async(file, config) => { 
        //!hard code return 
        //!implement later
        return 5;
    },
    
    print: async(student_ID, file, printer_ID, page_amount) => { 
        const checking_balance = await balanceService.checkBalance(student_ID, page_amount);
        if (!checking_balance) { 
            throw new Error("You do not have enough balance to print")
        }
        //*const create_file_record

        //*const store_file
        //!implement later
        const file_ID = 0;
        const start_time = 0;
        const end_time = 0;


        const decrease_balance = await balanceService.decrementBalance(student_ID, page_amount);
        const create_log = await loggingService.createLog(
            student_ID,
            printer_ID,
            file_ID,
            start_time,
            end_time,
            page_amount
        )
    }

}