
function es_numero() {
  input1 = document.getElementById("input1").value;

  if (input1 > 0) {
    document.getElementById("results").innerHTML = "POSITIU"
  } else {
    if (input1 < 0) {
      document.getElementById("results").innerHTML = "NEGATIU"
    } else {
      document.getElementById("results").innerHTML = "ES ZERO"
    }
  }
}
