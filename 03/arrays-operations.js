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

  //Loop array1 using for
  {
    let str = "";
    for (let i = 0; i < array1.length; i++) {
      str += array1[i] + " / ";
    }
    console.log("The contents of array1 through a loop: " + str);
  }

  {
    //Loop array1 using .forEach()
    function addElement(value) {
      str = str + value + " || ";
    }

    let str = "";
    //forEach()
    array2.forEach(addElement);
    console.log(
      "The contents of array2 through a loop, using forEach(): " + str
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
