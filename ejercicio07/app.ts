let prom1 = new Promise( function( resolve, reject ){
  setTimeout( ()=>{
    console.log("Promesa terminada");
    //termina bien
    resolve();

    //termina mal
    reject();
  }, 1500 )
} )

console.log("Paso 1");

prom1.then( function(){
  console.info("Ejecutar cuando termina bien");
},
  function(){
    console.error("todo está mal");
  } )

console.log("Paso 2");
