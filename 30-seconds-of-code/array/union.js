// Returns every element that exists in any of the two arrays once.

// Create a Set with all values of a and b and convert to an array.

const union = (a, b) => Array.from(new Set([...a, ...b]));

// union([1,2,3], [4,3,2]) -> [1,2,3,4]