// es6 spread operator handles any number of args and converts them into an array
function addNumbers(...numbers) {
  return numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5);