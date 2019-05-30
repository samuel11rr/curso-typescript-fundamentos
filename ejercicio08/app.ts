interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision(xmen : Xmen){

  console.log( "Enviando a misión a: "+xmen.nombre );
};

function enviarCuartel(xmen : Xmen){

  console.log( "Enviando a cuartel a: "+xmen.nombre );
};

let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "regeneración"
};


enviarMision(wolverine);
enviarCuartel(wolverine);
