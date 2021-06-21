setTimeout(() => {
  // 2 秒之后运行
  console.log("later 2000");
}, 2000)

setTimeout(() => {
  // 50 毫秒之后运行
  console.log("later 50");
}, 50)

const myFunction = (firstParam, secondParam) => {
  const sum = firstParam + secondParam;
  console.log(sum);
}

setTimeout(myFunction, 2000, 1, 2)

const timer = setTimeout(() => {
  console.log("111");
}, 50)

clearTimeout(timer);

setTimeout(() => {
  console.log('后者 ')
}, 0)

console.log(' 前者 ')

let i = 1;
setInterval(() => {
  // 每 2 秒运行一次
  console.log(i++)
}, 2000)

const timer = setInterval(() => {
  console.log("111")
}, 1000)

clearInterval(timer);

let i = 1;
const interval = setInterval(() => {
  i++;
  console.log(i);
  if (i === 5) {
    clearInterval(interval)
    return
  }
  // 否则做些事情
}, 1000)

// 使用setTimeout实现setInterval
let i = 1;
const myFunction = function() {
  i++;
  if (i < 5) {
    console.log(i)
    setTimeout(myFunction, 1000);
  }
}

setTimeout(myFunction, 1000)
