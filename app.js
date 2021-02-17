const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: 'app/public/avatar' })

const port = 3000
const host = 'http://127.0.0.1'
//导出用户头像的baseUrl，给其他模块使用
module.exports = `${host}:${port}/api/avatar/`

const book = require('./app/routes/book.route')
const user = require('./app/routes/user.route')
const controller = require('./app/controller/user.controller')

const app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/avatar', express.static(__dirname + '/app/public/avatar'))
app.use('/api/book', book)
app.use('/api/user', user)
app.post('/api/upload', upload.single('file'), controller.updateAvatar)

app.set('host', host)
app.listen(port, () => {
  console.log(`${host}:${port}`)
})

