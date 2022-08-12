const fs = require('fs')
const path = require('path')
const NOTNOTEFILE = ['images','.vitepress',]

/*
* 根据路径获取文件列表
*/
function getFileList(path){
  return new Promise((res, rej)=>{
    fs.readdir(path, (err, files)=>{
      if(err){
        rej(err)
      }else{
        //过滤掉不是笔记的文件夹
        res(files.filter(name => !NOTNOTEFILE.includes(name)))
      }
    })
  })
}
async function getSidebar() {
  //获取最外层目录
  const files = await getFileList(path.join(__dirname,'../')) || []
  const files1 = files.map(name => {
    return {
      text: name,
      collapsible: true,
      collapsed: true,
      items:[]
    }
  });
  //根据每一个外层目录获取子目录 赋值给items
  for(let i = 0; i < files1.length; i++){
    const element = files1[i];
    const items = await getFileList(path.join(__dirname,'../',files1[i].text)) || []
    files1[i].items = items.map(el=>{
      return { 
        text: el.slice(0,-3), 
        link: `/${files1[i].text}/${el}`
      }
    })
  }
  return files1
}

module.exports = async function(){
  const data = await getSidebar()
  return new Promise((res, rej)=>{
    fs.writeFile(path.join(__dirname,'../.vitepress/sidebar.json'),JSON.stringify(data,"","\t"),'utf8',function(err){
      if(err){
        rej('sidebar.json生成失败 '+__filename)
      }else{
        res('生成成功')
      }
    })
  })
}





