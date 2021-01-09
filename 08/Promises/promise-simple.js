var promesaComplida = false;

let promesa = new Promise(function (resolve, reject) {
  if (promesaComplida) resolve("Promise Resolved!");
  else reject("Promise Rejected!");

  // Variant: emprar setTimeout(...) per simular un codi asíncron - exemple: consulta a una API */
  /*
  setTimeout(() => {
    if (promesaComplida) resolve("OK!");
    else reject("Error!");
  }, 3000);
  */
});

console.log("Before Promise\n");

//Emprar la Promesa
promesa
  .then(function (message) {
    console.info(message);
  })
  .catch(function (error) {
    console.info(error);
  });

console.log("After Promise\n");
