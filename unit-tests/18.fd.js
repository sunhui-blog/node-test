const fs = require("fs")

fs.open("./test.json", "r", (err, fd) => {
  console.log(fd, "===fd===") // 27 ===fd===
})

// r+ 打开文件用于读写。
// w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
// a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。

// 使用 fs.openSync 方法打开文件，该方法会返回文件描述符（而不是在回调中提供）
try {
  const fd = fs.openSync("./test.json", "r")
  console.log(fd) // 27
} catch (error) {
  console.log(error)
}

// 一旦获得文件描述符，就可以以任何方式执行所有需要它的操作，例如调用 fs.open() 以及许多与文件系统交互的其他操作。
