// Returns all the distinct values of an array.

// Use ES6 Set and the ...rest operator to discard all duplicated values.

const distinctValuesOfArray = arr => [...new Set(arr)];

// distinctValuesOfArray([1,2,2,3,4,4,5]) -> [1,2,3,4,5]