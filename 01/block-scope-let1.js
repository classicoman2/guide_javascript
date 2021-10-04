/**
 * Exemple 1: empro LET per declarar les VARIABLES LOCALS en les funcions
 * 
 * @param {number} a 
 */
function add(a) {
  let b = 5;
  return a+b;
}

/*
* Exemple 2: puc emplear let en un bucle
*/

// Let no permet Hoisting!
console.log("El valor de i abans del bucle és   ")

for (let i=0; i<5; i++) {
  console.log( add(i) );
}