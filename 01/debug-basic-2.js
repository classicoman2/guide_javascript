var n, factorial = 1
n = 5

console.log("Calculam el factorial de " + n)

for (let i=2; i<n; i++) {
    //Put the breakpoint in the instruction below!
  factorial = factorial*i
}

document.getElementById("consola").innerHTML = "El factorial de " + n + " és " + factorial
