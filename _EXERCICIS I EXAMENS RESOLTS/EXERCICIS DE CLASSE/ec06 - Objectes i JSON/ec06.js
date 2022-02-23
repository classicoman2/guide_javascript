var equip_ciclista = {
  team: "alfa-lum-1984",
  ciclistes: [
    { nom: "Juan Alonso", born: "8/01/1958", height: 1.92, tours: 0, wins: 12 },
    { nom: "Josh Pantano", born: "25/10/2000", height: 1.84, tours: 3, wins: 12 },
    { nom: "Bid Seville", born: "12/07/1993", height: 1.88, tours: 3, wins: 3 },
    { nom: "Zolz Brucker", born: "08/09/1984", height: 1.72, tours: 0, wins: 1 },
    { nom: "Otto Verdes", born: "19/2/1979", height: 1.92, tours: 0, wins: 12 },
    { nom: "Bert Poel", born: "03/06/1995", height: 1.99, tours: 1, wins: 2 },
  ],
}

/* Funció per imprimir una llista de ciclistes */
imprimir_llista_ciclistes = function (riders) {
  let llista_noms = []
  riders.forEach((ciclista) => {
    llista_noms.push(ciclista.nom)
  })
  console.log(llista_noms.toString())
}

/**
 * 1 - imprimeix noms així com surten a la llista
 */
console.log("1:")
imprimir_llista_ciclistes(equip_ciclista.ciclistes)

/**
 * 2 - imprimeix noms ordenats
 */

// Funció auxiliar per ordenar per longitud de string
let sortStrings = function (string1, string2) {
  if (string1.toLowerCase() > string2.toLowerCase()) return 1
  if (string1.toLowerCase() < string2.toLowerCase()) return -1
  return 0
}

let llista_noms2 = []
equip_ciclista.ciclistes.forEach((ciclista) => llista_noms2.push(ciclista.nom))
console.log("2:")
console.log(llista_noms2.sort(sortStrings).toString())

/**
 * 3 - imprimeix noms ordenats per altura
 */
let ciclistes_per_edat = equip_ciclista.ciclistes.sort((a, b) => b.height - a.height)
console.log("3:")
imprimir_llista_ciclistes(ciclistes_per_edat)

/**
 * 4 - imprimeix noms de ciclistes de millor a pitjor
 */
let ranking = equip_ciclista.ciclistes.sort((a, b) => {
  if (a.tours < b.tours) return 1
  else {
    if (a.tours > b.tours) return -1
    else {
      //a igual numero de tours
      if (a.wins < b.wins) return 1
      else if (a.wins > b.wins) return -1
    }
  }
})
console.log("4:")
imprimir_llista_ciclistes(ranking)

/**
 * 5 - Empra map() per afegir un tour a tots els ciclistes
 */
let ciclistes_mes_un_tour = equip_ciclista.ciclistes.map((ciclista) => {
  ciclista.tours = ciclista.tours + 1
  return ciclista
})

//imprimir ciclistes i els tours que tenen
let resultat5 = ""
ciclistes_mes_un_tour.forEach((ciclista) => {
  resultat5 += `${ciclista.nom}(${ciclista.tours} tours)`
})
console.log("5:")
console.log(resultat5)

/**
 * 6 - Elimina els ciclistes amb manco de 30 anys
 */
let ciclistes_veterans = equip_ciclista.ciclistes.filter((ciclista) => {
  // Crea un objecte Date a partir de la data
  let dia = ciclista.born.substr(0, 2)
  let mes = ciclista.born.substr(3, 2)
  let any = ciclista.born.substr(6, 4)
  data_naixement = new Date(any, mes, dia)

  //Calcula els anys que té el ciclista

  return getAge(data_naixement) < 30 ? false : true
})

function getAge(dateString) {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

console.log("6:")
imprimir_llista_ciclistes(ciclistes_veterans)
