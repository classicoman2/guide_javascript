console.log(`var array1 = ["Banana", "strawberry", "apple", "KIWI", "pear"]
var array2 = [100, 25, -1, 0.78, -50, 5, 0.5]\n\n`)

// Declaració d'arrays
var array1 = ["Banana", "strawberry", "apple", "KIWI", "pear"]
var array2 = [100, 25, -1, 0.78, -50, 5, 0.5]

/** map() aplica una operació i crea un nou array resultant */

// Funció auxiliar per obtenir valor absolut
function numeroAbsolut(value) {
  if (value > 0) return value
  else return -value
}

let nouArray2 = array2.map(numeroAbsolut)

console.log(`map() - array2 amb valors absoluts: ${nouArray2}`)

// Versio amb funcio arrow
/*
let nouArray2 = array2.map(
(value) => {
  if (value > 0) return value
  else return -value
})
*/

// Versió comprimida amb una funció arrow i operador ternari
let nouArray3 = array2.map((value) => (value > 0 ? value : -value))

console.log(`  amb versió comprimida: ${nouArray3}`)

/**
 * filter() filtra (elimina) elements que no compleixen una condició
 *
 * Exemple: Filtram els elements que no son majors que dos
 */
let arrayMajorsQue2 = array2.filter((value) => value > 0)
console.log("\nfilter() - Els nombres majors que 2 són: " + arrayMajorsQue2)

// Exemple: vull les paraules que tenguin alguna 'a'
let arrayAmbUnaA = array1.filter((value) => value.indexOf("a") != -1)
console.log("\nfilter() - Les paraules amb alguna a són:" + arrayAmbUnaA)

/**
 * reduce()
 */
let totalSuma = array2.reduce((total, value) => (total += value))
console.log("\nreduce() - Suma de tots els numeros de array2 = " + totalSuma)

/**
 * some()
 */
let resultSome = array1.some((value) => value.indexOf("a") != -1)
console.log(
  "\nsome() - true si algun element de array1 té una a = " + resultSome
)

array2.some((value) => value < 0)
console.log("some() - Algun element de array2 és negatiu: " + resultSome)

/**
 * every()
 */
let resultEvery = array1.every((value) => value.indexOf("a") != -1)
console.log(
  "every()- TOTS els elements de array1 tenen una a minúscula: " + resultEvery
)

resultEvery = array2.every((value) => value < 1000000)
console.log(
  "every()- Tots els elements de array2 son < 1.000.000: " + resultEvery
)

/* some(), empram parametres index i array */
array2.some(function (valor, index, array) {
  if (valor < 0) {
    console.log("   index: " + index)
    console.log("   anterior = " + array[index - 1])
    console.log("   posterior = " + array[index + 1])
    return true
  } else {
    return false
  }
})
console.log("some() - Algun element de array2 és negatiu: " + resultSome)

/* Encadenar mètodes */

let arrayFinal = array2.map((n) => (n > 0 ? n : -n)).sort((a, b) => a - b)
console.log("Array Final: " + arrayFinal)
