// Mixing Rest and Spread

// Refactor the following to use the only the rest operator
// es5
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
// es6
function unshift(array, ...arrays) {
  return [...arrays].concat(array);
}