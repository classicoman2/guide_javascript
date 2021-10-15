/**
 * Obtenir hora actual
 */
function getHoraActual() {
  let data = new Date();
  return (
    data.getHours() + ":" + data.getMinutes() + "'" + data.getSeconds() + '"'
  );
}


window.onload = function () {


  // Solució amb  addEventListener()

  document.getElementById("buttonSayHello").addEventListener("click", function () {
    let msg = "Hello Class, it's " + getHoraActual();
    document.getElementById("message").innerHTML = msg;

    //Puc extreure info de l'element afectat per l'event
    console.log(this)
  });


  // Solució més curta amb  onclick


  /* 
   document.getElementById("buttonSayHello").onclick = function () {
     let msg = "Hello Classs, it's " + getHoraActual();
     document.getElementById("message").innerHTML = msg;
   };
  */


  // Solució amb arrow function -- ALERTA: this  ja no val el mateix

/* 
  document.getElementById("buttonSayHello").onclick = () => {
    let msg = "Hello Class, it's " + getHoraActual();
    document.getElementById("message").innerHTML = msg;

    //Puc extreure info de l'element afectat per l'event
    console.log(this)
  }
 */
};
