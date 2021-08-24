const fs = require("fs")

fs.readFile('./test.json', 'utf8',(err, data) => { // readFile
  if (err) {
    console.log(err)
    return
  }
  console.log(data) // { test: 1 }
})

// 同步 fs.readFileSync()：

try {
  const data = fs.readFileSync('./test.json', 'utf8')
  console.log(data)
} catch (error) {
  console.log(error)
}

// fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中。
