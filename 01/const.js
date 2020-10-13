    
// correct
const PI = 3.1415927

//incorrect
/* //uncomment me please!
PI = 3.14
*/


//incorrect
// Error: "Uncaught SyntaxError: Missing initializer in const declaration"

/* //uncomment me please!
const DOS
DOS = 2
*/


if (1 == 1) {
    const NUMERO = 2;
    console.log("")  //Does nothing
}

console.log("PI val = " + PI)
// Error: "Uncaught ReferenceError: NUMERO is not defined"
console.log("NUMERO val = " + NUMERO)

