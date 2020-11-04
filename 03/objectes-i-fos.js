// Objectes i funcions d'ordre superior.

const array1 = [
  { name: "Peter", age: 8 },
  { name: "Gillian", age: 47 },
  { name: "Nerea", age: 23 },
  { name: "Stephen", age: 80 },
  { name: "Joe", age: 56 },
  { name: "Claudia", age: 13 },
];

/**
 * map()
 */

let array2 = array1.map((value) => {
  return value.age + 100;
});

console.log(array2);

/**
 * filter()
 */

console.log(array1);

let array3 = array1.filter((value) => {
  return value.age > 18 ? true : false;
});

console.log("\nLes persones majors d'edat son:");
console.log(array3);

/**
 * sort()
 */

// Ordenar per edat, de menor a major
let array4 = array1.sort((a, b) => (a.age > b.age ? true : false));

console.log("\nLes persones ordenades de major a menor son:");
console.log(array4);
