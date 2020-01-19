// name of variables and functions go inside curly braces
import { helloworld, message } from './modules/helloworld.js';
// Don't need curly braces when using export default in the module
import helloworlddefault from './modules/helloworlddefault.js'

//Module 'helloworld.js'
console.log("The variable -> " + message);
console.log("The function -> " + helloworld());

//Module using 'export default'  - I use the name of the module as a function
console.log("The export default module -> " + helloworlddefault());
