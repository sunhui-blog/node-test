const fs = require("fs")

// 同步 fs.writeFileSync()：
try {
  const data = fs.writeFileSync('./test.txt', "test")
  console.log(data)
} catch (error) {
  console.log(error)
}

fs.writeFile('./test.txt', "hello world", { flag: 'a+' }, err => {
  if (err) {
    console.error(err)
    return
  }
})

// r+ 打开文件用于读写。
// w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
// a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。

// http://nodejs.cn/api/fs.html#fs_file_system_flags

fs.appendFile('./test.txt', "new world", err => {
  console.log(err)
})

// appendFileSync
try {
  const data = fs.appendFileSync('./test.txt', "new day")
  console.log(data)
} catch (error) {
  console.log(error)
}
