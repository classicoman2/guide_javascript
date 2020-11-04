// Objectes i funcions d'ordre superior.

const array1 = [
  { name: "Peter", age: 80 },
  { name: "Nerea", age: 23 },
  { name: "Joe", age: 56 },
  { name: "Claudia", age: 13 },
];

let array2 = array1.map( (value) => {
    value.age += 100;
    return value;
})

console.log( array2 );