// Checks if the given argument is a native boolean element.

// Use typeof to check if a value is classified as a boolean primitive.

const isBoolean = val => typeof val === 'boolean';
// isBoolean(null) -> false
// isBoolean(false) -> true