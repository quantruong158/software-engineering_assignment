const historyRepo = require('../repositories/historyRepo')

const loggingService = {
  getLogsByStudentId: async (studentId) => {
    const logs = await historyRepo.getLogsByStudentId(studentId)
    return logs
  },
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
