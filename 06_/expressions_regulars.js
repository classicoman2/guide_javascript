//Definim un pattern

var str = "Aixo es una prova de expressions regulars"

    console.log( str.match( /es/i ) );
    // retorna:  [ 'es',  index: 5, input: 'Aixo es una prova de expressions regulars',  groups: undefined ]

 /*   
    /es/i  Es una expressio regular
    El patro de cerca es    es
    i  es un modificador que indica que la cerca és  case sensitive
 */  

    console.log( str.match( /es/g ) );
    // retorna: [ 'es', 'es' ]

/*
      Modificadors

  i - Cerca amb case Insensitive (tant majuscules com minuscules)
  g - cerca Global: cercar tots els casos (torna array)

*/

// Aixo dona la posicio de la primera p o g

/*
 Brackets

  [abc]	    Cerca qualsevol caracter entre els brackets
  [^abc]	Cerca qualsevol caracter que NO està entre els brackets
  [0-9]	    Qualsevol caracter entre 0 i 9 (qualsevol digit numèric decimal)
  [^0-9]	Qualsevol caracter que no sigui un dígit numèric decimal
  (x|y)	    O x o y 
*/

console.log( str.match( /[pg]/ ));
// Mostra: [ 'p', index: 12, ....

str = "$%gta31mfdaj";

//La posicio del primer digit:
console.log("La posicio del primer digit és " + str.match( /[0-9]/ ) );
console.log(str.match( /[0-9]/ ))


/*
 
  Metacaràcters més importants:

.	Cerca un sol caracter, excepte nova línia
\w	Cerca una lletra
\W	Cerca un caràcter que no sigui una lletra

\d	Cerca un dígit
\D	Cerca un caràcter que no sigui un dígit

\s	Cerca un espai en blanc
\S	Cerca un caràcter que no sigui un espai en blanc

\b	Cerca un match al principi o final de paraula, exemple:  \bHI, end like this: HI\b
\B	Cerca un match que no sigui ni a principi ni a final de paraula

\t	Cerca un caràcter tabulador

*/



/*

Quantificadors

(n pot ser qualsevol caràcter o expressió, exemple: [0-9], [a|b], etc ))

n+	Cerca un string que contengui com a mínim una ocurrència de  n 
n*	Cerca un string que contengui 0 o mésocurrències de  n  
n?	Cerca un string que contengui 0 o 1 ocurrències de n
n{X}	Cerca un string que contengui X ocurrencies de n seguides
n{X,Y}	Cerca un string que contengui entre X i Y ocurrencies de n seguides
n{X,}	Cerca un string que contengui com a mínim X ocurrencies de n seguides
n$	Cerca un string que acaba en n
^n	Cerca un string que comença amb n


Altres mètodes

exec()	Cerca un match en un string. Torna el primer match
test()	Testa si hi ha un match en un string. Returna true o false. Alerta, s'empra de forma inversa a match()
 i exec()
*/



str = "abc00123"
console.log( str.match(/0{2}/))
// Retorna: [ '00', index: 3, ...

console.log( /0{2}/.test(str))
// Retorna: true

/*

Altres exemples

*/

str = "%&$-ABC-123-456";

console.log( /^%/.test(str) )
// retorna: true

console.log( /6$/.test(str) )
// retorna: true

console.log( /\w{3,}/.test(str) )
// retorna: true

console.log( /\W{3,}/.test(str) )
// retorna: true

console.log( /\d{3,}/.test(str) )
// retorna: true

console.log( /\w{3,}-\d{3,}/.test(str) )
// retorna: true

console.log( /\d{3,}-\w{3,}/.test(str) )
// retorna: true

console.log( /\d{3,}-\W{3,}/.test(str) )
// retorna: false

console.log( /\W{3,}-[A-Z]{3,}/.test(str) )
// retorna: true
