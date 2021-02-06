const {
  triangle, fizzBuzz, fizzBuzzExtension, chessboard, chessboardExtension,
} = require('../exercises/2-program-structure');

describe('Chapter 2 Tests', () => {
  const spy = jest.spyOn(console, 'log');
  beforeEach(() => {
    spy.mockReset();
  });

  describe('Looping a Triangle', () => {
    beforeEach(() => {
      triangle();
    });
    test('should make seven calls to console.log', () => {
      expect(spy.mock.calls.length).toBe(7);
    });
    test('should correct form the triangle', () => {
      expect(spy.mock.calls.join('\n')).toBe('#\n##\n###\n####\n#####\n######\n#######');
    });
  });
  describe('FizzBuzz', () => {
    const expected = (() => {
      const res = [];
      for (let i = 1; i < 101; i++) {
        if (!(i % 3)) res.push('Fizz');
        else if (!(i % 5)) res.push('Buzz');
        else res.push(i);
      }
      return res.join('\n');
    })();

    beforeEach(() => {
      fizzBuzz();
    });
    test('should make 100 calls to console.log', () => {
      expect(spy.mock.calls.length).toBe(100);
    });
    test("Should console.log 'Fizz', 'Buzz', or the number when appropriate", () => {
      expect(spy.mock.calls.join('\n')).toBe(expected);
    });
  });
  describe('FizzBuzz Extension', () => {
    const expected = (() => {
      const res = [];
      for (let i = 1; i < 101; i++) {
        if (!(i % 15)) res.push('FizzBuzz');
        else if (!(i % 3)) res.push('Fizz');
        else if (!(i % 5)) res.push('Buzz');
        else res.push(i);
      }
      return res.join('\n');
    })();

    beforeEach(() => {
      fizzBuzzExtension();
    });
    test('should make 100 calls to console.log', () => {
      expect(spy.mock.calls.length).toBe(100);
    });
    test("Should console.log 'Fizz', 'Buzz', 'FizzBuzz', or the number when appropriate", () => {
      expect(spy.mock.calls.join('\n')).toBe(expected);
    });
  });
  describe('Chessboard', () => {
    const expectedA = new Array(4).fill(' # # # #\n# # # # ').join('\n');
    const expectedB = new Array(4).fill('# # # # \n # # # #').join('\n');
    beforeEach(() => {
      chessboard();
    });
    test('Should make a single call to console.log', () => {
      expect(spy.mock.calls.length).toBe(1);
    });
    test('Should accurately create an 8x8 chessboard', () => {
      const actual = spy.mock.calls[0][0];
      try {
        expect(actual).toBe(`${expectedA}\n`);
      } catch (error) {
        try {
          expect(actual).toBe(expectedA);
        } catch (err) {
          try {
            expect(actual).toBe(`${expectedB}\n`);
          } catch (e) {
            expect(actual).toBe(expectedB);
          }
        }
      }
    });
  });
  describe('Chessboard Extension', () => {
    test('Should work for small boards', () => {
      chessboardExtension(1);
      const actual = spy.mock.calls[0][0];
      try {
        expect(actual).toBe(' \n');
      } catch (error) {
        try {
          expect(actual).toBe(' ');
        } catch (err) {
          try {
            expect(actual).toBe('#\n');
          } catch (e) {
            expect(actual).toBe('#');
          }
        }
      }
    });
    test('Should work for a standard 8x8 board', () => {
      const expectedA = new Array(4).fill(' # # # #\n# # # # ').join('\n');
      const expectedB = new Array(4).fill('# # # # \n # # # #').join('\n');
      chessboardExtension(8);
      const actual = spy.mock.calls[0][0];
      try {
        expect(actual).toBe(`${expectedA}\n`);
      } catch (error) {
        try {
          expect(actual).toBe(expectedA);
        } catch (err) {
          try {
            expect(actual).toBe(`${expectedB}\n`);
          } catch (e) {
            expect(actual).toBe(expectedB);
          }
        }
      }
    });
    test('Should work for a giant boards', () => {
      const rowA = `${' #'.repeat(50)}\n`;
      const rowB = `${'# '.repeat(50)}\n`;
      const expectedA = (rowA + rowB).repeat(50);
      const expectedB = (rowB + rowA).repeat(50);
      chessboardExtension(100);
      const actual = spy.mock.calls[0][0];
      try {
        expect(actual).toBe(expectedA);
      } catch (error) {
        try {
          expect(actual).toBe(expectedA.slice(0, -1));
        } catch (err) {
          try {
            expect(actual).toBe(expectedB);
          } catch (e) {
            expect(actual).toBe(expectedB.slice(0, -1));
          }
        }
      }
    });
  });
});
