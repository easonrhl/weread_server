const service = require('../service/user.service')
const jwt = require('jsonwebtoken')
const secret = 'dbgsrmbxlj'

const register = async (req, res) => {
  let data = await service.insertUser(req.body)
  let token = jwt.sign({ username: req.body.username }, secret)
  data.token = token
  res.send(data)
}
const validateUname = async (req, res) => {
  let data = await service.validateUname(req.query)
  res.send(data)
}

const getUserinfo = async (req, res) => {
  let token = req.headers.authorization.slice(7)
  try {
    let { username } = jwt.verify(token, secret)
    let data = await service.findUserinfo(username)
    res.send(data)
  } catch (e) {
    console.log(e.message);
  }
}

const login = async (req, res) => {
  let data = await service.login(req.body)
  if (!data.result) {
    return res.send(data)
  }
  let token = jwt.sign({ username: req.body.username }, secret)
  data.token = token
  res.send(data)
}

const updateAvatar = async (req, res) => {
  let token = req.headers.authorization.slice(7)
  try {
    let { username } = jwt.verify(token, secret)
    let url = await service.updateAvatar(username, req.file.filename)
    res.send(url)
  } catch (e) {
    console.log(e.message);
  }
}

const updateUname = async (req, res) => {
  let token = req.headers.authorization.slice(7)
  try {
    let { username } = jwt.verify(token, secret)
    let data = await service.updateUname(username, req.body)
    if (data.result) {
      data.token = jwt.sign({ username: req.body.newname }, secret)
    }
    res.send(data)
  } catch (e) {
    console.log(e.message)
  }
}

const updateBookcase = async (req, res) => {
  let token = req.headers.authorization.slice(7)
  try {
    let { username } = jwt.verify(token, secret)
    let data = await service.updateBookcase(username, req.body)
    res.send(data)
  } catch (e) {
    console.log(e.message)
  }
}

module.exports = {
  register,
  validateUname,
  getUserinfo,
  login,
  updateAvatar,
  updateUname,
  updateBookcase
}