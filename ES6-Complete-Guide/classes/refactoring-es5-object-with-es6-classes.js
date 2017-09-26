// es5 car object
// function Car(options) {
//  this.title = options.title;
//}
//Car.prototype.drive = function() {
//  return 'vroom';
//}
//function Toyota(options) {
//  Car.call(this, options);
//	this.color = options.color;  
//}
//Toyota.prototype = Object.create(Car.prototype);
//Toyota.prototype.constructor = Toyota;

//Toyota.prototype.honk = function() {
//  return 'beep';
//}
//const toyota = new Toyota({ color: 'red', 
//                     title: 'Daily Driver'});
//'----'
//toyota.drive();
//toyota.honk();
//toyota;

// es6 magic
class Car {
  constructor(options) {
    this.title = options.title;
  }
  drive() { 
   return 'vroom' 
  }
}
const car = new Car({title: 'Toyota'});
car;
car.drive();