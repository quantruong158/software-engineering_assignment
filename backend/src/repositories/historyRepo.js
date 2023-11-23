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
    const newLog = new FileHistory(
      studentID,
      printerID,
      fileID,
      startPrintDate,
      endPrintDate,
      pageAmount
    )
    const addLogToDatabase = await newLog.save() //return a promise
    return addLogToDatabase
  },
}

module.exports = historyRepo
