// IMPORTAR
// He de posar el nom de les variables i mètodes entre {} i posar 
// la ruta del fitxer del mòdul
import { helloworld, message } from './modules/helloworld.js';

// No fa falta posar res entre { } quan s'importa per defecte un objecte
import helloworlddefault from './modules/helloworlddefault.js'

// No fa falta posar res entre { } quan s'importa per defecte un objecte
import {objecte} from './modules/helloword_objecte.js'


//Module 'helloworld.js'
console.log("The variable -> " + message);
console.log("The function -> " + helloworld());

//Modul emprant 'export default' 
console.log("The export default module -> " + helloworlddefault());

//Modul en el qual hi tenc un objecte, que és l'unic que exporto --> export default
console.log(objecte.descripcio + " i " + objecte.whereDoILive() )