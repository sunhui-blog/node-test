const car = require('./9.car.js');
console.log(car); // output:{ brand: 'Ford', model: 'Fiesta' }

const items = require('./9.car.js');
console.log(items.car)

const car = require('./9.car.js').car;
console.log(car); // output: { brand: 'Ford', model: 'Fiesta' }

// module.exports 和 export 之间有什么区别？

// 前者公开了它指向的对象。 后者公开了它指向的对象的属性。
