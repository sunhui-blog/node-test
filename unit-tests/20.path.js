const path = require("path");
const text = './test.json'

console.log(path.dirname(text)) // .
console.log(path.basename(text)) // test.json
console.log(path.extname(text)) // .json

console.log(path.basename(text, path.extname(text))) // test

// 可以使用 path.join() 连接路径的两个或多个片段：
console.log(path.join('/', 'test', "test.json")) // /test/test.json
// 可以使用 path.resolve() 获得相对路径的绝对路径计算
console.log(path.resolve('test.json')) // /Users/sunhui/github/node-test/unit-tests/test.json
// 如果指定第二个文件夹参数，则 resolve 会使用第一个作为第二个的基础：
console.log(path.resolve('tmp', 'test.json')) // /Users/sunhui/github/node-test/unit-tests/tmp/test.json
// 如果第一个参数以斜杠开头，则表示它是绝对路径:
console.log(path.resolve('/etc', 'test.json')) // /etc/test.json
// path.normalize() 是另一个有用的函数，当包含诸如 .、.. 或双斜杠之类的相对说明符时，其会尝试计算实际的路径：
console.log(path.normalize('/users/../test.json')) // /test.json
