const companies = [
  'Google',
  'FaceBook',
  'Uber'
];
// es6 destructuring arrays
const [ name, name2, name3, name4 ] = companies;
name;
name2;
name3;
typeOf name4; // returns 'undefined'
// 
const [name, name2, ...rest] = companies;
rest; // the rest of the array values other than name