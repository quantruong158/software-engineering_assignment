const historyRepo = require('../repositories/historyRepo')

const loggingService = {
  createLog: async (
    studentID,
    printerID,
    fileID,
    startPrintDate,
    endPrintDate,
    pageAmount
  ) => {
    const createNewLog = await historyRepo.createLog(
      studentID,
      printerID,
      fileID,
      startPrintDate,
      endPrintDate,
      pageAmount
    );
    //*Promise error handle
    //* If there is error log error msg and createNewLog value change to undefined
    createNewLog.catch(function (error) { 
      console.log(error);
      createNewLog = undefined;
      throw error;
      }
    );
    return createNewLog;
  },
}

module.exports = loggingService