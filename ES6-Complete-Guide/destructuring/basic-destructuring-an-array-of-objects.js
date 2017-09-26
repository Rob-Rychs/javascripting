// destructuring an array of objects
const companies = [
  { name: 'Google', location: 'Moutain View' },
  { name: 'FaceBook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];
// es5
// var location = companies[0].location;
// location; // returns 'Mountain View'
// vs.
// es6 double destructuring, 
const [{location}] = companies;
location; //returns 'Mountain View'