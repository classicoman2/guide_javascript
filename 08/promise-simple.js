// Declarar la Promesa
let laMevaPromesa = new Promise(function (resolve, reject) {
  //Accept
  resolve("******OK*****");

  //Reject
  //reject("There was an error")

  /* Cridam resolve(...) quan el que estavem fent
        de forma asincrona s'ha resolt satisfactoriament
           Cridam reject(...) quan ha fallat
        */

  /* En aquest exemple, empram setTimeout(...) per simular un codi
        asíncron. En la realitat, fariem normalment una consulta a una API */
  /*setTimeout(() => {
            resolve("La promesa s'ha resolt OK")
            //reject("La promesa ha fallat")
        }, 3000); */
});

console.log("---Abans de cridar la promesa---");

//Emprar la Promesa
laMevaPromesa
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("---Despres de cridar la promesa---");
