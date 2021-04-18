const x = 'x'
const y = 'y'
console.log(x, y)

console.log('我的%s已经%d岁', '猫', 2)

/**
 *
  %s 会格式化变量为字符串
  %d 会格式化变量为数字
  %i 会格式化变量为其整数部分
  %o 会格式化变量为对象
 *
*/

console.log('%o', Number)

console.clear() // 会清除控制台

const x = 1
const y = 2
const z = 3

// count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数：

console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)

// output: x 的值为 1 且已经检查了几次？: 1

console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)

// x 的值为 1 且已经检查了几次？: 2

console.count(
  'y 的值为 ' + y + ' 且已经检查了几次？'
)

// y 的值为 2 且已经检查了几次？: 1

const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})

// output: 橙子: 1  橙子: 2

apples.forEach(fruit => {
  console.count(fruit)
})

// output: 苹果: 1

// 打印堆栈踪迹 ??
const function2 = () => console.trace()
const function1 = () => function2()
function1()

// 计算耗时
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

// 测试
// doSomething(): 0.139ms

// 为输出着色:
console.log('\x1b[33m%s\x1b[0m', '你好')

const chalk = require('chalk')
console.log(chalk.yellow('你好'))

// 创建进度条
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
