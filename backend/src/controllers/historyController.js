const loggingService = require('../services/loggingService')

const getLogs = async (req, res) => {
  const studentId = req.params.id
  console.log(studentId)
  try {
    const logs = await loggingService.getLogsByStudentId(studentId)
    res.status(200).json(logs)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

module.exports = { getLogs }
