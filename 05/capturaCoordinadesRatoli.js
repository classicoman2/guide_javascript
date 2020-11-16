window.onload = function () {
  document
    .getElementById("container")
    .addEventListener("click", function (event) {
      var x = event.offsetX;
      var y = event.offsetY;

      console.log(`Has clicat a la posicio (${x}, ${y}) del viewport`);
    });
};
