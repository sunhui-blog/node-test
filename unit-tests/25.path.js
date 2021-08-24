const path = require("path");

// path.basename()
// 返回路径的最后一部分。 第二个参数可以过滤掉文件的扩展名：
console.log(path.basename('./test')) // test
console.log(path.basename('./test.json')) // test.json
console.log(path.basename('./test.json', '.json')) // test

// path.dirname()
// 返回路径的目录部分：
console.log(path.dirname('./test')) // .
console.log(path.dirname('./test.json')) // .

// path.extname()
// 返回路径的扩展名部分。
console.log(path.extname('./test')) // ""
console.log(path.extname('./test.json')) // .json

// path.isAbsolute()
// 如果是绝对路径，则返回 true。
console.log(path.isAbsolute('/test')) // true
console.log(path.isAbsolute('./test')) // false

// path.join()
// 连接路径的两个或多个部分：
const name = 'joe'
console.log(path.join('/', 'users', name, 'notes.txt')) // /users/joe/notes.txt

// path.normalize()
// 当包含类似 .、.. 或双斜杠等相对的说明符时，则尝试计算实际的路径：
console.log(path.normalize('/users/joe/..//test.txt')) // /users/test.txt

// path.parse()
// root: 根路径。
// dir: 从根路径开始的文件夹路径。
// base: 文件名 + 扩展名
// name: 文件名
// ext: 文件扩展名
console.log(path.parse('/users/test.txt'))
// {
//   root: '/',
//   dir: '/users',
//   base: 'test.txt',
//   ext: '.txt',
//   name: 'test'
// }

// path.relative()
// 接受 2 个路径作为参数。 基于当前工作目录，返回从第一个路径到第二个路径的相对路径。
console.log(path.relative('/Users/joe', '/Users/joe/test.txt')) // test.txt
console.log(path.relative('/Users/joe', '/Users/joe/something/test.txt')) // something/test.txt

// path.resolve()
console.log(path.resolve('joe.txt')) // /Users/sunhui/github/node-test/unit-tests/joe.txt
// 通过指定第二个参数，resolve 会使用第一个参数作为第二个参数的基准：
console.log(path.resolve('tmp', 'joe.txt')) // /Users/sunhui/github/node-test/unit-tests/tmp/joe.txt
// 如果第一个参数以斜杠开头，则表示它是绝对路径：
console.log(path.resolve('/etc', 'joe.txt')) // /etc/joe.txt
