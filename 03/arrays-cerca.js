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
  


// find(), findIndex()
console.log("find(), findIndex()");
{
    console.log(
      "  The first element of array1 that contains an 'i' is: " +
        array1.find((value) => value.indexOf("i") != -1) +
        " in position " +
        array1.findIndex((value) => value.indexOf("i") != -1)
    );
  
    console.log(
      "  The first element of array2 that is negative is: " +
        array2.find((value) => value < 0) +
        " in position " +
        array2.findIndex((value) => value < 0)
    );
  }
  
}