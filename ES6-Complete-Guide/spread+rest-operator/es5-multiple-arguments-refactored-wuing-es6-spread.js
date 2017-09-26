// Many, Many Arguments

// Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.
// es5
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// es6
function product(...numbs) {
  var numbers = [...numbs];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}