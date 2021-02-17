const db = require('./db')
const fs = require('fs')
const path = require('path')
const baseUrl = require('../../app')

const validateUname = async ({ username }) => {
  let data = await db(`select * from user where username = '${username}'`)
  if (data.length) {
    return {
      result: false,
      msg: '用户名已存在'
    }
  }
  return {
    result: true,
    msg: '验证成功'
  }
}

const findUserinfo = async username => {
  let [userinfo] = await db(`select * from user_info where username = '${username}'`)
  userinfo.avatar && (userinfo.avatar = `${baseUrl}${userinfo.avatar}`)
  userinfo.bookcase && (userinfo.bookcase = JSON.parse(userinfo.bookcase))
  if (userinfo.bookcase && userinfo.bookcase.book.length) {
    let book = await db(`select bookid, cover, title from books where bookid in (${userinfo.bookcase.book})`)
    for (let v of book) {
      v.type = 'book'
    }
    userinfo.bookcase.book = [...book]
  }
  if (userinfo.bookcase && userinfo.bookcase.top.length) {
    let book = await db(`select bookid, cover, title from top_200 where bookid in (${userinfo.bookcase.top})`)
    for (let v of book) {
      v.type = 'top'
    }
    userinfo.bookcase.top = [...book]
  }
  userinfo.bookcase && (userinfo.bookcase = [...userinfo.bookcase.book, ...userinfo.bookcase.top])
  return userinfo
}

const insertUser = async ({ username, password }) => {
  try {
    let user = db(`insert into user values ('${username}', '${password}')`)
    let userinfo = db(`insert into user_info (username) values ('${username}')`)
    await user
    await userinfo
    let data = await findUserinfo(username)
    return {
      result: true,
      msg: '注册成功',
      data
    }
  } catch (e) {
    console.log(e)
    return {
      result: false,
      msg: '注册失败'
    }
  }
}

const login = async ({ username, password }) => {
  let [user] = await db(`select * from user where username = '${username}' and password = '${password}'`)
  if (!user) {
    return {
      result: false,
      msg: '用户名或密码错误'
    }
  }
  let userinfo = await findUserinfo(username)
  return {
    result: true,
    data: userinfo
  }
}

const updateAvatar = async (username, filename) => {
  let [{ avatar }] = await db(`select avatar from user_info where username = '${username}'`)
  if (avatar) {
    fs.unlinkSync(path.resolve(__dirname, `../public/avatar/${avatar}`))
  }
  await db(`update user_info set avatar = '${filename}' where username = '${username}'`).catch(e => {
    console.log(e)
  })
  return `${baseUrl}${filename}`
}

const updateUname = async (oldname, { newname }) => {
  let [user] = await db(`select * from user_info where username = '${newname}'`)
  if (user) {
    return {
      result: false,
      msg: '用户名已存在'
    }
  }
  let a = db(`update user set username = '${newname}' where username = '${oldname}'`)
  let b = db(`update user_info set username = '${newname}' where username = '${oldname}'`)
  await a
  await b
  return {
    result: true,
    msg: '修改成功'
  }
}

const updateBookcase = async (username, { id, key }) => {
  let [{ bookcase }] = await db(`select bookcase from user_info where username = '${username}'`)
  if (bookcase) {
    bookcase = JSON.parse(bookcase)
  } else {
    bookcase = { book: [], top: [] }
  }
  if (bookcase[key].includes(id)) {
    bookcase[key].splice(bookcase[key].indexOf(id), 1)
  } else {
    bookcase[key].push(id)
  }
  await db(`update user_info set bookcase = '${JSON.stringify(bookcase)}' where username = '${username}'`).catch(e => {
    console.log(e)
  })
  if (bookcase.book.length) {
    let book = await db(`select bookid, cover, title from books where bookid in (${bookcase.book})`)
    for (let v of book) {
      v.type = 'book'
    }
    bookcase.book = [...book]
  }
  if (bookcase.top.length) {
    let book = await db(`select bookid, cover, title from top_200 where bookid in (${bookcase.top})`)
    for (let v of book) {
      v.type = 'top'
    }
    bookcase.top = [...book]
  }
  return [...bookcase.book, ...bookcase.top]
}

module.exports = {
  insertUser,
  validateUname,
  findUserinfo,
  login,
  updateAvatar,
  updateUname,
  updateBookcase
}
