class Avenger {
  nombre: string;
  equipo: string;
  nombreReal: string;

  puedePelear: boolean;
  peleasGanadas:number;

  constructor( nombre:string, equipo:string, nombreReal:string ){
    // console.log("Se ejecutó el constructor");
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  };
};

let antman: Avenger = new Avenger( "Antman", "CapTeam", "Scott Lang" );

console.log(antman);
