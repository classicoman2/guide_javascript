//New Date Object
let d1 = new Date();

console.log("\nd1 = " + d1);
console.log("d1 és de tipus: " + typeof d1);


//Dia 11 de Setembre de 2011
let d3 = new Date(2001, 8, 11);
console.log("\nd3 = " + d3);


// Dia 1 de Maig del 2020, a les 9h39'37" del matí - Els mesos comencen al número 0
let d2 = new Date(2020, 4, 1, 9, 39, 37);
console.log("\nd2 = " + d2);


//Mètodes String
{
  let d = new Date(2020, 4, 1, 9, 39, 37);
  console.log("Format sense processar -> " + d);
  console.log("toString() -> " + d.toString());
  console.log("toUTCString() -> " + d.toUTCString());
  console.log("toDateString() -> " + d.toDateString());
}


//Formats d'Introducció de Dates'
{
  console.log("");

  //ISO Date
  var d = new Date("2015-03-25");
  console.log(d);

  //Short Date
  var d = new Date("03/25/2015");
  console.log(d);
}
