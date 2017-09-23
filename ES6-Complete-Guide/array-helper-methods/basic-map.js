var numbers = [1,2,3]
// declare a new array to push changed data to so you don't modify original and avoid a whole class of bug
var doubledNumbers = [];

for ( var i = 0; i< numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// map returns a new result array and doesn't mutate original
// return is critical for most array helpers
var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubledNumbers;