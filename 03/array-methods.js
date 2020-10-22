import {
  createIndexesGrid,
  createTextGrid,
} from "./modules/modul-dibuixar-grid.js";

var array1 = ["Apple", "Banana", "Kiwi"];
var array2 = [100, 50, 25, 5, 1, 0.5];

//Show in the interface
document.getElementById("indexes").innerHTML = createIndexesGrid(array1.length);
document.getElementById("text").innerHTML = createTextGrid(array1);
document.getElementById("indexes2").innerHTML = createIndexesGrid(
  array2.length
);
document.getElementById("text2").innerHTML = createTextGrid(array2);

// POP, PUSH
{
  // pop()
  console.log(
    `Contents of array1 after popping element 0 '${array1.pop()}' is ${array1}`
  );
  // push()
  console.log(
    `\nLength of array1 after pushing the element 'Mango' is ${array1.push(
      "Mango"
    )} and contents = ${array1}`
  );

  // adding an element using an index
  array1[6] = "Grape";
  console.log(
    `\nContents of array1 after adding 'Grape' in index 6 is: ${array1} and length: ${array1.length}`
  );
}

// SHIFT, UNSHIFT
{
  // pop()
  console.log(
    `\nContents of array2 after SHIFTING the index 0 ${array2.shift()} is: ${array2}`
  );

  // push()
  array2.unshift("99999");
  console.log(
    `\nContents of array2 after UNSHIFTING the element '99999' is: ${array2}`
  );
}

//SPLICE
{
  // splice() to add 2 elements from position 1
  array1 = ["Apple", "Banana", "Kiwi"];
  array1.splice(1, 0, "Strawberry", "Cramberry");
  console.log(
    "\nUsing splice() to add elements 'Strawberry' and 'Cramberry' in index 1 results in: " +
      array1
  );

  //splice() to delete 1st element
  array1.splice(0, 1);
  console.log(
    "\nUsing splice() to delete first 2 elements results in: " + array1
  );

  //splice() to delete last 2 elements
  array1.splice(2, 2);
  console.log(
    "\nUsing splice() to delete last 2 elements results in: " + array1
  );

  //\nUsing splice() to add a simple element at the end (push is preferable)
  array1.splice(2, 0, "Blueberry");
  console.log("\nAdding 1 element in the end: " + array1);
}

// SLICE
{
  let subArray = array2.slice(2, 4);
  console.log(
    `\nUsing slice to cut 2 elements form index 2 results in ${subArray}`
  );
}
