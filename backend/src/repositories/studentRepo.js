const { User } = require('./model')
const studentRepo = {
  getBalanceByID: async (studentID) => {
    const user = await User.findById(studentID)
    return user.balance
  },
  decrementBalanceByID: async (studentID, amount) => {
    try {
        const user = await User.findById(studentID)
        user.balance -= amount
        await user.save()
    } catch (err) {
        throw err
    }
  },
}

module.exports = studentRepo
