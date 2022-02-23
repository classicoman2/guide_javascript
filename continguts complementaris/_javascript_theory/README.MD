# Un Cop d'ull a l'arquitectura de Javascript

En aquest article, intento mostrar una sèrie de curiositats del llenguatge, com les funcions de primera classe, que les funcions són objectes, que les classes són funcions i que tot plegat remet al disseny de JS com un llenguatge basat en **herència de prototipus**.

## Conceptes bàsics

- JavaScript és un llenguatge interpretat (o compilat _just-in-time_)
- Empra **Funcions de Primera Classe**
- Encara que la seva funció bàsica és la de ser un llenguatge de _scripting_ per navegadors web, pot ser emprat en altres entorns, com Node.js
- JavaScript està **basat en prototips**
- És multiparadigma
- És _single-threaded_ - o sigui que no permet múltiples fils d'execució
- És dinàmic
- Permet crear classes, encara que no és basat en herència de classes - com Java - sinó en herència de prototipus. A Javascript, de fet, **les classes són funcions**, com veurem més endavant.

## 1) Què son funcions de Primera Classe?

Vol dir que a JS les funcions poden ser variables, poden ser passades per paràmetre en una altra funció - com `forEach()`, `map()`, etc - o retornades per una altra funció ([link](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)).

## 2) Les funcions són objectes

Seguint amb les funcions: a Javascript, les funcions són objectes. En realitat, **cada funció és, a JS, un objecte de tipus Function** i de fet, podríem crear funcions mitjançant [el constructor Function()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function).

De fet, si executam aquest codi, donarà com a resultat `true`.

    console.log ( (function(){}).constructor === Function )

Per entendre això, primer hem de comprendre què ès això de que Javascript està **basat en Prototipus**

## 3) Un llenguatge basat en Prototipus

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


## 4) Les classes són funcions

Provem aixó:

    // Initializing a function with a function expression
    const x = function() {}
    // Initializing a class with a class expression
    const y = class {}

Si mostram els valor d'aquestes instruccions, el resultat serà:

    Object.getPrototypeOf(x);
    // Sortida:  ƒ () { [native code] }

    Object.getPrototypeOf(y);
    // Sortida:  ƒ () { [native code] }

Això té conseqüències pràctiques, com que qualsevol funció pot esdevenir un constructor emprant `new`,

        const x = function() {}

        // Initialize a constructor from a function
        const constructorFromFunction = new x();

Pots trobar més informació sobre classes al punt de la webgrafia _Understanding Classes in JavaScript - Tania Rascia_. Ara m'interessa seguir amb l'anterior afirmació. Que qualsevol funció pot esdevenir un constructor? Doncs sí, sempre i quan emprem la paraula clau `new`.

I no només això! Donat que, com hem demostrat abans, les funcions són objectes, puc definir propietats i mètodes en les funcions que m'hagin de servir posteriorment de constructors, exemple:

    // Initialize a constructor function for a new Hero
    function Hero(name, level) {
        this.name = name;
        this.level = level;
    }

I podem crear una nova instància amb `new`:

    let hero1 = new Hero('Bjorn', 1);

En tens una mostra en el codi `function-constructor-object.js`.


## Webgrafia

- [Object Prototypes - MDN Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Understanding Prototypes and Inheritance in JavaScript - Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
- [Understanding Classes in Javascript - Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
- MDN Web Docs