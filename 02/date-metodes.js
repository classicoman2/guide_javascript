var mesos = [
  "Gener",
  "Febrer",
  "Març",
  "Abril",
  "Maig",
  "Juny",
  "Juliol",
  "Agost",
  "Setembre",
  "Octubre",
  "Novembre",
  "Desembre",
];
var diesSetmana = [
  "diumenge",
  "dilluns",
  "dimarts",
  "dimecres",
  "dijous",
  "divendres",
  "dissabte",
];

//Una altra manera d'aconseguir la data d'avui
console.log(
  "La data d'aquest precís moment es registra com aquest número =" + Date.now()
);

var d = new Date();

console.log("\nAny: " + d.getFullYear());

console.log("Mes: " + mesos[d.getMonth()]);

console.log("Dia (1-31): " + d.getDate());

// Dia de la setmana
console.log("Dia de la setmana: " + diesSetmana[d.getDay()]);

//Hora
console.log(
  "\nHora exacta: " +
    d.getHours() +
    "h" +
    d.getMinutes() +
    "'" +
    d.getSeconds() +
    "." +
    d.getMilliseconds()
);

//Milisegons
console.log(" Han passat " + d.getTime() + " ms. des del 1/1/1970");

