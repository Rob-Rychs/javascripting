const shout = require('./../functional-javascript/01hello-world.js');

test('properly returns a string', () => {
  expect(shout('Rob')).toBeCalledWith(expect.anything());
});
