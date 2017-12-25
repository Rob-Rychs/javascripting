// Checks if the given argument is a symbol.

// Use typeof to check if a value is classified as a symbol primitive.

const isSymbol = val => typeof val === 'symbol';
// isSymbol('x') -> false
// isSymbol(Symbol('x')) -> true