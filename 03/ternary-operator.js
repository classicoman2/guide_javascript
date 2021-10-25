// Some useful cases for ternary operator

//A Simple conditional
let question = true
let resultat = question ? "és veritat" : "és false"
console.log(resultat)

/*
if (question) 
  resultat = "es veritat"
else
  resultat = "es false"
*/

// Absolute value of a negative number
let value = -10
let absolute = value > 0 ? value : -value
//let absolute = (value > 0) ? value : -value;

console.log("El valor absolut de " + value + " és " + absolute)
