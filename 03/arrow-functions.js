// Una funció tradicional
function funcioTradicional(a, b) {
  return a + b
}

// Una funció-variable
funcioVariable = function (a, b) {
  return a + b
}

// Una Arrow function
funcioArrow = (a, b) => {
  return a + b
}

//Arrow function en format comprimit (amb 1 sol paràmetre)
funcioArrowComprimida = (a, b) => a + b

//Arrow function comprimida amb 1 sol parametre
functioArrow1parametre = a => Math.pow(a,a)

console.log(`La funcio tradicional retorna ${funcioTradicional(3, 4)}`)
console.log(`La funcio variable retorna ${funcioVariable(3, 4)}`)

console.log(`La funcio arrow retorna ${funcioArrow(3, 4)}`)
console.log(`La funcio arrow comprimida retorna ${funcioArrowComprimida(3, 4)}`)

console.log(`La funcio arrow 1 parametre retorna ${functioArrow1parametre(3)}`)
