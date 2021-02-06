const {
  range, sum, reverseArray, reverseInPlace, arrayToList, listToArray, prepend, nth, deepEqual,
} = require('../exercises/4-data-structures.js');

let arr;
let list;
let listB;
let listC;

xdescribe('Chapter 4 Tests', () => {
  xdescribe('Array functions', () => {
    beforeEach(() => { arr = [1, 2, 3, 4, 5]; });

    describe('Function range', () => {
      test('Creates an array from a range', () => {
        expect(range(1, 5)).toStrictEqual(arr);
      });
    });

    describe('Function range extension', () => {
      test('Takes positive third argument', () => {
        expect(range(2, 10, 2)).toStrictEqual([2, 4, 6, 8, 10]);
      });
      test('Takes negative third argument', () => {
        expect(range(10, 2, -2)).toStrictEqual([10, 8, 6, 4, 2]);
      });
    });

    describe('Function sum', () => {
      test('Adds all array values together', () => {
        expect(sum(arr)).toBe(15);
      });
    });

    describe('Function reverseArray', () => {
      test('Reverses an array', () => {
        expect(reverseArray(arr)).toStrictEqual([5, 4, 3, 2, 1]);
      });
    });

    describe('Function reverseInPlace', () => {
      test('Reverses an array', () => {
        expect(reverseInPlace(arr)).toStrictEqual([5, 4, 3, 2, 1]);
      });
      test('Does so in place', () => {
        const newArr = reverseInPlace(arr);
        expect(newArr).toBe(arr);
      });
    });
  });

  xdescribe('List functions', () => {
    beforeEach(() => {
      list = {
        value: 1,
        next: {
          value: 2,
          next: null,
        },
      };
    });

    describe('Function arrayToList', () => {
      test('Creates a list from an array', () => {
        expect(arrayToList([1, 2])).toStrictEqual(list);
      });
    });

    describe('Function listToArray', () => {
      test('Creates an array from a list', () => {
        expect(listToArray(list)).toStrictEqual([1, 2]);
      });
    });

    describe('Function prepend', () => {
      const listA = { value: 1, next: { value: 2, next: null } };
      beforeAll(() => {
        listB = prepend(list, 0);
        listC = { value: 0, next: { value: 1, next: { value: 2, next: null } } };
      });
      test('Adds new node to the front of the list', () => {
        expect(listB).toEqual(listC);
      });
      test('Returns a new list', () => {
        expect(list).not.toBe(listB);
      });
      test('Does not modify original list', () => {
        expect(list).toStrictEqual(listA);
      });
    });

    describe('Function nth', () => {
      test('Is zero indexed', () => {
        expect(nth(list, 0)).toBe(1);
      });
      test('Works for non zero positions', () => {
        expect(nth(list, 1)).toBe(2);
      });
      test('Returns undefined for numbers outside of range', () => {
        expect(nth(list, 2)).toBe(undefined);
      });
    });
  });

  xdescribe('Function deepEqual', () => {
    beforeAll(() => {
      list = { value: 0, next: { value: 1, next: { value: 2, next: null } } };
      listB = { value: 0, next: { value: 1, next: { value: 2, next: null } } };
      listC = { a: 1 };
    });
    describe.each(
      [1, 'a', true, false, undefined, null, { a: 1 }],
    )('Returns true for equal arguments:', (val) => {
      test(`deepEqual(${JSON.stringify(val)}, ${JSON.stringify(val)})`, () => {
        expect(deepEqual(val, val)).toBe(true);
      });
    });
    describe.each([
      [1, 2],
      ['a', 'b'],
      [1, true],
      [0, null],
      [null, { a: 1 }],
      [null, undefined],
      [{ a: null }, { a: 1 }],
      [{ a: { b: 1 } }, { a: { b: 2 } }],
    ])('Returns false for unequal arguments:', (valueOne, valueTwo) => {
      test(`deepEqual(${JSON.stringify(valueOne)}, ${JSON.stringify(valueTwo)})`, () => {
        expect(deepEqual(valueOne, valueTwo)).toBe(false);
      });
    });
  });
});
