// SORTING ARRAYS OF OBJECTS

let arrayObjects = [
  { type: "Volvo", year: 1970 },
  { type: "Seat", year: 1950 },
  { type: "Fiat", year: 2010 },
  { type: "Wolkswagen", year: 1960 },
  { type: "Saab", year: 2000 },
  { type: "BMW", year: 1980 },
];

//Sorts Objects increasingly
let sortIncrease = function (a, b) {
  return a.year - b.year;
};

//sorts Objects decreasingly
let sortDecrease = function (a, b) {
  return b.year - a.year;
};

//Alerta!! Necessitam clonar els arrays d'objectes per fer una còpia
let arrayObjects_inc = JSON.parse(JSON.stringify(arrayObjects));
let arrayObjects_dec = JSON.parse(JSON.stringify(arrayObjects));

arrayObjects_inc.sort(sortIncrease);
arrayObjects_dec.sort(sortDecrease);
console.log(""); //Set a Breakpoint to see the result in the debugger.
