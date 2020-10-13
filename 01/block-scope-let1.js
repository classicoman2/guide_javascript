

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
  let var3 = 10;
}

try {
  console.log("The value of var0 is " + var0);
} catch (e) {
  console.log("   Error: var0 is not accessible in GLOBAL SCOPE because it is LOCAL");
}

// var1 was declared in the global scope and is accessible here
console.log("The value of var1 is " + var1);

// var2 was declared inside a block  {  }  and it is accessible here but not its value
console.log("The value of var2 is " + var2);

// var3 was declared inside a block  {  }  with let and it is not accessible here
console.log("The value of var3 is " + var3);
