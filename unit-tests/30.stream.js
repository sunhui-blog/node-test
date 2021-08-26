// 一个典型的例子是从磁盘读取文件。

// 使用 Node.js 的 fs 模块，可以读取文件，并在与 HTTP 服务器建立新连接时通过 HTTP 提供文件：
const http = require('http')
const fs = require('fs')

// const server = http.createServer(function(req, res) {
//   console.log(__dirname)
//   fs.readFile(__dirname + '/test.txt', (err, data) => {
//     res.end(data)
//   })
// })

// server.listen(4002)

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream(__dirname + '/test.txt')
//   stream.pipe(res)
// })

// server.listen(4002)

// 当要发送的数据块已获得时就立即开始将其流式传输到 HTTP 客户端，而不是等待直到文件被完全读取。

// pipe()
// 它获取来源流，并将其通过管道传输到目标流。
// 在来源流上调用它，在该示例中，文件流通过管道传输到 HTTP 响应。
// pipe() 方法的返回值是目标流，这是非常方便的事情，它使得可以链接多个 pipe() 调用，如下所示：

// const Stream = require('stream')
// const readableStream = new Stream.Readable()
// readableStream._read = () => {}

// const readableStream = new Stream.Readable({
//   read() {}
// })
// readableStream.push("hello")
// readableStream.push("world")

// // 如何创建可写流
// // 若要创建可写流，需要继承基本的 Writable 对象，并实现其 _write() 方法。
// const writableStream = new Stream.Writable()
// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   next()
// }

// process.stdin.pipe(writableStream)
const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')
