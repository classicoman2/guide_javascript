import { validarUsername, validarPassword } from "./validacions.js"

/**
 * Validar camps
 */
function validarCamps(username, password) {
  let retornValidaUsername = validarUsername(username)
  let retornValidaPassword = validarPassword(password)
  if (retornValidaUsername === true) {
    // Valida Password
    if (retornValidaPassword === true) {
      let dades = {
        username: username,
        password: password,
      }
      return dades
    }
    // Retorna l'error que s'ha produit
    else return retornValidaPassword
  }
  // Retorna
  else return retornValidaUsername
}

document.getElementById("botoValidar").onclick = function () {
  // Validar Camps
  let resultat = validarCamps(
    document.getElementById("username").value,
    document.getElementById("password").value
  )

  // Hi ha un error
  if (typeof resultat == "string") {
    document.getElementById("resultat").innerHTML = ""
    document.getElementById("error").innerHTML = resultat
  } else {
    document.getElementById(
      "resultat"
    ).innerHTML = `Username: ${resultat.username},  Password: ${resultat.password}`
    document.getElementById("error").innerHTML = ""
  }
}
