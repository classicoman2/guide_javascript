/**
 *  1)- Funció Constructor
 */

// Constructor function for Person objects
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// Create a Person object
var trump = new Person("Donald", "Trump", 74);
var biden = new Person("Joe", "Biden", 78);

console.log(trump);
console.log(biden);

/**
 * 2)- No puc modificar un constructor.
 *     Ex: no puc afegir ni propietats ni mètodes a Person.
 *         Però sí puc afegir propietats i mètodes a un objecte.
 */

 // No puc crear una nova propietat en un constructor.
Person.country = "US";

console.log("");
console.log(trump);

// Si puc crear noves propietats o nous mètodes en un objecte
trump.country = "US";
//trump.getCountry = function() { return this.country };

// Alerta! Això no funcionaria amb un arrow function
/* trump.getCountry = () => { return this.country } */

console.log(trump);
console.log( trump.getCountry() )
/**
 *
 */
