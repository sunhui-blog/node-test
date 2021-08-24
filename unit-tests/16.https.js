const https = require("https");
// error: Error: write EPROTO 4480150976:error:1408F10B:SSL routines:ssl3_get_record:wrong version number:../deps/openssl/openssl/ssl/record/ssl3_record.c:332:

const options = {
  hostname: "nodejs.cn",
  port: 443,
  path: "/todos",
  method: "GET"
}

const req = https.request(options, res => {
  console.log(`状态码：${res.statusCode}`)

  res.on('data', d => {
    console.log(d)
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error, "===error===")
})

req.end()


// const data = JSON.stringify({
//   todo: '做点事情'
// })

// const options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, res => {
//   console.log(`状态码: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.write(data)
// req.end()

