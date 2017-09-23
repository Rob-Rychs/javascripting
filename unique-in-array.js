const unique = array => 
array.reduce((pre, curent) => {
  if (pre.indexOf(curent) === -1)
    pre.push(curent);
  return pre;
}, [])

// this solution works 1.5x faster than with a filter

// For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
[1, 2, 3, 4]
// Hint: try to Use the 'reduce' and 'find' helpers.  