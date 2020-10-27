import {
  createIndexesGrid,
  createTextGrid,
} from "./modules/modul-dibuixar-grid.js";

var array1 = ["Apple", "Banana", "Kiwi"];
var array2 = [10, 5, 2.3, -2, 0, 100000, -32.5];

window.onload = () => {
  //Show in the interface
  document.getElementById("indexes").innerHTML = createIndexesGrid(
    array1.length
  );
  document.getElementById("text").innerHTML = createTextGrid(array1);
  document.getElementById("indexes2").innerHTML = createIndexesGrid(
    array2.length
  );
  document.getElementById("text2").innerHTML = createTextGrid(array2);

  /**
   * forEach
   */

  {
    function concatenateElement(value, index, array) {
      result += value + separator;
    }

    // 1) VERSIÓ STANDARD
    let result = "";
    array1.forEach(function concatenateElement1(value, index, array) {
      result += "(" + index + ") " + value + " ";
    });
    console.log(`Resultat del Foreach 1 = ${result}`);

    // 2) EMPRANT UNA FUNCIÓ DEFINIDA COM A VARIABLE
    result = "";

    //Tambe podria definir-ho aixi:
    function concatenateElement2(value, index, array) {
      result += value + " | ";
    }
    /*
    let concatenateElement2 = function (value, index, array) {
      result += value + " | ";
    };
    */
    array1.forEach(concatenateElement2);
    console.log(`Resultat del Foreach 2 = ${result}`);

    // 3) MÉS COMPACTE: EMPRANT UNA ARROW FUNCTION
    result = "";
    array1.forEach((value, index, array) => {
      result += value + " | ";
    });
    console.log(`Resultat del Foreach 3 = ${result}`);

    // 4) VERSIÓ AMB ARROW FUNCTION PER EVITAR QUE HI HAGI UN SEPARADOR '|' AL FINAL DE TOT
    result = "";
    array1.forEach(
      (value, index, array) =>
        (result += index < array.length - 1 ? value + " | " : value)
    );
    console.log(`Resultat del Foreach 4 = ${result}`);
  }

  /**
   *  map()
   */

  // Exemple: convertir els elements negatius en positius
  // Se crea un nou array
  {
    let nouArray2 = array2.map(canviarSigne);
    function canviarSigne(value) {
      if (value > 0) return value;
      else return -value;
    }

    console.log(
      `\nVersió sense comprimir de map(): \n  array2 = ${array2}\n  nouArray2 = ${nouArray2}`
    );
  }

  // Versió comprimida amb una funció arrow i operador ternari
  {
    let nouArray2 = array2.map((value) => (value = value > 0 ? value : -value));

    console.log(
      `\nVersió comprimida de map(): \n  array2 = ${array2}\n  nouArray2 = ${nouArray2}`
    );
  }

  // filter()
  console.log("\nfilter()");
  {
    // Filtram i ens quedam només amb els números majors que dos
    // Empram la funció arrow
    let arrayMajorsQue2 = array2.filter((value) => {
      return value > 2;
    });
    console.log("  Els nombres majors que 2 en array2 són: " + arrayMajorsQue2);

    // Filtram i ens quedam només amb les paraules que tenguin alguna 'a'
    // Empram la funció arrow supercomprimida
    let arrayAmbUnaA = array1.filter((value) => value.indexOf("a") != -1);
    console.log(
      "  Les paraules que tenen almanco una a minúscula són:" + arrayAmbUnaA
    );
  }

  // reduce()
  console.log("\nreduce()");
  {
    let sumaArray1 = array1.reduce((total, value) => (total += value));
    console.log(
      "  La concatenació de tots els elements de array1 és: " + sumaArray1
    );

    let sumaArray2 = array2.reduce((total, value) => (total += value));
    console.log("  La suma de tots els elements de array2 és: " + sumaArray2);
  }

  // every(), some()
  {
    console.log(
      "\nsome() - ALGUN element de array1 té una a minúscula a dins? " +
        array1.some((value) => value.indexOf("a") != -1)
    );
    console.log(
      "every()- TOTS els elements de array1 tenen una a minúscula a dins? " +
        array1.every((value) => value.indexOf("a") != -1)
    );

    console.log(
      "some() - Algun element de array2 és negatiu: " +
        array2.some((value) => value < 0)
    );
    console.log(
      "every()- Tots els elements de array2 son menors de 1.000.000: " +
        array2.every((value) => value < 1000000)
    );
  }
};
