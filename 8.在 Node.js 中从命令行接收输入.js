// Node.js 提供了 readline 模块来执行以下操作：每次一行地从可读流（例如 process.stdin 流，在 Node.js 程序执行期间该流就是终端输入）获取输入。

// 如何使 Node.js CLI 程序具有交互性
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`你叫什么名字?`, name => {
  console.log(`你好 ${name}!`)
  readline.close()
})


const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "你叫什么名字?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`你好 ${answers['name']}!`)
})