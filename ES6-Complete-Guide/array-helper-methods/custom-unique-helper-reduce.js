//   Hardmode: Custom 'Unique' Helper

// Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

// For example, given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]
// Hint: Use the 'reduce' and 'find' helpers.  
  
const unique1 = array => 
array.reduce((pre, curent) => {
  if (pre.indexOf(curent) === -1)
    pre.push(curent);
  return pre;
}, []);

// this solution works 1.5x faster than with a filter

// or this

function unique2(array) {
return array.reduce((prev, el) => {
prev.includes(el) ? prev : prev.push(el);
return prev;
}, []);
}