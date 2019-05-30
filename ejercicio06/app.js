var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Fuerza"
};
/*//sacamos los datos uno por uno
 let nombre = avenger.nombre;
 let clave = avenger.clave;
 let poder = avenger.poder;
 */
//sacamos los datos por medio de Destructuración de objetos
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
var avengers = ["Thor", "Steve", "Tonny"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
