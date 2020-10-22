import {
  createIndexesGrid,
  createTextGrid,
} from "./modules/modul-dibuixar-grid.js";

window.onload = () => {
  var array1 = ["Banana", "Strawberry", "Apple", "Kiwi"];
  var array2 = [100, 25, 1, 50, 5, 0.5];
  var array3 = ["Banana", 5, "Apple", 2];

  //Show in the interface
  document.getElementById("indexes").innerHTML = createIndexesGrid(
    array1.length
  );
  document.getElementById("text").innerHTML = createTextGrid(array1);
  document.getElementById("indexes2").innerHTML = createIndexesGrid(
    array2.length
  );
  document.getElementById("text2").innerHTML = createTextGrid(array2);

  // SORT
  {
    console.log("After sorting array1, the result is: '" + array1.sort());
    console.log("After sorting array2, the result is: '" + array2.sort());
    console.log("After sorting array3, the result is: '" + array3.sort());
  }

  // SORT WITH COMPARING FUNCTION
  {
    //Sorts numbers increasingly
    let sortIncrease = function (a, b) {
      return a - b;
    };

    //sorts numbers decreasingly
    let sortDecrease = function (a, b) {
      return b - a;
    };

    //Sorts by length of the string
    let sortByLength = function (a, b) {
      return a.length - b.length;
    };

    console.log(
      `\nSorting array2 with 'sortIncrease()' results in ${array2.sort(
        sortIncrease
      )}`
    );
    console.log(
      `Sorting array2 with 'sortDecrease()' results in ${array2.sort(
        sortDecrease
      )}`
    );
    console.log(
      `Sorting array2 with 'sortByLength()' results in ${array1.sort(
        sortByLength
      )}`
    );
  }

  // MAX and min (only numerical values)
  {
    console.log(
      "The maximum value inside array1 is: ",
      Math.max.apply(null, array2)
    );
    console.log(
      "The minimum value inside array2 is: ",
      Math.min.apply(null, array2)
    );
  }

  // REVERSE
  {
    console.log("After reversing array2, the result is: '" + array2.reverse());
  }
};
