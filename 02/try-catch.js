/**
 * Exemple bàsic de try/catch : Capturant un ReferenceError
 */

try {
  // valor1 no està declarat ni inicialitzat --> error
  var resultat = valor1 + 10;
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  if (e instanceof ReferenceError) console.log("es un error de referència");
}

/**
 * Throw
 */
