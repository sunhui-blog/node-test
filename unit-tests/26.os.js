const os = require('os')
console.log(os.arch()) // x64
console.log(os.cpus()) // 返回关于系统上可用的 CPU 的信息。
// 根据是使用大端序或小端序编译 Node.js，返回 BE 或 LE.
console.log(os.endianness()) // LE
// 返回代表系统中可用内存的字节数。
console.log(os.freemem()) // 44527775744
// 返回到当前用户的主目录的路径。
console.log(os.homedir()) // /Users/sunhui
// 返回主机名。
console.log(os.hostname()) // sunhuideMacBook-Pro.local
// 返回操作系统对平均负载的计算。
console.log(os.loadavg()) // [ 2.705078125, 2.12255859375, 1.826171875 ]
// 返回系统上可用的网络接口的详细信息。
console.log(os.networkInterfaces())
// 返回为 Node.js 编译的平台：
console.log(os.platform()) // darwin
// 返回标识操作系统版本号的字符串。
console.log(os.release()) // 19.4.0
// 返回指定的临时文件夹的路径。
console.log(os.tmpdir()) // /var/folders/06/gng092rx0rv_8g7crm_vgh400000gn/T
// 返回表示系统中可用的总内存的字节数。
console.log(os.totalmem()) // 68719476736
// 标识操作系统：
console.log(os.type()) // Darwin
// 返回自上次重新启动以来计算机持续运行的秒数。
console.log(os.uptime()) // 772219
// 返回包含当前 username、uid、gid、shell 和 homedir 的对象。
console.log(os.userInfo())
// {
//   uid: 501,
//   gid: 20,
//   username: 'sunhui',
//   homedir: '/Users/sunhui',
//   shell: '/bin/zsh'
// }
