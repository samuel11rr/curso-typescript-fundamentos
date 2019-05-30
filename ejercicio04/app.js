//quien es un parámetro obligatorio
//objeto es un parametro por defecto (que se le puede cambiar el valor)
//momento es un parámetro opcional
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    ;
    console.log(mensaje);
}
;
// activar("Samus");
activar("Samus", "computadora", "mañana");
