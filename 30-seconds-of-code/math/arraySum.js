// Returns the sum of an array of numbers.

// Use Array.reduce() to add each value to an accumulator, initialized with a value of 0.

const arraySum = arr => arr.reduce((acc, val) => acc + val, 0);

// arraySum([1,2,3,4]) -> 10