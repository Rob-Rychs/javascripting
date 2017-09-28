const  { greetMe } = require('./../greetMe.js');

test('properly returns', () => {
  expect(greetMe('Rob')).stringContaining('Hello');
});

