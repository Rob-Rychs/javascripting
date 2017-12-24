// Returns the difference between two arrays.

// Create a Set from b, then use Array.filter() on a to only keep values not contained in b.

const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };

// difference([1,2,3], [1,2,4]) -> [3]
