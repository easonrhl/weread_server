const mysql = require('mysql')
const config = require('./db.config')

function db(sql) {
  let con = mysql.createConnection(config)
  con.connect()
  return new Promise((res, rej) => {
    con.query(sql, (err, result) => {
      if (err) rej(err.message)
      res(result)
      con.end()
    })
  })
}

module.exports = db
