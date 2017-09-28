const { greetMe } = require ('./../greetMe.js');

describe('greetMe()', () => {
  test('properly returns', () => {
    greetMe('Rob').expect.stringContaining('Hello');
  });
});
