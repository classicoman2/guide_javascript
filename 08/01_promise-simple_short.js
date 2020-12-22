// Promeses simplificades per aquest exemple

//let promesa = Promise.resolve("Resolved OK!");
let promesa = Promise.reject("Ha anat malament!");

console.log("La promesa és:", promesa);

promesa.then(
    function (valor) {
  console.log("\nLa promesa resol i retorna:", valor)
}, 
function(error) {
    console.log("\nLa promesa rejecta amb error:", error)
});
