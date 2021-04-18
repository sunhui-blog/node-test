const x = 'x'
const y = 'y'
console.log(x, y)

console.log('我的%s已经%d岁', '猫', 2)

console.log('%o', Number)

const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

const function2 = () => console.trace()
const function1 = () => function2()
function1()

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})

const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

const x = 'x'
const y = 'y'
console.log(x, y)

// 为输出着色
console.log('\x1b[33m%s\x1b[0m', '你好')

// npm install chalk
const chalk = require('chalk')
console.log(chalk.yellow('你好'))


// 创建进度条
// npm install progress
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
