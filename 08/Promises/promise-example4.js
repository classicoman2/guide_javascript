/*
 * Exemple basat en: https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies
 *
 * Continua amb:   promise-example5.js
 */

//var isDaddyHappy = true;
var isDaddyHappy = false;

// Promise
var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isDaddyHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    reject("Daddy is not happy");
  }
});

willIGetNewPhone
  .then(function (fulfilled) {
    console.log(fulfilled);
    // output: { brand: 'Samsung', color: 'black' }
  })
  .catch(function (error) {
    console.log(error);
    // output: Daddy is not happy
  });
