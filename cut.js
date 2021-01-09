'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */


function cutFirst(str) {
	return str.slice(0, str.length - 2)
}
function cutLast(str) {
	return str.slice(2)
}
function cutFirstLast(str) {
	return str.slice(2, str.length - 2)
}

const assert = require('assert')

assert.deepStrictEqual(cutFirst('LouBnAAAAA'), 'LouBnAAA')
assert.deepStrictEqual(cutLast('LouBnAAAAA'), 'uBnAAAAA')
assert.deepStrictEqual(cutFirstLast('LouBnAAAAA'), 'uBnAAA')

// You must write your own tests
//throw Error('No tests !')

