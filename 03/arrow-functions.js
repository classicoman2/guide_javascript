/**
 *  ARROW FUNCIONS
 */



// Una funció tradicional
function funcioTradicional(a) {
  return `la funció tradicional retorna ${a}`;
}


// Una funció-variable
funcioVariable = function (a) {
  return a;
};


//Arrow function variable
arrowFunction = (a) => {
  return a;
};

//Arrow function en format comprimit
myFunction4 = (a) => a;

//Cridades a les funcions
console.log(myFunction1("foo"));
console.log(myFunction2("goo"));
console.log(myFunction3("hoo"));
console.log(myFunction4("koo"));

// 2. LA QÜESTIÓ DEL THIS.

document.getElementById("boto1").onclick = function () {
  console.log(this);
  console.log(this.id);
};

document.getElementById("boto2").onclick = () => console.log(this);


/**
 * Cridades
 */

 funcioTradicional(10);