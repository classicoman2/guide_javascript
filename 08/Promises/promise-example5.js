/*
 * Encadenament de promeses
 *
 */

var isDadHappy = true;
//var isDadHappy = false;

// Promesa nº 1
var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isDadHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    reject("Daddy is not happy");
  }
});

// Promesa nº 2: Es una funció que retorna una Promesa i que passarem com a
// "callback" en el .then de la 1a promesa
var showOff = function (phone) {
  return new Promise(function (resolve, reject) {
    var message = "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

    resolve(message);
    //reject("no friend");
  });
};



willIGetNewPhone
  .then(showOff) // <-- Aqui va encadenada la 2a promesa !
  .then(function (message) {
    console.log(message);
    // output: 'Hey friend, I have a new black Samsung phone.'
  })
  .catch(function (error) {
    console.log(error);
    // output: 'Daddy is not happy'
  });
