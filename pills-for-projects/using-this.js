console.log("\n In top of the js file, this =");
console.log(this);

/**
 * Funció associada a l'event click amb propietat HTML 'onclick'
 */
function pushButton1() {
  console.log(
    "\n Dins de la funció cridada per gestor d'event onclick, this ="
  );
  console.log(this);
}

/**
 * Funció associada a l'event click amb mètode 'addEventListener'
 */
function pushButton2() {
  console.log(
    "\n Dins de la funció cridada per gestor d'event addEventListener, this ="
  );
  console.log(this);
  console.log(this.id);
}

window.onload = function () {
  console.log("\n Inside onload property function this =");
  console.log(this);

  document.getElementById("button2").addEventListener("click", pushButton2);
};
