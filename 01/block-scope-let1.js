/**
 * Execute this code using Nodejs with:
 * 
 *    $ node nameofthefile
 */



/**
 * 
 */
function myFunction() {
  // LOCAL SCOPE variable using 'var'
  let var0 = 30;
  console.log("whatever");
}

//GLOBAL SCOPE variable declared with 'var'
var var1 = 10;

if (var1 == 0) {
  // BLOCK SCOPE variable declared with 'var'
  var var2 = 5;
  var2 = var1 + var2;
}

try {
  console.log("The value of var0 is " + var0);
} catch (e) {
  console.log("   Error: var0 is not accessible in GLOBAL SCOPE because it is LOCAL");
}

// var1 was declared in the global scope is accessible because it is GLOBAL
console.log("The value of var1 is " + var1);

// var2 was declared inside a block  {  }  and it is accessible but not its value
console.log("The value of var2 is " + var2);


/**
 * HOISTING
 */

console.log("The value of varDeclared is " + varDeclared);

try {
  console.log("The value of varInitialized is " + varInitialized);
} catch (e) {
  console.log("   Error: varNotHoisted is not accessible because it was declared & initialized AFTER it was read");
}


//GLOBAL SCOPE variable initialized with 'var'
varInitialized = 10;

//GLOBAL SCOPE variable declared & initialized with 'var'
var varDeclared = 10;