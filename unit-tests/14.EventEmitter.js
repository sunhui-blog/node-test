const EventEmitter = require("events")
const event =  new EventEmitter()
event.on("start", () => {
  console.log("start")
})

event.on("start", number => {
  console.log("start", number)
})

event.on("start", (a, b, c) => {
  console.log("start", a, b, c)
})

event.emit("start") // "start"
event.emit("start", 10) // 10
event.emit("start", 1, 2, 3) // 1 2 3

event.on("end", () => {
  console.log("end")
})

event.emit("end") // "end"

event.on("once", () => {
  console.log("once")
})

event.emit("once")

// event.removeListener()

// console.log(event, "===event===")

// event.removeAllListeners()

// console.log(event, "===event===")

// event.off()

// console.log(event, "===event===")
