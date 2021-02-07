// CHAPTER 3: FUNCTIONS

// MINIMUM
/**
 * @param {number} a - Value a for comparison
 * @param {number} b - Value b for comparison
 * @returns {number}
 *
 * Write a function min that takes two arguments
 * (a and b) and returns the minimum value.
 */
const min = (a, b) => ((a < b) ? a : b);

// RECURSION
/**
 * @param {number} n - Whole positive number
 * @returns {boolean}
 *
 * Define a recursive function isEven which should accept a single
 * parameter (a positive, whole number) and return a Boolean whether
 * or not the value passed in is an even number.
 *
 * EXTENSION: Remove the 'x' on line 18 of tests/3-functions.test.js to see
 * what happens when negative whole numbers are passed in. Can you think
 * of a way to fix this so that your function works for all integer values?
 */
function isEven(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  return (n > 0) ? isEven(n - 2) : isEven(n + 2);
}

// BEAN COUNTING
/**
 * @param {string} str - The string to be searched
 * @returns {number}
 *
 * Write a function countBs  that takes a string as its only
 * argument and returns a number that indicates how many
 * uppercase "B" characters there are in the string.
 *
 * EXTENSION: Once you have finished countChar,
 * rewrite countBs to make use of this new function.
 */
const countBs = (str) => countChar(str, 'B');

/**
 * @param {string} str - The string to be searched
 * @param {string} char - The character to be searched for
 *
 * Write a function countChar that behaves like countBs, except it
 * takes a second argument that indicates the character that is to
 * be counted (rather than counting only uppercase "B" characters).
 */
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

// Exports for testing
module.exports = {
  min, isEven, countBs, countChar,
};
