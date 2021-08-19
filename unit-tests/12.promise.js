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
