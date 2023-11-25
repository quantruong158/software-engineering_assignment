const balanceService = require('../services/balanceService')
const loggingService = require('../services/loggingService')
const fileService = require('../services/fileService')

const printService = {
  calculatePages: async (file, config) => {
    //!hard code return
    //!implement later
    return 5
  },

  print: async (studentID, file, printerID, pageAmount) => {
    const checkingBalance = await balanceService.checkBalance(
      studentID,
      pageAmount
    )
    if (!checkingBalance) {
      throw new Error('You do not have enough balance to print')
    }
    await balanceService.decrementBalance(studentID, pageAmount)

    // create file record and store file
    const fileID = await fileService.createFileRecord(
      studentID,
      file.originalname
    )
    fileService.storeFile(file, fileID)

    const startTime = new Date()
    const endTime = new Date(startTime) // Initialize endTime with startTime

    // Generate a random time difference between 1 and 5 minutes in milliseconds
    const randomTimeDifference = Math.floor(
      Math.random() * (5 * 60 * 1000 - 1 * 60 * 1000 + 1) + 1 * 60 * 1000
    )
    // Add the random time difference to endTime
    endTime.setTime(endTime.getTime() + randomTimeDifference)

    await loggingService.createLog(
      studentID,
      printerID,
      fileID,
      startTime,
      endTime,
      pageAmount
    )
  },
}
module.exports = { printService }
