// Deep flattens an array.

// Use recursion. Use Array.concat() with an empty array ([]) and the spread operator (...) to flatten an array. Recursively flatten each element that is an array.

const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));

// deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]