// CHAPTER 4: DATA STRUCTRUES

// FUNCTION RANGE
/**
 * @param {number} start
 * @param {number} end
 * @param {number} [step=1]
 * @returns {number[]}
 *
 * Write a range function that takes two arguments, start and end
 * and returns an array containing all the numbers from start up
 * to (and including) end.
 *
 * EXTENSION, Take an optional third argument that indicates the “step” value
 * used when building the array. If no step is given, the elements go up by
 * increments of one. The function call range(1, 10, 2) should
 * return [1, 3, 5, 7, 9]. Make sure it also works with negative step values
 * so that range(5, 2, -1) produces [5, 4, 3, 2].
 */
function range(start, end, step = 1) {
  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

// FUNCTION SUM
/**
 * @param {number[]} nums
 * @returns {number}
 *
 * Function sum takes an array of numbers and returns the sum of these
 * numbers. Run the example program and see whether it does indeed return 55.
 */
const sum = (nums) => nums.reduce((a, b) => a + b);

// FUNCTION REVERSE ARRAY
/**
 * @param {Array} arr
 * @returns {Array}
 *
 * reverseArray, takes an array as argument and produces a new
 * array that has the same elements in the inverse order”
 */
function reverseArray(arr) {
  const result = [];
  // Using decremental iteration for reduced time complexity over .unshift
  for (let i = arr.length - 1; i > -1; i--) {
    result.push(arr[i]);
  }
  return result;
}

// FUNCTION REVERSE ARRAY IN PLACE
/**
 * @param {Array} arr
 * @returns {Array}
 *
 * reverseArrayInPlace, does what the reverse method does:
 * it modifies the array given as argument by reversing its elements.
 */
function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[i]];
  }
  return arr;
}

// FUNCTION ARRAY TO LIST
/**
 * @param {Array} arr
 * @returns {object}
 *
 * arrayToList builds up a list structure when given [1, 2, 3] as argument
 */
function arrayToList(arr) {
  const list = { value: null, next: null };
  let cur = list;

  arr.forEach((el, i) => {
    cur.value = el;
    if (i !== arr.length - 1) {
      cur.next = { value: null, next: null };
      cur = cur.next;
    }
  });

  return list;
}

// FUNCTION LIST TO ARRAY
/**
 * @param {object} list
 * @returns {Array}
 *
 * Produce an array from a list.
 */
function listToArray(list, arr = []) {
  if (!list.value) return arr;
  arr.push(list.value);
  return listToArray(list.next, arr);
}

// FUNCTION PREPEND TO LIST
/**
 * @param {*} element
 * @param {object} list
 * @returns {object}
 *
 * Prepend takes an element and a list and creates a new list
 * that adds the element to the front of the input list.
 *
 */
const prepend = (list, value) => ({ value, next: list });

// FUNCTION NTH
/**
 * @param {object} list
 * @param {number} num
 * @returns {object | undefined}
 *
 * Takes a list and a number and returns the element (list) at the given
 * position in the list (with zero referring to the first element) or
 * undefined when there is no such element.
 */
function nth(list, num) {
  if (!num) return list;
  if (!list.next) return undefined;
  return nth(list.next, num - 1);
}

// DEEP COMPARISON
/**
 * @param {*} valueOne
 * @param {*} valueTwo
 * @returns {boolean}
 * “Write a function deepEqual that takes two values and returns true only if they
 * are the same value or are objects with the same properties, where the values of
 * the properties are equal when compared with a recursive call to deepEqual.
 *
 * To find out whether values should be compared directly (use the === operator for that)
 * or have their properties compared, you can use the typeof operator. If it produces
 * "object" for both values, you should do a deep comparison. But you have to take
 * one silly exception into account: because of a historical accident, typeof null
 * also produces "object".”
 */
function deepComparison(valueOne, valueTwo) {

}

// Exports for testing
module.exports = {
  range, sum, reverseArray, reverseInPlace, arrayToList, listToArray, prepend, nth, deepComparison,
};
