// some stale es5...
function signUp(username, password, email, dateOfBirth, city) {
  //create a new user
}

// other code
// other code
// other code
// other code
// other code
// other code
// other code

signUp('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');

// es6 another way forward 

function signUp({ email, password, dateOfBirth, city, username}) {
  //create a new user
}
const user = {
  username: 'myname',
  pssword: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1900',
  city: 'New York'
};

signup(user);