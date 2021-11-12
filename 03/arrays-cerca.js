console.log(`var array1 = ["Banana", "strawberry", "apple", "KIWI", "pear"]
var array2 = [100, 25, -1, 0.78, -50, 5, 0.5]\n\n`)

// Declaració d'arrays
var array1 = ['Banana', 'strawberry', 'apple', 'KIWI', 'pear']
var array2 = [100, 25, -1, 0.78, -50, 5, 0.5]

// find(), findIndex()

/**
 * find()
 */

let first_r = array1.find((value) => value.indexOf('r') != -1)
console.log('find() - el 1er element amb una r és: ' + first_r)

let first4 = array1.find((value) => value.length == 4)
console.log('find() - el 1er element amb longitut igual a 4 es: ' + first4)

let firstNegative = array2.find((value) => value < 0)
console.log('find() - el 1er element negatiu és: ' + firstNegative)

console.log('\n')

/**
 * findIndex()
 */
let posFirst_r = array1.findIndex((value) => value.indexOf('r') != -1)
console.log(
  'findIndex() - la posicio del 1er element amb una r és: ' + posFirst_r
)

let posFirst = array1.findIndex((value) => value.length == 4)
console.log(
  'findIndex() - la posició del 1er element amb longitut igual a 4 es: ' +
    posFirst
)

let posFirstNegative = array2.findIndex((value) => value < 0)
console.log(
  'findIndex() - la posicio del 1er element negatiu és: ' + posFirstNegative
)
