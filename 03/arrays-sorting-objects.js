let arrayObjects = [
  { type: "Volvo", year: 1970 },
  { type: "Seat", year: 1950 },
  { type: "Fiat", year: 2010 },
  { type: "Wolkswagen", year: 1960 },
  { type: "Saab", year: 2000 },
  { type: "BMW", year: 1980 },
]

// NOU! Clonam els arrays d'objectes per fer còpies
let arrayObjects1 = JSON.parse(JSON.stringify(arrayObjects))
let arrayObjects2 = JSON.parse(JSON.stringify(arrayObjects))

// funció auxiliar per ordenar números de forma creixent
let sortIncrease = function (object1, object2) {
  return object1.year - object2.year
}

// Funció auxiliar per ordenar per longitud de string
let sortStrings = function (object1, object2) {
  if (object1.type.toLowerCase() > object2.type.toLowerCase()) return 1
  if (object1.type.toLowerCase() < object2.type.toLowerCase()) return -1
  return 0
}

// Ordena array per year
arrayObjects1.sort(sortIncrease)

// Ordena array per marca
arrayObjects2.sort(sortStrings)

console.log("POSAR UN BREAKPOINT AQUI PER PODER VEURE ELS RESULTATS")
