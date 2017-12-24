// Filters out the non-unique values in an array.

// Use Array.filter() for an array containing only the unique values.

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]