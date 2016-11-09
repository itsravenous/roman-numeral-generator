const Suite = require('benchmark').Suite;
const Romans1 = require("./romans");
const Romans2 = require("./romans2");
const suite = new Suite();
const num = process.argv[2] || 1;

console.log(`Benchmarking conversion of ${num} to roman numeral`);
const romans1 = new Romans1();
const romans2 = new Romans2();
suite
.add('Romans I', function() {
  romans1.generate(num);
})
.add('Romans II', function() {
  romans2.generate(num);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });