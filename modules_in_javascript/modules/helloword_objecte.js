// ALERTA! Variables and functions must be "strict use"

// EL NOM DE LO QUE EXPORTAM AMB EXPORT DEFAULT S'HA DE DIR IGUAL 
// QUE EL FITXER !!!


export var objecte = new Object();

objecte.descripcio = "Soc un objecte"
objecte.onvisc = "visc dins d'un modul"

objecte.whereDoILive = function() {
    return this.onvisc;
}