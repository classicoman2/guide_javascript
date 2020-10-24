var elMeuArray = []

console.log( `array és: ${elMeuArray.__proto__} i és de tipus: ${typeof elMeuArray}` );

//Si investigam el seu prototipus
console.log( `El prototipus de elMeuArray és: ${elMeuArray.__proto__} que és de tipus: ${typeof elMeuArray.__proto__}` );

//Si investigam el prototipus del seu prototipus
console.log( `El prototipus del prototipus de elMeuArray és: ${elMeuArray.__proto__.__proto__ } que és de tipus: ${typeof elMeuArray.__proto__.__proto__}` );


-->

elMeuArray és: function () { [native code] } i és de tipus: function
functions-are-objects.js:8 El prototipus de elMeuArray és: function () { [native code] } que és de tipus: function
functions-are-objects.js:11 El prototipus del prototipus de elMeuArray és: [object Object] que és de tipus: object
 */