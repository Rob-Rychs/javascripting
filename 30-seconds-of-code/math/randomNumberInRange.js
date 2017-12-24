// Returns a random number in the specified range.

// Use Math.random() to generate a random value, map it to the desired range using multiplication.

const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

// randomNumberInRange(2,10) -> 6.0211363285087005
