import { helloworld } from './modules/helloworld.js';
import helloworlddefault from './modules/helloworlddefault.js'

//Module 'helloworld.js'
console.log("The variable -> " + helloworld);
console.log("The function -> " + helloworld());

//Module using 'export default'  - I use the name of the module as a function
console.log("The export default module -> " + helloworlddefault());
