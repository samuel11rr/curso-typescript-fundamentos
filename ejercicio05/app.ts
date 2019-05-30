/*//funcion normal
let funcionNormal = function( a ){
  return a;
};

//funcion de flecha
let funcionFlecha = a => a;

console.log(funcionNormal("Normal"));
console.log(funcionFlecha("Flecha"));
*/

let nombre = "Samus";

let hulk = {
  nombre: "Hulk",
  smash(){
    setTimeout( () => console.log(this.nombre + " smash!!") , 1500 );
  }
};

hulk.smash();
