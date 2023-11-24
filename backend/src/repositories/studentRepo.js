const { User } = require('../repositories/model')
const studentRepo = {
  getBalanceByID: async (studentID) => {
    const user = await User.findByID(studentID)
    return user.balance
  },
  decrementBalanceByID: async (studentID, amount) => {
    try {
        const user = await User.findByID(studentID)
        user.balance -= amount
        await user.save()
    } catch (err) {
        throw err
    }
  },
}

module.exports = studentRepo
