window.onload = function () {
  // Aquí el teu codi JS
  input1 = document.getElementById("input1");
  results = document.getElementById("results");
};



function es_numero() {
  results.innerHTML =
    (Number.isFinite( Number(input1.value) ) ? "" : "No ") + "és un número";
}
