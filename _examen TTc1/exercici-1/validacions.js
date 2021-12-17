export function validarUsername(username) {
  if (username.length != 6) return "La longitud del username ha de ser 6"

  let components = username.split("_")
  if (components.length < 2) return "Falta _ en el username"
  if (components.length > 2) return "Hi ha més de un _ en el username"
  if (components[0] != "u") return "El username ha de començar amb u"
  if (components[1].length != 4) return "La longitud del username és incorrecta"

  return true
}

export function validarPassword(password) {
  if (password.length < 8) return "La longitud del password ha de ser >= 8"

  if (password.indexOf("12345") != -1) return "No pot contenir el text 12345"

  if (password.split("$").length + password.split("%").length != 4)
    return "Ha de contenir almanco dues vegades alguns dels caracters $ i %"

  return true
}
