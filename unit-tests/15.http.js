const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("你好世界\n")
})

server.listen(port, () => {
  console.log(`浏览器请求地址 http://127.0.0.1:${port}`)
})