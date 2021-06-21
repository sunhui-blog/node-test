const fs = require("fs");

// 异步版本
fs.readFile("./test.json", 'utf8', (err, data) => {
  if (err !== null) {
    console.log(err);
    return
  }
  console.log(data, "===data===");
})

// 同步版本 readFileSync
const json = JSON.parse(require('fs').readFileSync('./test.json', 'utf8'));
console.log(json);

/**
 * 注：require是同步的，并且只有一次读取文件，以下调用将从缓存中返回结果
 */
const test = require('./test.txt');
console.log(test);
