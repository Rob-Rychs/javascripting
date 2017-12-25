// Extends a 3-digit color code to a 6-digit color code.

// Use Array.map(), split() and Array.join() to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form. String.slice() is used to remove # from string start since it's added once.

const extendHex = shortHex =>
  '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x+x).join('')

  // extendHex('#03f') -> '#0033ff'
// extendHex('05a') -> '#0055aa'