/**
 * Funció per capturar el valor de l'input
 */
function captureInputArray() {
  var myInput = document.getElementById("myInput").value
  var myArray = myInput.split(",")
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].trim()
  }
  return myArray
}

/* Funció genèrica, per imprimir un array en la pantalla */
function printArray(array) {
  // Empty
  document.getElementById("divResults").innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    // Add elements
    document.getElementById("divResults").innerHTML += array[i]
    // add , in case is not the last element
    if (i < array.length - 1) document.getElementById("divResults").innerHTML += ", "
  }
}

function separats() {
  document.getElementById("divResults").innerHTML = captureInputArray().join("$")
}

function concat() {
  document.getElementById("divResults").innerHTML = ["zen", 19, "choice"].concat(
    captureInputArray()
  )
}

function splice() {
  miArray = captureInputArray()
  miArray.splice(1, 1)
  document.getElementById("divResults").innerHTML = miArray
}

function splice2() {
  miArray = captureInputArray()
  miArray.splice(1, 1, "Doe", 3.1415)
  document.getElementById("divResults").innerHTML = miArray
}

function strOrdenaMajor() {
  var miArray = captureInputArray()
  var miResult = miArray.sort()
  printArray(miResult)
}

function numOrdenaMajor() {
  var miArray = captureInputArray()
  var miResult = miArray.sort(function (num1, num2) {
    return num1 - num2
  })
  printArray(miResult)
}

function numOrdenaMenor() {
  var miArray = captureInputArray()
  var miResult = miArray.sort(function (a, b) {
    return b - a
  })
  printArray(miResult)
}

function strOrdenaPerLong() {
  var miArray = captureInputArray()
  var miResult = miArray.sort(function (a, b) {
    return a.length - b.length
  })
  printArray(miResult)
}

/**
 * A partir d’un Array de Strings, s'obté un array paral·lel les longituts dels elements.
 */
function strArrayLongs() {
  var miArray = captureInputArray()
  var miResult = miArray.map(function (item) {
    return item.length
  })
  printArray(miResult)
}

function strCreaFraseGuions() {
  var miArray = captureInputArray()
  document.getElementById("divResults").innerHTML = miArray.join(" - ")
}

/**
 *  codi que agafi totes les paraules d’un Array de Strings i construeixi un acrònim en majúscules.
 */
function strCreaAcronim() {
  var miArray = captureInputArray()
  //Una alternativa: return str.toUpperCase().match(/(\b[a-z])/g).join('')
  /* Versión larga:
    let miResult = miArray.map(function(item) {
        return item.charAt(0);
    });
    */
  let miResult = miArray.map((item) => item.charAt(0))
  let miStringResult = miResult.join("")
  document.getElementById("divResults").innerHTML = miStringResult.toUpperCase()
}

/**
 *  elimina d’un Array de Strings els elements amb longitud inferior a 5
 */
function strFiltreLongitud() {
  var miArray = captureInputArray()
  var miResult = miArray.filter(function (item) {
    if (item.length >= 5) {
      return item
    }
  })
  printArray(miResult)
}

/**
 *  Obté la suma total d’un array de números emprant el mètode forEach()
 */
function numSumaForeach() {
  var miArray = captureInputArray()
  var suma = 0
  miArray.forEach(function (item) {
    suma += parseInt(item)
  })
  document.getElementById("divResults").innerHTML = suma
}

/**
 *  Calcula el número de vegades que apareix exactament l’string “la” en un array.
 *  Exemple: [“ la ”, “o”, “lama”, “t”, “ la ”, “bela”] → 2
 */
function strOcurrencies() {
  var miArray = captureInputArray()
  miArray = miArray.filter(function (item) {
    return item.includes("la")
  })
  document.getElementById("divResults").innerHTML = miArray.length
}

/**
 *  Suma total d’un array de números emprant el mètode reduce()
 */
function numSumaReduce() {
  var miArray = captureInputArray()
  var suma = miArray.reduce(function (num1, num2) {
    return parseInt(num1) + parseInt(num2)
  }, 0)
  //0 es el valor inicial; si no lo diera emplearía el primer valor usado.
  document.getElementById("divResults").innerHTML = suma
}

/**
 *  Valor numèric més alt d’un array (emprant forEach)
 */
function numMaxForeach() {
  var miArray = captureInputArray()
  var max = 0
  miArray.forEach(function (item) {
    if (parseInt(item) > max) {
      max = parseInt(item)
    }
  })
  document.getElementById("divResults").innerHTML = max
}

/**
 *  Crea un Array nou agafant el primer i el darrer element d’un Array i col·locant-los
 * al centre de l’Array. (Donarem per suposat que sempre se tractarà d’un Array amb un número parell de posicions)
 */
function restructuraArray() {
  var miArray = captureInputArray()
  let valorInicial = miArray[0]
  miArray.shift()
  let valorFinal = miArray[miArray.length - 1]
  miArray.pop()
  let posicionMedia = Math.floor(miArray.length / 2)
  //el 0 indica el número de elementos que quitar
  miArray.splice(posicionMedia, 0, valorInicial, valorFinal)
  printArray(miArray)
}

/**
 *  CDonat un array de números, retalla els tres primers elements de l’array i els
 * col·loqui al final en ordre invertit.
 * Exemple: [ 1,5,8 ,3,4] → [3,4, 8,5,1 ]
 */
function capCuaArray() {
  var miArray = captureInputArray()
  let misValores = miArray.slice(0, 3) //inicio(incluido)-final(excluido)
  let miResult = miArray.slice(3)
  miResult = miResult.concat(misValores.reverse())
  printArray(miResult)
}
