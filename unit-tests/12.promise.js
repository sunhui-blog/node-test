let done = false

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = '这是创建的东西'
    resolve(workDone)
  } else {
    const why = '仍然在处理其他事情'
    reject(why)
  }
})

isItDoneYet.then((data) => {
  console.log(data, "===resolve===") // 这是创建的东西
}, (data) => {
  console.log(data, "===reject===") // 仍然在处理其他事情
})

const fs = require('fs')
const { resolve } = require('path')
const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8',(err, data) => { // readFile
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

getFile('./test.json')
.then((data) => console.log(data))
.catch(err => console.log(err))


// npm install node-fetch
// fetch('./test.json')
// .then((response) => {
//   console.log(response)
// })

// 成功响应（介于 200 和 299 之间）

new Promise((resolve, reject) => {
  throw new Error("error!")
}).catch((err) => {
  throw new Error(err)
}).catch((err) => {
  console.log(err)
})

// 编排 promise / Promise.all()
// Promise.race()

