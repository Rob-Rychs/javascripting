const numbers = [1,2,3];

// es6 .map using normal function syntax
numbers.map(function(number) {
  return 2 * number;
});

// es6 arrow function
numbers.map(number => 2 * number);