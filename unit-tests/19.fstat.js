const fs = require("fs")

fs.stat('./test.json', (err, stat) => {
  if(err) {
    console.error(err)
    return
  }
  console.log(stat)
})

// Node.js 也提供了同步的方法，该方法会阻塞线程，直到文件属性准备就绪为止：

try {
  const stats = fs.statSync('./test.json')
  console.log(stats.isFile()) // true
  console.log(stats.isDirectory()) // false
  console.log(stats.isSymbolicLink()) // false
  console.log(stats.size) // 15
} catch (error) {
  console.log(error)
}
