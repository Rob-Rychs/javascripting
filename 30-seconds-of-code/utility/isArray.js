// Checks if the given argument is an array.

// Use Array.isArray() to check if a value is classified as an array.

const isArray = val => !!val && Array.isArray(val);
// isArray(null) -> false
// isArray([1]) -> true