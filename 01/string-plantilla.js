/**
 * STRINGS MULTILÍNIA
 */

console.log();
console.log(`(1) Multi-line Strings
-----------------`);
console.log(`This is a 
    multi-line string`);


/**
 * INTERPOLACIÓ D'EXPRESSIONS
 */
console.log(`\n(2) Expression Interpolation
-----------------`);
let a = 5;
let b = 10;
console.log(`Fifteen is ${a}*${b}=${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."


/**
 * OPERADOR TERNARI
 */

console.log(`\n(3) Using the Ternary Operator
-----------------`);
let text_a = "Bon dia";
let text_b = "Bona nit";
console.log(`Si a és major que b, llavors 
et saludo amb ${a > b ? text_a : text_b}`);


/**
 * TAGGED TEMPLATES
 */

console.log(`\n(4) TAGGED TEMPLATES
-----------------`);
let person = "Toni Amengual";
let age = 43;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "

  // There is technically a string after the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  let ageStr;
  ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}
let output = myTag`That ${person} is a ${age}`;
console.log(output);
// That Toni Amengual is a youngster
