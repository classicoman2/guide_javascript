console.log(`var array1 = ["Apple", "Banana", "Kiwi"]
var array2 = [10, 5, 3.5, -2, 0, 100, -32]
`)

// Arrays a emprar
var array1 = ["Apple", "Banana", "Kiwi"]
var array2 = [10, 5, 3.5, -2, 0, 100, -32]

/** Anem a veure com funciona .forEach(), la primera HIGH ORDER FUNCTION.
 */
// 0. for clàssic: Un bucle que suma de tots els elements de array2
{
  let suma = 0
  for (let i = 0; i < array2.length; i++) {
    suma += array2[i]
  }
  console.log("0. La suma dels elements de array2 = " + suma)
}

// 1. La mateixa operació amb .forEach() - definint una funció de forma clàssica.
// La funció que pas x parametre té 3 parametres, pero podria bastar amb 'value'
{
  let total = 0
  //funció que passam per paràmetre
  function sumaElement(value, index, array) {
    total += value
  }

  array2.forEach(sumaElement)
  console.log("1. La suma dels elements de array2 = " + suma)
}

// 2. La mateixa operació amb .forEach() - definint una FUNCIO COM A EXPRESSIÓ (FUNCIO ANONIMA).
{
  let total = 0
  //funció que passam per paràmetre
  let sumaElement = function (value) {
    total += value
  }
  array2.forEach(sumaElement)
  console.log("2. La suma dels elements de array2 = " + suma)
}

// 3. La mateixa operació amb .forEach() - definint la FUNCIÓ COM A PARÀMETRE
{
  let total = 0
                
  array2.forEach(function (value) {
    total += value
  })
  console.log("3. La suma dels elements de array2 = " + suma)
}

// 4. La mateixa operació amb .forEach() - emprant una FUNCIO ARROW
{
  let suma = 0
  array2.forEach((value) => {
    suma += value
  })
  console.log("4. La suma dels elements de array2 = " + suma)
}

// 5. La mateixa operació amb .forEach() - emprant una FUNCIO ARROW EN FORMAT COMPRIMIT
// (1 sola instruccio dins la funcio)
{
  let suma = 0
  array2.forEach((value) => (suma += value))
  console.log("5. La suma dels elements de array2 = " + suma)
}

// 6. La mateixa operació amb .forEach() - emprant una FUNCIO ARROW EN FORMAT COMPRIMIT
// (1 sol parametre i 1 sola instruccio)
{
  let suma = 0
  // prettier-ignore
  array2.forEach(value => suma += value)
  console.log("6. La suma dels elements de array2 = " + suma)
}
