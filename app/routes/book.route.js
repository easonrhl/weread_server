const express = require('express')
const router = express.Router()
const controller = require('../controller/book.controller')

router.get('/category', controller.getCategory)
router.get('/title/:id', controller.getTitle)
router.get('/recommend/:page', controller.getRecommend)
router.get('/category/:id', controller.getSubCategory)
router.get('/top/:page', controller.getTop)
router.get('/search', controller.getSearchInfo)
router.get('/search/category', controller.getSearchBooks)
router.get('/:id/:sid/:page', controller.getBooks)
router.get('/:id', controller.getBook)

module.exports = router