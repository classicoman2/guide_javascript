let jugadors = [
  { dorsal: 1, name: "John Mayal", age: 38 },
  { dorsal: 3, name: "Peter Tusk", age: 30 },
  { dorsal: 8, name: "Logan McKenzie", age: 22 },
  { dorsal: 24, name: "Pepe Rust", age: 18 },
  { dorsal: 9, name: "Malk Sonic", age: 37 },
  { dorsal: 11, name: "Trop Wurst", age: 33 },
  { dorsal: 12, name: "Banfild Soren", age: 37 },
  { dorsal: 10, name: "Ken Dorst", age: 31 },
  { dorsal: 30, name: "Miles Fichte", age: 17 },
  { dorsal: 5, name: "Adu Baye", age: 25 },
]

pintaJugadors(jugadors)

function pintaJugadors(jugadors) {
  // Get parent
  let parent = document.getElementById("divJugadors")

  parent.innerHTML = ""

  jugadors.forEach((jugador) => {
    //crea p
    let p = document.createElement("p")
    p.innerHTML =
      jugador.dorsal + ". " + jugador.name + ", " + jugador.age + " anys" + "<button>Eliminar</button>"
    // id
    p.id = jugador.dorsal
    // classes
    p.className = "jugador"
    //afegir
    parent.appendChild(p)
  })

  for (element of document.getElementsByClassName("jugador")) {
    element.onclick = function () {
      document.getElementById(this.id).style.display = "none"
    }
  }
}

document.getElementById("ordena").onclick = function () {
  jugadors.sort((a, b) => {
    return a.dorsal - b.dorsal
  })
  pintaJugadors(jugadors)
}

document.getElementById("purga").onclick = function () {
  let jugadorsFiltrats = jugadors.filter((jugador) => {
    return jugador.age < 30
  })
  pintaJugadors(jugadorsFiltrats)
}
