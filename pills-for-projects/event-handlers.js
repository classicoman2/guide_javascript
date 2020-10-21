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
  document
    .getElementById("buttonSayHello")
    .addEventListener("click", function () {
      let msg = "Hello Class, it's " + getHoraActual();
      console.log(msg);
      document.getElementById("message").innerHTML = msg;
    });
};
