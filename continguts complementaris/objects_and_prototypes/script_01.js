
const str1 = "a string that has been given a value through an assignation";
const str2 = new String("a string that has been created as String object");

console.log("str1 is " + str1)
console.log("-----------------------");
console.log("str2 is " + str2)
console.log("-----------------------");

console.log(Object.getPrototypeOf(str1))
if (Object.getPrototypeOf(str1) == Object.getPrototypeOf(str1))
    console.log("str1 and str2 have the same prototype, which is String")
