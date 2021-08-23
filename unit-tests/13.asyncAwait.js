const { rejects } = require("assert")
const { resolve } = require("path")

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve("do something"), 3000)
    resolve("do something")
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log(1)
doSomething()
console.log(2)

// 1 2 "do something" // 3 秒之后 / 不用setTimeout不需要等 3 秒

// 在任何函数之前加上 async 关键字意味着该函数会返回 promise。

const onFunction = async () => {
  return "test"
}

onFunction().then((res) => {
  console.log(res) // test
})

// 多个级联
const doSomethingNew = () => {
  return new Promise((resolve, reject) => {
    resolve("test new")
  })
}

const doSomethingNewTest = async () => {
  let test = await doSomethingNew()
  console.log(test)
}

doSomethingNewTest() // test new


