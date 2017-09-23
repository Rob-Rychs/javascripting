// map is used to modify records in lists of data
// this is essentially a pluck, returns a record of an array object in new array
var cars = [
  { model: 'Buick', price:'CHEAP' },
   { model: 'Camaro',price: 'expensive' }
 ];

var prices = cars.map(function(car) {
  return car.price;
});

prices;