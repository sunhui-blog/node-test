// const buf = Buffer.from('Hey!')

// console.log(buf)

// const buf = Buffer.alloc(1024)

// console.log(buf)
//或
// const buf = Buffer.allocUnsafe(1024)

// console.log(buf)

// 访问 buffer 的内容

// Buffer（字节数组）可以像数组一样被访问：
const buf = Buffer.from('Hey!')
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121

// 这些数字是 Unicode 码，用于标识 buffer 位置中的字符（H => 72、e => 101、y => 121）。

console.log(buf.toString()) // Hey!

// 获取 buffer 的长度
// 使用 length 属性：
console.log(buf.length) // 4

// 迭代 buffer 的内容
for (const item of buf) {
  console.log(item) //72 101 121 33
}

// 更改 buffer 的内容
// 可以使用 write() 方法将整个数据字符串写入 buffer：
const buf2 = Buffer.alloc(4)
buf2.write('Hey!')
console.log(buf2)

// 就像可以使用数组语法访问 buffer 一样，你也可以使用相同的方式设置 buffer 的内容：
const buf3 = Buffer.from('Hey!')
buf3[1] = 111 //o
console.log(buf3.toString()) //Hoy!

// 复制 buffer
// 使用 copy() 方法可以复制 buffer：
const buf4 = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(4) //分配 4 个字节。
buf4.copy(bufcopy)
console.log(bufcopy.toString()) // Hey!

// 默认情况下，会复制整个 buffer。 另外的 3 个参数可以定义开始位置、结束位置、以及新的 buffer 长度：
const buf5 = Buffer.from('Hey!')
let bufcopy1 = Buffer.alloc(3) //分配 2 个字节。
buf5.copy(bufcopy1, 0, 0, 3)
console.log(bufcopy1.toString()) //'Hey'

// 切片 buffer
// 如果要创建 buffer 的局部视图，则可以创建切片。 切片不是副本：原始 buffer 仍然是真正的来源。 如果那改变了，则切片也会改变。
// 使用 slice() 方法创建它。 第一个参数是起始位置，可以指定第二个参数作为结束位置：
buf5.slice(0).toString() //Hey!
const slice = buf5.slice(0, 2)
console.log(slice.toString()) //He
buf5[1] = 111 //o
console.log(slice.toString()) //Ho
