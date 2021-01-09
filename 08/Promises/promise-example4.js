/*
 * Exemple basat en: https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies
 *
 * Continua amb:   promise-example5.js
*/

var isMomHappy = true;

// Promise
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

willIGetNewPhone
.then(function (fulfilled) {
    // yay, you got a new phone
    console.log(fulfilled);
     // output: { brand: 'Samsung', color: 'black' }
})
.catch(function (error) {
    // oops, mom don't buy it
    console.log(error.message);
     // output: 'mom is not happy'
});
