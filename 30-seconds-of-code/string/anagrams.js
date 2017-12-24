// Generates all anagrams of a string (contains duplicates).

// Use recursion. For each letter in the given string, create all the partial anagrams for the rest of its letters. Use Array.map() to combine the letter with each partial anagram, then Array.reduce() to combine all anagrams in one array. Base cases are for string length equal to 2 or 1.

const anagrams = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str.split('').reduce((acc, letter, i) =>
    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
};

// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']
