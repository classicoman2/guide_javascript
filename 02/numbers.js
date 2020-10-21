//Infinity
var x = 10 / 0;
console.log("\n10/0 = " + x);
console.log("x es de tipus " + typeof x);

//NaN
var y = 5 / "text";
console.log('\n 5 / "text" = ' + y);
console.log("y es de tipus " + typeof y);

//Amb operador '+', es converteix en string
var z = 10 + "10";
console.log('\n 10 + "10" = ' + z);
console.log("z es de tipus " + typeof z);

//Amb qualsevol altre operador, es converteix en nombre
//Multiplicació
var zz = 10 * "10";
console.log('\n 10 * "10" = ' + zz);
console.log("zz es de tipus " + typeof zz);

console.log("\n1000000 és finit? = " + Number.isFinite(1000000));
console.log("NaN és finit? = " + Number.isFinite(NaN));
console.log("Infinity és finit? = " + Number.isFinite(Infinity));

console.log("\nNumber.MAX_VALUE = " + Number.MAX_VALUE);
console.log("Number.MIN_VALUE = " + Number.MIN_VALUE);
console.log("Number.POSITIVE_INFINITY = " + Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY = " + Number.NEGATIVE_INFINITY);
