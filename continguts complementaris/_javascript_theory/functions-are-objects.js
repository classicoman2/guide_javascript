var funcio = function joSocUnaFuncio() {
    return null;
}

console.log( `funcio és: ${funcio.__proto__} i és de tipus: ${typeof funcio}` );

//Si investigam el seu prototipus
console.log( `El prototipus de funcio és: ${funcio.__proto__} que és de tipus: ${typeof funcio.__proto__}` );

//Si investigam el prototipus del seu prototipus
console.log( `El prototipus del prototipus de funcio és: ${funcio.__proto__.__proto__ } que és de tipus: ${typeof funcio.__proto__.__proto__}` );


//Every JavaScript function is actually a Function object. This can be seen with the code above, that returns 'true'
console.log ( (function(){}).constructor === Function );

/*
/*
-->

funcio és: function () { [native code] } i és de tipus: function
functions-are-objects.js:8 El prototipus de funcio és: function () { [native code] } que és de tipus: function
functions-are-objects.js:11 El prototipus del prototipus de funcio és: [object Object] que és de tipus: object
 */