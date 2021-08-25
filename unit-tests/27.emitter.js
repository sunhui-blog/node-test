const EventEmitter = require('events')
const door = new EventEmitter()

// 返回字符串（表示在当前 EventEmitter 对象上注册的事件）数组
door.eventNames()
console.log(door.eventNames()) // []

// 获取可以添加到 EventEmitter 对象的监听器的最大数量（默认为 10，但可以使用 setMaxListeners() 进行增加或减少）。
door.getMaxListeners()
console.log(door.getMaxListeners()) // 10

// 获取作为参数传入的事件监听器的计数：
door.listenerCount('open')
console.log(door.listenerCount('open')) // 0

door.listeners('open')
console.log(door.listeners('open')) // []

// door.off()

// 添加当事件被触发时调用的回调函数。
door.on('open', () => {
  console.log('打开')
})

// 添加当事件在注册之后首次被触发时调用的回调函数。 该回调只会被调用一次，不会再被调用。
door.once('my-event', () => {
  //只调用一次回调函数。
  console.log('once')
})

door.emit("open") // '打开'
door.emit("my-event") // 'once'

// 当使用 on 或 addListener 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 prependListener 则可以在其他监听器之前添加并调用。
// door.prependListener()

// 当使用 once 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 prependOnceListener 则可以在其他监听器之前添加并调用。
// door.prependOnceListener()

// 移除 EventEmitter 对象的所有监听特定事件的监听器：
// door.removeAllListeners()

// door.removeAllListeners('open')

// 移除特定的监听器。 可以通过将回调函数保存到变量中（当添加时），以便以后可以引用它：
// door.removeListener()

const doSomething = () => {
  console.log("doSomething")
}
door.on('open', doSomething)
door.emit("open")
door.removeListener('open', doSomething)

// 设置可以添加到 EventEmitter 对象的监听器的最大数量（默认为 10，但可以增加或减少）。
door.setMaxListeners(50)
console.log(door.getMaxListeners()) // 50
