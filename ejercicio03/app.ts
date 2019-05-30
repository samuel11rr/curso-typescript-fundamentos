let nombre:string = "Samuel";
let apellido:string = "Ramirez";
let edad = 25;

let texto = `Hola,
${ nombre } ${ apellido } \n
(${ edad })`;

function getApodo(){
  return "Samus";
};

let texto2 = `${ getApodo() }`;

console.log(texto2);
