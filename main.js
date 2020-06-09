/*******************************************************************************
 * Your code here!
//  ******************************************************************************/


function convert(num){
return num * 1.8 + 32
}
let input1 = 0
let endResult1 = convert(0)
console.log(input1)
console.log('converted to fahrenheit is:')
console.log(endResult1)


let input2 = 100
let endResult2 = convert(100)
console.log(input2)
console.log('converted to fahrenheit is:')
console.log(endResult2)

let input3 = 5
let endResult3 = convert(5)
console.log(input3)
console.log('converted fahrenheit is:')
console.log(endResult3)

/***************************
 * ****************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined

  For most apps, you will need multiple inputs from the user, but for this 
  first one, getInput(0) should be all you need.
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
