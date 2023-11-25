const balanceService  = require('../services/balanceService')

const getBalance = async (req, res) => {
  const studentId = req.params.id
  console.log(studentId)
  try {
    const balance = await balanceService.getBalanceByID(studentId)
    res.status(200).json({ balance })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

module.exports = { getBalance }
