// Constructor function for Person objects
function Person(first, last, age) {
  this.firstName = first
  this.lastName = last
  this.age = age
}

let dog = { name: "Rambo", weight: 8.5 }

// Create a Person object
var trump = new Person("Donald", "Trump", 74)
var biden = new Person("Joe", "Biden", 78)

//Afegir una propietat i un mètode al prototip de Person
Person.prototype.country = "US"
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

console.log(` ${trump.getFullName()} is from ${trump.country}`)

// Afegir una propietat al prototip de Dog
//dog.prototype.age = 5;

console.log("Dog has "+dog.age + " years")
