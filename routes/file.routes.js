const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')

var fileUpload = require('express-fileupload');
router.use(fileUpload({})); 
router.post('', authMiddleware, fileController.createDir)
router.post('/upload', authMiddleware, fileController.uploadFile)
router.get('/getfiles', authMiddleware, fileController.getFiles)


module.exports = router