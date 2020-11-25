const {
  range, sum, reverseArray, reverseInPlace, arrayToList, listToArray, prepend, deepComparison,
} = require('../exercises/4-data-structures.js');

describe('Function sum', () => {
  test('should add correctly', () => {
    expect(sum([1, 2])).toBe(3);
  });
});
