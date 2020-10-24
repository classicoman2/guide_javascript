# Com està fet Javascript?

## Conceptes bàsics

- JavaScript és un llenguatge **interpreted** (o compilat _just-in-time_)
- Empra **first-class functions**, la qual cosa vol dir que les funcions poden ser variables, poden ser passades per paràmetre en una altra funció - com `forEach()`, `map()`, etc - o retornades per una altra funció ([link](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)).
- Encara que la seva funció bàsica és la de ser un llenguatge de _scripting_ per navegadors web, pot ser emprat en altres entorns, com Node.js
- JavaScript està **basat en prototips** (Següent apartat)
- És multiparadigma (¿¿)
- És _single-threaded_ - o sigui que no permet múltiples fils d'execució
- És dinàmic
- etc

## Que les funcions poden ser variables?

Sí, les funcions són diferents que en altres llenguatges, no només per allò, sinó perquè: **les funcions són objectes**. La raó d'això es troba en què, com he dit abans, JavaScript està **basat en prototips**. 

Què son prototips? Això ho veurem més endavant. 

Anem a investigar això de que __les funcions son objectes__ en el codi: `functions-are-objects.js`.

Aixi doncs, les funcions són _function_ però el prototipus del seu prototipus és un Object. 

Vaja, que les funcions deriven totes d'un objecte.

De fet, si executam aquest codi, donarà com a resultat `true`.

`console.log ( (function(){}).constructor === Function )`

Perquè en realitat, **cada funció és, a JS, un objecte de tipus Function** i de fet, podríem crear funcions mitjançant [el constructor Function()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function).


## Els arrays també son objectes

De forma similar al que hem fet per les funcions, estudiem els arrays a `arrays-are-functions.js`.


## Què vol dir que 'les classes són Funcions'?


## Webgrafia

- MDN Web Docs