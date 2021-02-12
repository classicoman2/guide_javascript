window.onload = function () {
  //Click on Enviar
  document.getElementById("btnEnviar").addEventListener("click", (e) => {
    // Impedir comportament per defecte del Form
    e.preventDefault();

    //Redirigir
    window.location.href = "foo.html";
  });
};
