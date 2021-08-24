const fs = require("fs")
// fs.rename('name.json', 'hello.json', err => {
//   if (err) {
//     return console.error(err)
//   }
// })

try {
  fs.renameSync("hello.json", "name.json")
} catch (error) {
  console.error(error)
}
