// Returns an array of elements that appear in both arrays.

// Use filter() to remove values that are not part of values, determined using includes().

const similarity = (arr, values) => arr.filter(v => values.includes(v));

// similarity([1,2,3], [1,2,4]) -> [1,2]