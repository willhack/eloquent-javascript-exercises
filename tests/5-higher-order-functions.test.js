const {
  flatten, loop, everyLoop, everySome, dominantDirection,
} = require('../exercises/5-higher-order-functions');

describe('Chapter 5 Tests', () => {
  describe('Function flatten', () => {
    test('Should return an array', () => {
      expect(Array.isArray(flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))).toBe(true);
    });
    test('Should properly flatten an array of arrays', () => {
      expect(flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('Should use reduce and concat for solution', () => {
      const reduceSpy = jest.spyOn(Array.prototype, 'reduce');
      const concatSpy = jest.spyOn(Array.prototype, 'concat');
      flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      expect(reduceSpy).toHaveBeenCalled();
      expect(concatSpy).toHaveBeenCalled();
    });
  });
  describe('Function loop', () => {
    test('Should work like a traditional for loop', () => {
      let testVal = 0;
      loop(0, (val) => val < 10, () => testVal++, (val) => val + 1);
      expect(testVal).toBe(10);
    });
  });
  describe('Function everyLoop', () => {
    const cb = (n) => n % 2 === 0;
    test('Should work for passing cases', () => {
      const valid = [2, 4, 6];
      expect(everyLoop(valid, cb)).toBe(true);
    });
    test('Should work for failing cases', () => {
      const flawed = [2, 4, 5];
      expect(everyLoop(flawed, cb)).toBe(false);
    });
    test('Should not be using Array.prototype.some', () => {
      const spy = jest.spyOn(Array.prototype, 'some');
      everyLoop([2], cb);
      expect(spy).not.toHaveBeenCalled();
    });
  });
  describe('Function everySome', () => {
    const cb = (n) => n % 2 === 0;
    const spy = jest.spyOn(Array.prototype, 'some');
    beforeEach(() => {
      spy.mockClear();
    });
    test('Should work for passing cases', () => {
      const valid = [2, 4, 6];
      expect(everySome(valid, cb)).toBe(true);
    });
    test('Should work for failing cases', () => {
      const flawed = [2, 4, 5];
      expect(everySome(flawed, cb)).toBe(false);
    });
    test('Should work using Array.prototype.some', () => {
      everySome([2], cb);
      expect(spy.mock.calls.length).toBe(1);
    });
  });
  describe('Function dominantDirection', () => {
    test('Should work ltr dominant characters', () => {
      expect(dominantDirection('Japanese: 新世紀エヴァンゲリオン')).toBe('ltr');
    });
    test('Should work for rtl dominant characters', () => {
      expect(dominantDirection('Arabic: شيء خلود')).toBe('rtl');
    });
    test('Should work for ttb dominant characters', () => {
      expect(dominantDirection('Mongolian: ᠲᠡᠩᠷᠢ ᠴᠡᠷᠢᠭ')).toBe('ttb');
    });
  });
});
