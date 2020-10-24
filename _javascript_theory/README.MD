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


## 'Les classes són Funcions'?

Anem a embullar-ho tot una mica més. 
...
...

## Comencem pel principi

Javascrit es diferencia, per exemple, de Java, en que a diferència d'aquest, que és un llenguatge basat en **herència de classes**, se basa en **herència de prototips** (següent subapartat).

Per això, ens hem de centrar en els objectes de Javascript. Comencem per l'objecte més bàsic.

`let x = {}`

també podria haver escrit,

`let x = new Object()`

Doncs bé, **tot objecte té un prototip**, una propietat interna [[Prototype]] que no se pot accedir directament sinó només amb el mètode `.getPropertyOf` de `Object` - `Object és **l'objecte arrel a partir del qual surten tots els altres**.

`Object.getPrototypeOf(x)`

També [es podria emprar la propietat __proto__ però no és recomanable](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript).

### Herència de Prototip

Herència de P. significa que quan empram una propietat o mètode d'un objecte, JS primer buscarà en aquell objecte i si no ho troba, mirarà en el seu [[Prototype]].

Hi ha una **cadena de prototip** que acaba sempre en `Object`. Més enllà no hi ha res. 

En el cas de `x`, com que hereda directament de `Object` - que correctament s'anomenaria `Object.Prototype` -  llavors `x.__proto__.__proto__` serà `null`.

### Tornant als arrays

Si tornam als arrays, 

## Webgrafia

- MDN Web Docs