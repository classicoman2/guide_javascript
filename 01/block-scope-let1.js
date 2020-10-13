/**
 * Exemple 1: empro LET per declarar les VARIABLES LOCALS en les funcions
 * 
 * @param {number} a 
 */
function suma(a) {
  let b = 5;
  return a+b;
}

/*
* Exemple 2: puc emplear let en un bucle
*/

for (let i=0; i<5; i++) {
  console.log( suma(i) );
}