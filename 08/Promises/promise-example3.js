/*
 * Curiositat: Una altra manera de treballar amb promeses
 * 
 * Nosaltres no emprarem les promeses d'aquesta manera.
*/

let promesa = Promise.resolve("Resolved OK!");
//let promesa = Promise.reject("Ha anat malament!");

console.log("La promesa és:", promesa);

promesa.then(
  function (valor) {
    console.info("\nLa promesa resol i retorna:", valor);
  },
  function (error) {
    console.info("\nLa promesa rejecta amb error:", error);
  }
);
