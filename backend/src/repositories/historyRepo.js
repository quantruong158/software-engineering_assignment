const { PrintingHistory } = require('../repositories/model')
const historyRepo = {
  //*create a new log
  getLogsByStudentId: async (studentId) => {
    try {
      const printingHistory = await PrintingHistory.find({
        studentID: studentId,
      })
        .populate('printerID', ['brandName', 'printerModel', 'location'])
        .populate('fileID', 'fileName')
        .select('startTime endTime numberOfPage')
      return printingHistory
    } catch (error) {
      console.error('Error fetching printing history:', error)
      throw error
    }
  },
  createLog: async (
    studentID,
    printerID,
    fileID,
    startPrintDate,
    endPrintDate,
    pageAmount
  ) => {
    try {
      const newLog = new PrintingHistory({
        studentID,
        printerID,
        fileID,
        startTime: startPrintDate,
        endTime: endPrintDate,
        numberOfPage: pageAmount,
      })
      const addLogToDatabase = await newLog.save() //return a promise
      return addLogToDatabase
    } catch (err) {
      console.log(err)
      throw err
    }
  },
}

module.exports = historyRepo
