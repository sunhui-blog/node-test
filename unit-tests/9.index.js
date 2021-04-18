const car = require('./9.car.js');
console.log(car); // output:{ brand: 'Ford', model: 'Fiesta' }

const items = require('./9.car.js');
console.log(items.car)

const car = require('./9.car.js').car;
console.log(car); // output: { brand: 'Ford', model: 'Fiesta' }