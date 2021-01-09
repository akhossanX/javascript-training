'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

function yell(str) {
	return str.toUpperCase()
}

const assert = require('assert')

assert.deepStrictEqual(yell('LouBnAAAAA'), 'LOUBNAAAAA')


// You must write your own tests
//throw Error('No tests !')
