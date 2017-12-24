// Returns a random integer in the specified range.

// Use Math.random() to generate a random number and map it to the desired range, using Math.floor() to make it an integer.

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// randomIntegerInRange(0, 5) -> 2