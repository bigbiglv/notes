const createSideBar = require('./sidebar')

//生成sidebar
createSideBar().catch(err => {
  //文件生成失败
  throw new Error(err)
})