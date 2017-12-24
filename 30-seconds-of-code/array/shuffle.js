// Randomizes the order of the values of an array.

// Use Array.sort() to reorder elements, using Math.random() in the comparator.

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// shuffle([1,2,3]) -> [2,3,1]