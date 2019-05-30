let avenger = {
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
let { nombre, clave, poder } = avenger;

console.log(nombre, clave, poder);


let avengers:string[] = ["Thor","Steve","Tonny"];

let [ thor, capi, ironman ] = avengers;

console.log( thor, capi, ironman );
