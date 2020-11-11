//Declarar l'objecte
var Joc = new Object();

// Constant de configuració
const INTERVAL_REFRESC = 50;

//Declarar variables del joc
Joc.rellotge = 0;
// ...


Joc.inicialitzar = function () {
  // Inicialitzo les variables del joc
  this.rellotge = 1;
};


Joc.itera = function () {
  // analogia de netejar canvas
  document.getElementById("missatge").innerHTML = "";

  // Alerta!  Aqui, 'this' és l'objecte window, perquè cridam aquest mètode
  //          en forma de "Callback". Per això, en aquest mètode si vull accedir una propietat
  //          o mètode de Joc, no he de posar 'this.' sino 'Joc.' davant

  Joc.rellotge++;

  // analogia de repintar
  document.getElementById("missatge").innerHTML = Joc.rellotge;
};

window.onload = function () {
  Joc.inicialitzar();
  // Cada INTERVAL_REFRESC s'executa el métode indicat
  setInterval(Joc.itera, INTERVAL_REFRESC);
};
