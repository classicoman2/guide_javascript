let promesa = new Promise(function (resolve, reject) {
  //Accept
  resolve("OK!");

  //Reject
  //reject("Error!")

  // Variant: emprar setTimeout(...) per simular un codi asíncron - exemple: consulta a una API */

  /*
  setTimeout(() => {
    resolve("OK!");
    //reject("Error!")
  }, 3000);
  */
});



console.log("Before\n");

//Emprar la Promesa
promesa
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("After\n");
