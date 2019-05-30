function enviarMision(xmen) {
    console.log("Enviando a misión a: " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando a cuartel a: " + xmen.nombre);
}
;
var wolverine = {
    nombre: "Wolverine",
    poder: "regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
