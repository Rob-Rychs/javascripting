// Retuns number of vowels in provided string.

// Use a regular expression to count the number of vowels (A, E, I, O, U) in a string.

const countVowels = str => (str.match(/[aeiou]/ig) || []).length;

// countVowels('foobar') -> 3
// countVowels('gym') -> 0