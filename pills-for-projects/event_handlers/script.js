
window.onload = function () {

  // Solució amb  addEventListener()
  /* 
    document.getElementById("buttonSayHello").addEventListener("click", function () {
      document.getElementById("message").innerHTML = "Hola Classe!";
    });
   */

  // Solució més curta amb  onclick


  function imprimirTecla(valor) {
    document.getElementById("message").innerHTML += valor
  }

  document.getElementById("a").onclick = function () {

    imprimirTecla(this.id)
  };



  document.getElementById("b").onclick = function () {
    imprimirTecla(this.id)
  };


  // Solució amb arrow function -- ALERTA: this  ja no val el mateix

  /* 
    document.getElementById("buttonSayHello").onclick = () => {
    document.getElementById("message").innerHTML = "Hola Classe 2!";
  
      //Puc extreure info de l'element afectat per l'event
      console.log(this)
    }
   */
};

