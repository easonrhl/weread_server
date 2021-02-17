const service = require('../service/book.service')
const response = require('./book.response')

const getCategory = async (req, res) => {
  let data = await service.findCategory()
  response(res, data)
}

const getSubCategory = async (req, res) => {
  let data = await service.findSubCategory(req.params)
  response(res, data)
}

const getBooks = async (req, res) => {
  let data = await service.findBooks(req.params)
  response(res, data)
}

const getTop = async (req, res) => {
  let data = await service.findTop(req.params)
  response(res, data)
}

const getTitle = async (req, res) => {
  let data = await service.findTitle(req.params)
  response(res, data)
}

const getRecommend = async (req, res) => {
  let data = await service.findRecommend(req.params)
  response(res, data.slice((req.params.page - 1) * 20, req.params.page * 20))
}

const getSearchInfo = async (req, res) => {
  let data = await service.findSearchInfo(req.query)
  response(res, data)
}

const getSearchBooks = async (req, res) => {
  let data = await service.findSearchBooks(req.query)
  response(res, data)
}

const getBook = async (req, res) => {
  let data = await service.findBook(req.params)
  response(res, data)
}

module.exports = {
  getCategory,
  getSubCategory,
  getBooks,
  getTop,
  getTitle,
  getRecommend,
  getSearchInfo,
  getSearchBooks,
  getBook
}
