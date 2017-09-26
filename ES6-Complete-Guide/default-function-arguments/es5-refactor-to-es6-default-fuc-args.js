// Using Default Arguments

// Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
// e5
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}
// es6
function sum(a = 0, b = 0) {
  return a + b;
}