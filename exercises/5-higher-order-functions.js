// CHAPTER 5: HIGHER-ORDER FUNCTIONS
const { SCRIPTS } = require('../assets/scripts');
const { characterScript, countBy } = require('../assets/05_higher_order');

// FLATTENING
/**
 * @param {Array} arrs - Array of Arrays
 * @returns {Array}
 * Use the reduce method in combination with the concat method to "flatten" an
 * array of arrays into a single array that has all the elements of the original arrays.
 */
function flatten(arrs) {

}

// YOUR OWN LOOP
/**
 * @param {*} value
 * @param {function} test
 * @param {function} body
 * @param {function} update
 * Write a higher-order function that provides something like a for-loop statement.
 * It takes a value, test function, update function, and a body function. Each iteration,
 * it first runs the test function on the current loop value and stops if that returns false.
 * Then it calls the body function, giving it the current value. Finally, it calls the update
 * function to create a new value and start from the beginning.
 * When defining the function, you can use a regular loop to do the actual looping.
 */
function loop(value, test, body, update) {

}

// EVERYTHING
/**
 * @param {Array} arr
 * @param {function} func
 * @returns {boolean}
 * Implement every: a function that takes an array and a predicate function
 * as parameters and returns true when the given function returns true for every element
 * in the array. Write two versions, one using a loop and one using the `some` method.
 */
function everyLoop(arr, func) {

}

function everySome(arr, func) {

}

// DOMINANT WRITING DIRECTION
/**
 * @param {string} str - The string of text to check a dominant writing direction for
 * @returns {string}
 * Write a function that computes the dominant writing direction in a string of text.
 * Remember that each script object has a direction property that can be "ltr" (left to right),
 * "rtl" (right to left), or "ttb" (top to bottom). The dominant direction is the direction of
 * a majority of the characters that have a script associated with them. The characterSet and
 * countBy functions defined earlier in the chapter are probably useful here.
 *
 * Note: if you look at lines 2 and 3 of this file you can see that both functions,
 * as well as the 'scripts' array of script objects are being imported for you.
 * Feel free to use them directly in your solution.
 */
function dominantDirection(str) {

}

module.exports = {
  flatten, loop, everyLoop, everySome, dominantDirection,
};
