// Capitalizes the first letter of every word in a string.

// Use replace() to match the first character of each word and toUpperCase() to capitalize it.

const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

// capitalizeEveryWord('hello world!') -> 'Hello World!'
