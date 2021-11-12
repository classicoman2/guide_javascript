/**
 * Intent 1:  copiar un array com si fos una variable simple (string, number o boolean)
 */

let array = ['Mercury', 'Venus', 'Earth']
let array_copia = array

// Si afegeixo 1 element a array, el contingut de array_copia serà igual
array.push('Mars')

console.log('array = ' + array) // ['Mercury','Venus','Earth','Mars']
console.log('array2 = ' + array_copia)

// Si afegeixo 1 element a array_copia, el contingut de array serà igual
array.push('Jupiter')

console.log('\n')

console.log('array = ' + array)
console.log('array2 = ' + array_copia)

/**
 * 2 - Spread operator
 */
console.log('\n')

let numbers = [1, 2, 3]
let numbersCopy = [...numbers]

numbers.push(4)

console.log('numbers = ' + numbers) // [1,2,3,4]
console.log('numbersCopy = ' + numbersCopy) // [1,2,3]

/**
 * Què passa si empro un array multidimensional?
 */

let nestedNumbers = [[1], [2]]
let nestedNumbersCopy = [...nestedNumbers]

nestedNumbers[0].push(300)
console.log(nestedNumbers)
// [ [1, 300] , [2]]
console.log(nestedNumbersCopy)
// [[1, 300], [2]]
// L'array és igual perquè els subarrays comparteixen referències.
