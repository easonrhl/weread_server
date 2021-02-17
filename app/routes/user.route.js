const express = require('express')
const controller = require('../controller/user.controller')
const router = express.Router()

router.post('/', controller.register)
router.get('/user', controller.validateUname)
router.get('/info', controller.getUserinfo)
router.post('/login', controller.login)
router.post('/name', controller.updateUname)
router.post('/bookcase', controller.updateBookcase)

module.exports = router
