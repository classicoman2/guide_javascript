window.onload = function () {
  document
    .getElementById("container")
    .addEventListener("click", function (event) {
      var x = event.clientX;
      var y = event.clientY;

      console.log(`Has clicat a la posicio (${x}, ${y}) del viewport`);
    });
};
