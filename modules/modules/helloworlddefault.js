// ALERTA! Variables and functions must be "strict use"

// EL NOM DE LO QUE EXPORTAM AMB EXPORT DEFAULT S'HA DE DIR IGUAL 
// QUE EL FITXER !!!

export default function () {
    return printamessage();
}

var message = "Hello World, Module in Javascript"
function printamessage() {
    return message;
}
