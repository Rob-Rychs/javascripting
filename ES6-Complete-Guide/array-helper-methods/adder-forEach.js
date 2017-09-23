// Create an arrray of numbers
var numbers = [1,2,3,4,5];

// Creata a variable to hold the sum
var sum = 0;

// declare the iterator function instead of leaving it anonymous
function adder(number) {
  sum += number;
}
// loop over the array, calling the adder function on each value
numbers.forEach(adder); 

// print the sum variable
sum;