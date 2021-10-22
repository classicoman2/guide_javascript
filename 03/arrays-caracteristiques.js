console.log(`var array1 = ["Apple", "Banana", "Kiwi"]
var array2 = [10, 5, 2.3, -2, 0, 100000, -32.5]
`)

//Índexos
var array1 = ["Apple", "Banana", "Kiwi"]
var array2 = [10, 5, 2.3, -2, 0, 100000, -32.5]

//Using the constructor  new Array()
var array11 = new Array("Apple", "Banana", "Kiwi")

//Show all the contents of the array
console.log(
  "\narray1 contains: " + array1 + " and has lenght: " + array1.length
)
console.log("array2 contains: " + array2 + " and has lenght: " + array2.length)

//both variables are Array objects
console.log("\narray1 is an " + typeof array1)
console.log("array11, created with Array constructor, is an " + typeof array11)

//Read and write an element in an array
console.log("\n Element 1 of array1 is = " + array1[1])
array1[1] = "Mango"
console.log("Element 1 of array1 is = " + array1[1])

//Outside the limits of the array
console.log(
  `Element 50 of array1 is ${array1[50]}, data type : ${typeof array1[50]}`
)
console.log("Element -2 of array1 is = " + array1[-2])
console.log("Last element of array2 is " + array2[array2.length - 1])

//Multidimensional arrays
var arrayDouble = [array1, array2]

console.log("\n\nCream un array multidimensional ajuntant aquells dos arrays:")
console.log("arrayDouble[0][2] contains: " + arrayDouble[0][2])
console.log("arrayDouble[1][3] contains: " + arrayDouble[1][3])
console.log("Length of arrayDouble is: " + arrayDouble.length)
