import food from '../accessing-array-values.js'

describe('food', () => {
  test('properly returns', () => {
    expect(food.toEqual(expect.arrayContaining(['apple', 'pizza', 'pear'])));
  });
});