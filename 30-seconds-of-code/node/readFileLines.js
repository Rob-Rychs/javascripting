// Returns an array of lines from the specified file.

// Use readFileSync function in fs node package to create a Buffer from a file. convert buffer to string using toString(encoding) function. creating an array from contents of file by spliting file content line by line (each \n).

const fs = require('fs');
const readFileLines = filename => fs.readFileSync(filename).toString('UTF8').split('\n');

/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
let arr = readFileLines('test.txt')
console.log(arr) // -> ['line1', 'line2', 'line3']
*/