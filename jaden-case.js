'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

function jadenCase(str)
{
	return str.replace(/(\s\w|^\w)/g, (a) => { return a.toUpperCase() })
}


// You must write your own tests
//throw Error('No tests !')
