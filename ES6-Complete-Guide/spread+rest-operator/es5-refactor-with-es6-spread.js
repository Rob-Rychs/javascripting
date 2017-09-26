// Spreadin' Arrays

// Refactor the following to use the spread operator.
// es5
function join(array1, array2) {
  return array1.concat(array2);
}
// es6
function join(array1, ...arrays) {
  return array1.concat(...arrays);
}