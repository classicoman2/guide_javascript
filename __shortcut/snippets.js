//onload
window.onload = function () {};

/**
 *   https://www.w3schools.com/jsref/met_document_addeventlistener.asp
 */

//1. Afegir un event listener
document.addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "Hello World";
});


//2. 
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

//NOOOOO posar parèntesi a nom funció, no funcionarà !!!!!!
document.addEventListener("click", myFunction()  );