var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        // console.log("Se ejecutó el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    ;
    return Avenger;
}());
;
var antman = new Avenger("Antman", "CapTeam", "Scott Lang");
console.log(antman);
