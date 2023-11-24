const { FileRecord } = require('./model')

const fileRepo = {
  createFileRecord: async (userId, fileName) => {
    try {
      const fileRecord = new FileRecord({ userId, fileName })
      const { _id } = await fileRecord.save()
      return _id
    } catch (err) {
      throw err
    }
  },
}

module.exports = fileRepo
