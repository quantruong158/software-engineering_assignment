const { FileRecord, FileHistory } = require('../repositories/model')
const historyRepo = {
  //*create a new log
  createLog: async (
    studentID,
    printerID,
    fileID,
    startPrintDate,
    endPrintDate,
    pageAmount
  ) => {
    try {
      const newLog = new FileHistory(
        studentID,
        printerID,
        fileID,
        startPrintDate,
        endPrintDate,
        pageAmount
      );
      const addLogToDatabase = await newLog.save(); //return a promise
      return addLogToDatabase;
    }
    catch (err) { 
      console.log(err);
      throw err;
    }
  },
}

module.exports = historyRepo
