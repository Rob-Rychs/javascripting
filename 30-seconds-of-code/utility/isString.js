// Checks if the given argument is a string.

// Use typeof to check if a value is classified as a string primitive.

const isString = val => typeof val === 'string';
// isString(10) -> false
// isString('10') -> true