//Aquests 2 objectes son iguals
var array1 = [];
var array2 = new Array(1, 2);

// prototipus del meu array   // prototipus en què es basa la funció-Constructor  Array anomenada ArrayConstructor
console.log(array1.__proto__ == Array.prototype);
// -> true
console.log(array2.__proto__ == Array.prototype);
// -> true

// Array NO és un objecte, és una FUNCIÓ CONSTRUCTOR que crea objectes basats en el prototipus Array.prototype

//////////

//Aquests 2 objectes son iguals
var objecte = new Object();
var objecte2 = {};

// prototipus del meu objecte     // prototipus en què es basa la funció-Constructor  Object anomenada ObjectConstructor
console.log(objecte.__proto__ == Object.prototype);
// -> true
console.log(objecte2.__proto__ == Object.prototype);
// -> true
