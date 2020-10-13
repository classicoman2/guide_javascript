
// Una funció tradicional
function funcioTradicional(a) {
  return `la funció tradicional retorna ${a}`;
}

// Una funció-variable
funcioVariable = function (a) {
  return `la funció variable retorna ${a}`;
};



// Declaració d'una Arrow function
funcioArrow = (a,b) => { return `funcioArrow retorna ${a+b}` };

//Arrow function en format comprimit (amb 1 sol paràmetre)
funcioArrowComprimida = (a,b) => { return `funcioArrowComprimida retorna ${a+b}` };





/**
 * Cridades
 */

console.log( funcioTradicional(10) );
console.log( funcioVariable(10) );

console.log ( funcioArrow(3,4));
console.log ( funcioArrowComprimida(3,4));

