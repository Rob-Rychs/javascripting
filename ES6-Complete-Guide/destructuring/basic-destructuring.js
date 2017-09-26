// es5
var savedFiled = {
  extension: '.jpg',
  name: 'report',
  size: 14040
};

function fileSummary1(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary1(savedFiled);
// es6
var savedFiled = {
  extension: '.jpg',
  name: 'report',
  size: 14040
};

function fileSummary2({name, extension, size}, {color}) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary2(savedFiled, {color: 'red'});
