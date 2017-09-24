var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];
var user;

//es5 for loop implementation
for ( var i = 0; i< users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
 }
}  
// es6 .find - the find helper will iterate through the array until it finds the first element that matche sit's condiiotn and returns it
var user = users.find(function(user) {
  return user.name === 'Alex';
});

user;