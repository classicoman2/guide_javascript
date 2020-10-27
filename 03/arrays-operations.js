import {
  createIndexesGrid,
  createTextGrid,
} from "./modules/modul-dibuixar-grid.js";

window.onload = () => {
  //Interface
  var array1 = ["Apple", "Banana", "Kiwi"];
  var array2 = [10, 5, 2.3, -2, 0, 100000, -32.5];

  //Show in the interface
  document.getElementById("indexes").innerHTML = createIndexesGrid(
    array1.length
  );
  document.getElementById("text").innerHTML = createTextGrid(array1);
  document.getElementById("indexes2").innerHTML = createIndexesGrid(
    array2.length
  );
  document.getElementById("text2").innerHTML = createTextGrid(array2);

  // Fa un bucle en l'array i guarda els elements en un string 'str'
  {
    let str = "";
    for (let i = 0; i < array1.length; i++) {
      str += array1[i] + " / ";
    }
    console.log("The contents of array1 through a loop: " + str);
  }

  {
    let resultat = 0;
    //forEach()

    //Loop array1 using .forEach()
    function sumaElement(value) {
      resultat += value;
    }

    array2.forEach(sumaElement);
    console.log(
      "LA SUMA DELS ELEMENTS DE L'ARRAY = " + resultat
    );
  }

  //Associative Arrays -> "Javascript style"
  {
    let arrayAssoc = [];
    arrayAssoc["name"] = "Peter Green";
    arrayAssoc["age"] = 35;
    console.log(
      "arrayAssoc is an " +
        arrayAssoc.constructor +
        "and its contents is: [" +
        arrayAssoc.name +
        ", " +
        arrayAssoc.age +
        "]"
    );
    console.log(arrayAssoc);
  }
};
