//New Date Object
let d1 = new Date();

console.log("\nd1 = " + d1);
console.log("d1 és de tipus: " + typeof d1);


//Dia 20 d'Agost de 1986
let d3 = new Date(1986, 8, 20);
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
  var d = new Date("2023-01-10");
  console.log(d.toDateString());

  //Short Date
  var d = new Date("03/25/1973");
  console.log(d.toDateString());
}
