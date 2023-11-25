const { printService } = require('../services/printService')

const calculatePages = async (req, res) => {
  const file = req.file
  const config = req.body.config
  const amount = await printService.calculatePages(file, config)
  res.status(200).json({ amount })
}

const handlePrint = async (req, res) => {
  const { studentId, printerId, amount } = req.body
  const pageAmount = parseInt(amount)
  const file = req.file
  try {
    await printService.print(studentId, file, printerId, pageAmount)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { calculatePages, handlePrint }
