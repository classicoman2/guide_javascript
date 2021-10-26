// Objectes i funcions d'ordre superior.

/* CREAR BREAKPOINTS per veure millor el resultat */

const array1 = [
  { name: "Peter", age: 8 },
  { name: "Gillian", age: 47 },
  { name: "Nerea", age: 23 },
  { name: "Stephen", age: 80 },
  { name: "Joe", age: 56 },
  { name: "Claudia", age: 13 },
]

/**
 * map() - sumo 100 a l'edat de cada persona
 */
let array2 = array1.map((value) => {
  value.age += 100
  return value
})

/**
 * filter()
 */
console.log("Si sumo 100 anys a cada persona:")
console.log(array1)

let array3 = array1.filter((value) => {
  return value.age > 18 ? true : false
})

console.log("\nLes persones majors d'edat son:")
console.log(array3)

/**
 * sort()  -  Ordenar per edat, de menor a major
 */
array1.sort((a, b) => (a.age > b.age ? 1 : -1))
console.log("\nLes persones ordenades per edat:")
console.log(array1)
