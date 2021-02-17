const response = (res, data) => {
  if (!data) {
    return res.status(500).send({
      msg: '服务器出现了意外',
      data: null
    })
  } else if (!data.length) {
    return res.send({
      msg: '资源不存在',
      data: null
    })
  }
  res.send({
    msg: null,
    data
  })
}

module.exports = response
