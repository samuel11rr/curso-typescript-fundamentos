//quien es un parámetro obligatorio
//objeto es un parametro por defecto (que se le puede cambiar el valor)
//momento es un parámetro opcional

function activar(quien:string,
                 objeto:string="batiseñal",
                 momento?:string){
  let mensaje:string;

  if( momento ){
    mensaje = `${ quien } activó la ${ objeto } en la ${ momento }`;
  } else{
    mensaje = `${ quien } activó la ${ objeto }`;
  };

  console.log(mensaje);
};

// activar("Samus");
activar("Samus", "computadora", "mañana");
