const printController = require('../controllers/printController')
const multer = require('../middlewares/multerMiddleware')
const router = require('express').Router()

router.post('/page', multer.single('file'), printController.calculatePages)

router.post('/', multer.single('file'), printController.handlePrint)

module.exports = router
