'use strict'

/*
 * Create a function `sub` that takes 2 arguments and substract them
 *
 * @notions Primitive and Operators, Functions
 * @next abs
 */

// Your code :

function sub(a1, a2) {
	return a1 - a2
}

//* Begin of tests
const assert = require('assert')
const rand = Math.random()

assert.strictEqual(typeof sub, 'function')
assert.strictEqual(sub.length, 2)
assert.strictEqual(sub(2, 2), 0)
assert.strictEqual(sub(-2, 2), -4)
assert.strictEqual(sub(rand, rand), rand - rand)

// End of tests */
