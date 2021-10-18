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

console.log("");

{
  //ISO Date
  var dd2 = new Date("2022-01-01");
  console.log(dd2.toDateString());

  //Short Date
  var dd1 = new Date();
  console.log(dd1.toDateString());



  console.log(dd1.getDate() + "/" + (dd1.getMonth() + 1) + "/" + dd1.getFullYear());
}

// Data i hora d'ara mateix
let dd1t = dd1.getTime()

// Data d'any nou
let dd2t = dd2.getTime();

// Calcular dies entre dues dates: divideixo els milisegons per 24 hores, 60 minuts, 60 segons
// i 1000 milímetres
console.log((dd2t - dd1t)/1000/60/60/24)
