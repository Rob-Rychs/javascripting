// es5
const doubleEs5 = function(number) {
  return 2 * number;
}

// es6 single argument can drop parentheses
const doubleEs6 = number => 2 * number;

// example double argument
const doubleDoubleEs6 = (number1, number2) => {
  return 2 * number1 + 2 * number2;
}

doubleEs5(4); // returns 8
doubleEs6(7); // returns 14
doubleDoubleEs6(2,4); // returns 12 