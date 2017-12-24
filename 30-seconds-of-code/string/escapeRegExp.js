// Escapes a string to use in a regular expression.

// Use replace() to escape special characters.

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// escapeRegExp('(test)') -> \\(test\\)