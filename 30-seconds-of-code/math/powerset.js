// Returns the powerset of a given array of numbers.

// Use Array.reduce() combined with Array.map() to iterate over elements and combine into an array containing all combinations.

const powerset = arr =>
  arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

// powerset([1,2]) -> [[], [1], [2], [2,1]]