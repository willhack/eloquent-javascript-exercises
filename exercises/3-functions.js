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
function min(a, b) {
  // YOUR CODE HERE
}

// RECURSION
/**
 * @param {number} n - Whole positive number
 * @returns {boolean}
 *
 * Define a recursive function isEven which should accept a single
 * parameter (a positive, whole number) and return a Boolean whether
 * or not the value passed in is an even number.
 *
 * EXTENSION: Remove the 'x' on line <TODO LINE #> to see what happens when
 * negative whole numbers are passed in. Can you think of a way to fix this
 * so that your function works for all integer values?
 */
function isEven(n) {
  // YOUR CODE HERE
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
function countBs(str) {
  // YOUR CODE HERE
}

/**
 * @param {string} str - The string to be searched
 * @param {string} char - The character to be searched for
 *
 * Write a function countChar that behaves like countBs, except it
 * takes a second argument that indicates the character that is to
 * be counted (rather than counting only uppercase "B" characters).
 */
function countChar(str, char) {
  // YOUR CODE HERE
}

// Exports for testing
module.exports = {
  min, isEven, countBs, countChar,
};
