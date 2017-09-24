// es5 using string concatenation
function getMessage() {
  const year = new Date().getFullYear();
  
  return "The year is " + year;
}

getMessage();

'---'

// es6 using template strings
function getMessage() {
  const year = new Date().getFullYear();
  
  return `The year is ${year}`;
}

getMessage();

// es6 above refactored further
function getMessage() {
  return `The year is ${new Date().getFullYear()}`;
}