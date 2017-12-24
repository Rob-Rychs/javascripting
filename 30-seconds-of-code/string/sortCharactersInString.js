// Alphabetically sorts the characters in a string.

// Split the string using split(''), Array.sort() utilizing localeCompare(), recombine using join('').

const sortCharactersInString = str =>
  str.split('').sort((a, b) => a.localeCompare(b)).join('');

// sortCharactersInString('cabbage') -> 'aabbceg'