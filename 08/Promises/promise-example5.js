/*
 * Exemple basat en: https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies
 *
 * Continua amb:   promise-example5.js
 */

//var isMomHappy = true;
var isMomHappy = false;

// Promesa nº 1
var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone); // fulfilled
  } else {
    reject("mom is not happy"); // reject
  }
});


// Promesa nº 2
// Es una funció que retorna una Promesa.
// Aquesta funció la passarem com a "callback" en el .then de la 1a promesa
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

/*
 * Anem a encadenar la Promesa 'showOff' aqui
 */

willIGetNewPhone
  .then(showOff) // <-- Aqui va la 2a promesa !
  .then(function (fulfilled) {
    console.log(fulfilled);
    // output: 'Hey friend, I have a new black Samsung phone.'
  })
  .catch(function (error) {
    // oops, mom don't buy it
    console.log(error);
    // output: 'mom is not happy'
  });
