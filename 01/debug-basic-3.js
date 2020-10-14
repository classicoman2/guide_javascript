    var n, factorial = 1
    n = 4

    console.log("Calculam el factorial de " + n)

    factorial = calculaFactorial(n)

    function calculaFactorial(n) {
      for (let i=2; i<n; i++) {
        //Put the breakpoint in the instruction below!
        factorial = incrementaFactorial(i, factorial)
      }
      return factorial
    }

    function incrementaFactorial(i, f) {
        return f*i
    }

    document.getElementById("consola").innerHTML = "El factorial de " + n + " és " + factorial
