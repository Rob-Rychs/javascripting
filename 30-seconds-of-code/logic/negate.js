// Negates a predicate function.

// Take a predicate function and apply not to it with its arguments.

const negate = func => (...args) => !func(...args);

// filter([1, 2, 3, 4, 5, 6], negate(isEven)) -> [1, 3, 5]
// negate(isOdd)(1) -> false