'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */

function keepLast(str)
{
	return str.slice(str.length - 2)
}

function keepFirst(str)
{
	return str.slice(0, 2)
}

function keepFirstLast(str)
{
	return str.slice(2, 4)
}

const assert = require('assert')

assert.deepStrictEqual(keepFirst('LouBnAAAAA'), 'Lo')
assert.deepStrictEqual(keepLast('LouBnAAAAA'), 'AA')
assert.deepStrictEqual(keepFirstLast('LouBnAAAAA'), 'uB')

// You must write your own tests
//throw Error('No tests !')
