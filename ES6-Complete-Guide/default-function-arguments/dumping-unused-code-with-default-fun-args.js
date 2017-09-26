// Dumping Unused Code

// Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
// es5
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}
// es6 
function addOffset(style = {}) {
  style.offset = '10px';
  
  return style;
}