'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

function whisper(str) {
	return str.toLowerCase()
}

const assert = require('assert')

assert.deepStrictEqual(whisper('LouBnAAAAA'), 'loubnaaaaa')

// You must write your own tests
//throw Error('No tests !')
