function myFunction() {
  console.log("The value of var1 is " + var1);
  console.log("The value of var2 is " + var2);
  console.log("The value of var3 is " + var3);
  console.log("The value of var4 is " + var4);
}

//Both var1 and var2 are accessible from functions, since they are GLOBAL
var var1 = 10;
let var2 = 20;

myFunction();

//Hoising makes the declaration on top, but the inicialization is not hoisted
var var3 = 30;

//No hoisting!
let var4 = 40;
