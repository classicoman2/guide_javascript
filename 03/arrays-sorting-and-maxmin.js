console.log(`var array1 = ["Banana", "strawberry", "apple", "KIWI", "pear"]
var array2 = [100, 25, 1, 0.78, 50, 5, 0.5]
var array3 = ["Banana", 5, "apple", "Kiwi", 2]\n\n`)

// Declaració d'arrays
var array1 = ["Banana", "strawberry", "apple", "KIWI", "pear"]
var array2 = [100, 25, 1, 0.78, 50, 5, 0.5]
var array3 = ["Banana", 5, "apple", "Kiwi", 2]

// SORT SIMPLE
{
  console.log("array1 sort simple: " + array1.sort())
  console.log("array2 sort simple: " + array2.sort())
  console.log("array3 sort simple: " + array3.sort())
}


// funció auxiliar per ordenar números de forma creixent
let sortIncrease = function (a, b) {
  return a - b
}
console.log(`\narray2 ordenat de menor a major: ${array2.sort(sortIncrease)}`)

// funció auxiliar per ordenar números de forma decreixent
let sortDecrease = function (a, b) {
  return b - a
}
console.log(`array2 ordenat de major a menor: ${array2.sort(sortDecrease)}`)

// Funció auxiliar per ordenar per longitud de string
let sortStrings = function (string1, string2) {
  if (string1.toLowerCase() > string2.toLowerCase()) return 1
  if (string1.toLowerCase() < string2.toLowerCase()) return -1
  return 0
}
console.log(`\narray1 ordenat alfabèticament(): ${array1.sort(sortStrings)}`)

// Funció auxiliar per ordenar per longitud de string
let sortByLength = function (a, b) {
  return a.length - b.length
}

console.log(
  `array1 ordenat per longitud de string(): ${array1.sort(sortByLength)}`
)
