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
    )
    return createNewLog
  },
}

module.exports = loggingService