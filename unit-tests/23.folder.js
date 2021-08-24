const fs = require("fs")
const path = require("path")

// const folderName = "/Users/soul/github/node-test/unit-tests/test"
const folderName = "/Users/soul/github/node-test/unit-tests"

// 创建文件夹
// 使用 fs.mkdir() 或 fs.mkdirSync() 可以创建新的文件夹。

try {
  if(!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (error) {
  console.log(error)
}

// 读取目录的内容
// 使用 fs.readdir() 或 fs.readdirSync() 可以读取目录的内容
// console.log(fs.readdirSync(folderName)) // ['10.timer.js','11.callback.js',...]
// 可以获取完整的路径：
fs.readdirSync(folderName).map(fileName => {
  console.log(path.join(folderName, fileName)) // /Users/soul/github/node-test/unit-tests/10.timer.js
  return path.join(folderName, fileName) 
})

// 也可以过滤结果以仅返回文件（排除文件夹）：
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}

const datas = fs.readdirSync(folderName).map(fileName => {
  return path.join(folderName, fileName)
}).filter(isFile)

// console.log(datas)

// 重命名文件夹
// fs.rename('/Users/soul/github/node-test/unit', folderName, err => {
//   if (err) {
//     console.log(err)
//     return
//   }
// })

// fs.renameSync() 同步
try {
  // fs.renameSync(folderName, '/Users/soul/github/node-test/unit')
} catch (error) {
  console.log(error)
}

// fs.rmdir(folderName + "/test", err => {
//   console.log(err)
// })

try {
  fs.rmdirSync(folderName + "/test")
} catch (error) {
  console.log(error)
}

// npm install fs-extra
// remove() 方法
