const {
  min, isEven, countBs, countChar,
} = require('../exercises/3-functions');

describe('Chapter 3 Tests', () => {
  describe('Minimum', () => {
    test('Should return the smaller of two numbers', () => {
      expect(min(0, 1)).toBe(0);
      expect(min(1, 0)).toBe(0);
      expect(min(-100, 1000)).toBe(-100);
    });
  });
  describe('Function isEven (Recursion)', () => {
    test('Should work on positive whole numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(2)).toBe(true);
    });
    test('Extension: Should work on any integer', () => {
      expect(isEven(-1)).toBe(false);
      expect(isEven(-2)).toBe(true);
    });
  });
  describe('Bean Counting', () => {
    describe('Function countBs', () => {
      test('Should work for missing Bs', () => {
        expect(countBs('meh')).toBe(0);
      });
      test('Should work for basic cases', () => {
        expect(countBs('I\'m Batman!')).toBe(1);
      });
      test('Should be case sensitive', () => {
        expect(countBs('BbBbB')).toBe(3);
      });
    });
    describe('Function countChar', () => {
      test('Should work for non-present characters', () => {
        expect(countChar('team', 'I')).toBe(0);
      });
      test('Should work for basic cases', () => {
        expect(countChar('eloquent', 'e')).toBe(2);
      });
      test('Should be case sensitive', () => {
        expect(countChar('Teenage Mutant Ninja Turtles', 't')).toBe(3);
      });
    });
  });
});
