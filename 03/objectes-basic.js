/**
 *  1- Objecte  bàsic
 */
let obj = { name: "Isaac", surname: "Newton", age: 57, married: true }
console.log(`\nMy name is ${obj.name} ${obj.surname}`)
console.log(`I'm ${obj.age} and I'm ${!obj.married ? "not" : ""} married`)

/**
 *  2- Array d'objectes
 */
let persones = [
  { name: "Maria", surname: "Saal" },
  { name: "Peter", surname: "Greenway" },
  { name: "Fran", surname: "Sales" },
]

for (p of persones) {
  console.log(p.name + " " + p.surname)
}

/**
 *  3- Objecte compost
 */
let grup = {
  estudis: "DAW",
  aula: "A208",
  curs: 2021,
  alumnes: [
    { name: "Samantha", surname: "Garcia" },
    { name: "Peter", surname: "Greenway" },
    { name: "Andrea", surname: "Tarkovsky" },
  ],
}
console.log(
  `\nEl grup ${grup.estudis} dels curs ${grup.curs} ocupa l'aula ${grup.aula}. Alumnat: ${grup.alumnes[0].name}, ${grup.alumnes[1].name} i ${grup.alumnes[2].name}`
)

/**
 *  4- Propietats i Mètodes d'un objecte
 *  Cal emprar 'this' per accedir a propietats i mètodes des de dins dels mètodes.
 */
grup = {
  //PROPIETATS
  estudis: "DAW",
  aula: "A208",
  curs: 2021,
  alumnes: [
    { name: "Maria", surname: "Saal" },
    { name: "Peter", surname: "Greenway" },
  ],

  //MÈTODES
  recompteAlumnes: function () {
    return this.alumnes.length
  },

  getAlumnName: function (i) {
    return this.alumnes[i].name
  },

  getAlumnSurname: function (i) {
    return this.alumnes[i].surname
  },
  getAlumnNomComplet: function (i) {
    return this.getAlumnName(i) + " " + this.getAlumnSurname(i)
  },
}

console.log(`\nEn l'aula hi ha ${grup.recompteAlumnes()} alumnes`)
console.log(`L'alumne número 1 es ${grup.getAlumnNomComplet(1)}`)

/**
 *  5- Afegir propietats i mètodes després de crear un objecte
 */

//Afegeix propietat
grup.pis = "1er"

//Afegeix mètodes
grup.CanviaNomAlumne = function (i, nom) {
  grup.alumnes[i].name = nom
}

grup.CanviaNomAlumne(1, "Ernest")
console.log(`\nL'aula del grup és la ${grup.aula} en el ${grup.pis} pis`)
console.log(`L'alumne número 1 es ${grup.getAlumnNomComplet(1)}`)

/**
 *  6)- Els objectes son mutables
 */

var x = { name: "John", surname: "Doe", age: 50 }

var y = x
y.name = "Marlon"
y.age = 10 // This will change both x.age and person.age

console.log("\nx = ")
console.log(x)
console.log("y = ")
console.log(y)
