import { print } from '../services/printService'

const handlePrint = async (req, res) => {
  const { studentId, printerId, amount } = req.body
  const file = req.file
  try {
    await print(studentId, file, printerId, amount)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { handlePrint }
