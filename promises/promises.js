
// Declarar la Promesa
let myFirstPromise = new Promise(function (resolve, reject) {
    // We call resolve(...) when what we were doing asynchronously was successful
    // We call reject(...) when it failed

    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something an API.
    setTimeout(() => {
        resolve("La promesa s'ha resolt satisfactòriament") //It's OK
    }, 1000);
});

console.log("Abans de cridar la promesa");

//Emprar la Promesa
myFirstPromise.then(function (missatge) {
    console.log("La promesa ha acabat i " + missatge)
});

console.log("Després de cridar la promesa");
