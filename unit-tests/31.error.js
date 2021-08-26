// throw "error"

// throw new Error('错误信息')

// class NotEnoughCoffeeError extends Error {
//   //...
// }
// throw new NotEnoughCoffeeError()

try {
  //代码行
} catch (e) {}

// 捕获未捕获的异常
// 如果在程序执行过程中引发了未捕获的异常，则程序会崩溃。
// 若要解决此问题，则监听 process 对象上的 uncaughtException 事件：
process.on('uncaughtException', err => {
  console.error('有一个未捕获的错误', err)
  process.exit(1) //强制性的（根据 Node.js 文档）
})

// Promise 的异常
// 使用 promise 可以链接不同的操作，并在最后处理错误：
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => console.error(err))

const doSomething1 = () => {
  //...
  try {
    //...
  } catch (err) {
    //... 在本地处理
    throw new Error(err.message)
  }
  //...
}

// 为了能够在本地（而不是在调用的函数中）处理错误，则可以断开链条，在每个 then() 函数中创建函数并处理异常：
doSomething1()
  .then(() => {
    return doSomething2().catch(err => {
      //处理错误
      throw err //打断链条
    })
  })
  .then(() => {
    return doSomething2().catch(err => {
      //处理错误
      throw err //打断链条
    })
  })
  .catch(err => console.error(err))

// async/await 的错误处理
// 使用 async/await 时，仍然需要捕获错误，可以通过以下方式进行操作：
async function someFunction() {
  try {
    await someOtherFunction()
  } catch (err) {
    console.error(err.message)
  }
}
