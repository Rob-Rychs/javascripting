var fs = require('fs');
// from example:
// fs.createReadStream('data.txt').pipe(process.stderr);


var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);