var numbers = [ 10, 20, 30 ];
var sum = 0;

// classic es5 forLoop
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
'---'
// es6 .reduce
// intitial value is 0 (the second argument passed to .reduce after the function)
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
