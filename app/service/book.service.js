const db = require('./db')

const findCategory = async () => {
  try {
    let sql = 'select * from category'
    let data = await db(sql)
    for (v of data) {
      sql = `select * from books where category = ${v.id} limit 3`
      let books = await db(sql)
      v.books = books
    }
    return data
  } catch (e) {
    return console.log(e)
  }
}

const findSubCategory = ({ id }) => {
  let sql = `select * from sub_category where pid = ${id}`
  return db(sql).catch(e => {
    console.log(e)
  })
}

const findTitle = ({ id }) => {
  let sql = `select name from category where id = ${id}`
  return db(sql).catch(e => {
    console.log(e)
  })
}

const findBooks = ({ id, sid, page }) => {
  let sql =
    sid === '0'
      ? `select * from books where category = ${id} limit ${(page - 1) * 20}, 20`
      : `select * from books where category = ${id} and sub_category = ${sid} limit ${(page - 1) * 20}, 20`
  return db(sql).catch(e => {
    console.log(e)
  })
}

const findTop = ({ page }) => {
  let sql = `select * from top_200 limit ${(page - 1) * 20}, 20`
  return db(sql).catch(e => {
    console.log(e)
  })
}

const findRecommend = ({ page }) => {
  let sql = `select * from books where star between 7 and 8 limit 100`
  return db(sql).catch(e => {
    console.log(e)
  })
}

const findSearchInfo = ({ info, page }) => {
  info = info.replace(/[^\u4E00-\u9FA5A-Za-z0-9\s]/g, '')
  if (!info) return []
  let sql = `select * from books where title like '%${info}%' or author like '%${info}%' limit ${(page - 1) * 20}, 20`
  return db(sql).catch(e => {
    console.log(e)
  })
}

const findSearchBooks = ({ id, sid, info }) => {
  info = info.replace(/[^\u4E00-\u9FA5A-Za-z0-9\s]/g, '')
  if (!info) return []
  let sql =
    sid === '0'
      ? `select * from books where category = ${id} and (title like '%${info}%' or author like '%${info}%') `
      : `select * from books where category = ${id} and sub_category = ${sid} and (title like '%${info}%' or author like '%${info}%')`
  return db(sql).catch(e => {
    console.log(e)
  })
}

const findBook = ({ id }) => {
  let sql = /top/.test(id)
    ? `select * from top_200 where bookid = ${id.split('top_')[1]}`
    : `select * from books where bookid = ${id}`
  return db(sql).catch(e => {
    console.log(e)
  })
}

module.exports = {
  findCategory,
  findSubCategory,
  findBooks,
  findTop,
  findTitle,
  findRecommend,
  findSearchInfo,
  findSearchBooks,
  findBook
}
