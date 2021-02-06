/* eslint-disable no-restricted-syntax */
// CHAPTER 4: DATA STRUCTURES

/* ----- ARRAY FUNCTIONS ----- */

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

/* ----- LIST FUNCTIONS ----- */
// NOTE: For the sake of the jest tests a list node has the key 'next' instead of 'rest'
//   i.e.  --> { value: 1, next: null },  NOT { value: 1, rest: null }

// FUNCTION ARRAY TO LIST
/**
 * @param {Array} arr
 * @returns {object}
 *
 * arrayToList builds up a list structure when given [1, 2, 3] as argument
 * Note: For the tests a list node has two keys, 'value' and 'next' { value, next }
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
  if (!list) return arr;
  return listToArray(list.next, [...arr, list.value]);
}

// FUNCTION PREPEND TO LIST
/**
 * @param {object} list
 * @param {*} element
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
 * @returns {* | undefined}
 *
 * Takes a list and a number and returns the value at the given
 * position in the list (with zero referring to the first element) or
 * undefined when there is no such element.
 */
function nth(list, num) {
  if (!num) return list.value;
  if (!list.next) return undefined;
  return nth(list.next, num - 1);
}

// DEEP COMPARISON
/**
 * @param {*} argOne
 * @param {*} argTwo
 * @returns {boolean}
 * “Write a function deepEqual that takes two values and returns true only if they
 * are the same value or are objects with the same properties, where the values of
 * the properties are equal when compared with a recursive call to deepEqual.
 *
 */
function deepEqual(arg, arg2) {
  if (typeof arg !== typeof arg2) return false;
  if (arg === null && arg2 !== null) return false;
  if (arg === null && arg2 === null) return true;
  if (typeof arg === 'object') {
    if (Object.keys(arg).length !== Object.keys(arg2).length) return false;
    for (const k in arg) {
      if (!deepEqual(arg[k], arg2[k])) return false;
    }
  }
  if (arg !== arg2) return false;
  return true;
}

// Exports for testing
module.exports = {
  range, sum, reverseArray, reverseInPlace, arrayToList, listToArray, prepend, nth, deepEqual,
};
