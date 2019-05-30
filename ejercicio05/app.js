/*//funcion normal
let funcionNormal = function( a ){
  return a;
};

//funcion de flecha
let funcionFlecha = a => a;

console.log(funcionNormal("Normal"));
console.log(funcionFlecha("Flecha"));
*/
var nombre = "Samus";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
