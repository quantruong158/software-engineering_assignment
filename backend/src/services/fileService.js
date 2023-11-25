const fileRepo = require('../repositories/fileRepo')
const fs = require('fs')
const path = require('path')

const fileService = {
  createFileRecord: async (userId, fileName) => {
    return await fileRepo.createFileRecord(userId, fileName)
  },
  storeFile: (file, fileId) => {
    const dir = 'src/uploads'
    // create folder if not exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }

    // get file extension
    const ext = path.extname(file.originalname)

    const filePath = `src/uploads/${fileId}.${ext}`
    const writeStream = fs.createWriteStream(filePath)
    writeStream.write(file.buffer)
    writeStream.end()
    writeStream.on('finish', () => {
      console.log('File uploaded')
    })
  },
}

module.exports = fileService
