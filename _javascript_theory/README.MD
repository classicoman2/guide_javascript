# Com està fet Javascript?

## Conceptes bàsics

- JavaScript és un llenguatge interpretat (o compilat _just-in-time_)
- Empra **Funcions de Primera Classe**
- Encara que la seva funció bàsica és la de ser un llenguatge de _scripting_ per navegadors web, pot ser emprat en altres entorns, com Node.js
- JavaScript està **basat en prototips** (Següent apartat)
- És multiparadigma (¿¿)
- És _single-threaded_ - o sigui que no permet múltiples fils d'execució
- És dinàmic
- Permet crear classes, encara que no és basat en herència de classes - com Java - sinó en herència de prototipus. A Javascript, de fet, **les classes són funcions**, com veurem més endavant.

## 1) Què son funcions de Primera Classe?

Vol dir que a JS les funcions poden ser variables, poden ser passades per paràmetre en una altra funció - com `forEach()`, `map()`, etc - o retornades per una altra funció ([link](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)).

I no només això: **les funcions són objectes** a Javascript. Això ho pots investigar al codi: `functions-are-objects.js`.

En realitat, **cada funció és, a JS, un objecte de tipus Function** i de fet, podríem crear funcions mitjançant [el constructor Function()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function).

De fet, si executam aquest codi, donarà com a resultat `true`.

    console.log ( (function(){}).constructor === Function )

Per entendre això, primer hem de comprendre què ès això de que Javascript està **basat en Prototipus**

## 2) Un llenguatge basat en Prototipus

Javascrit es diferencia, per exemple, de Java, en que a diferència d'aquest, que és un llenguatge basat en **herència de classes**, se basa en **herència de prototips** (següent subapartat).

Per això, ens hem de centrar en els objectes de Javascript. Comencem per l'objecte més bàsic.

    let x = {}

també podria haver escrit,

    let x = new Object()

Doncs bé, **tot objecte té un prototip**, una propietat interna [[Prototype]] que no se pot accedir directament sinó només amb el mètode `.getPropertyOf` de `Object` - `Object és **l'objecte arrel a partir del qual surten tots els altres**.

`Object.getPrototypeOf(x)`

També [es podria emprar la propietat __proto__ però no és recomanable](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript).

### Herència de Prototip

Herència de P. significa que quan empram una propietat o mètode d'un objecte, JS primer buscarà en aquell objecte i si no ho troba, mirarà en el seu [[Prototype]].

Hi ha una **cadena de prototip** que acaba sempre en `Object`. Més enllà no hi ha res. 

En el cas de `x`, com que hereda directament de `Object` - que correctament s'anomenaria `Object.Prototype` -  llavors `x.__proto__.__proto__` serà `null`.

### Arrays

Creem un nou array amb  `let y = []` o bé amb `let y = new Array()` que és el mateix. Si miram a la seva propietat [[prototype]] - o sigui, a __proto__ - en el debugger, veurem que té més cosa que la propietat [[Prototype]] de x. El motiu és que hereda de l'objecte `Array.Prototype` enlloc del més bàsic `Object.Prototype`. I `Array.Prototype` deriva de `Object.Prototype`. Aixi que y -> Array -> Object.

Per tant, ara `y.__proto__.__proto__` no és `null` sinó `Object.Prototype`.

Per testar això, me bastaria amb executar aquest codi:

    y.__proto__ === Array.prototype;            // true
    y.__proto__.__proto__ === Object.prototype; // true
    y instanceof Array; // true


## 3) Les classes són funcions




## Webgrafia

- [Understanding Prototypes and Inheritance in JavaScript - Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
- MDN Web Docs