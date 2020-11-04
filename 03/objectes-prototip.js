// Constructor function for Person objects
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }

  
  // Create a Person object
var trump = new Person("Donald", "Trump", 74);
var biden = new Person("Joe", "Biden", 78);


//Afegir una propietat al prototip
Person.prototype.country = "US";

//Afegir un mètode al prototip
Person.prototype.getFullName = function() { return `${this.firstName} ${this.lastName}`}

console.log( ` ${ trump.getFullName( )} is from ${ trump.country }`);