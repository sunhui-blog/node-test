// node app.js name=joe

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

/**
 * output:
 * 0: /usr/local/bin/node
 * 1: /Users/sunhui/github/node-test/unit-tests/6.test.js
 * 2: name=joe 
*/

const args = process.argv.slice(2)
console.log(args[0]) // output: name=joe

const args = require('minimist')(process.argv.slice(2))
// 注：node 6.test.js --name=joe
console.log(args['name']) // output: joe
