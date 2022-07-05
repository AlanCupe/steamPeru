const accion = [];
const aventura = [];
const moba = [];
const factura = [];
const juegoComprado = [];
let sum = 0;
let productos='';
let prueba
//CREACION DE LA CLASE JUEGO 
class juego {
  constructor(precio, nombreJuego, idProducto, genero) {
    this.precio = precio;
    this.nombreJuego = nombreJuego;
    this.idProducto = idProducto;
    this.genero = genero;
  }

//CALCULANDO IGV DEL JUEVO A VENDER
  calcularTotal(igv) {
    
    this.igv = this.precio * igv;
    this.total = this.precio + this.igv
   return this.total ;
  }
  
}
// ARREGLOS A USAR PARA ALAMACENAR LOS JUEGOS POR CATEGORIA


const juego1 = new juego(600, "Moster hunter rise", 1, "ACCION");
const juego2 = new juego(42, "Neon White", 2, "ACCION");
const juego3 = new juego(30, "Counter strike", 3, "ACCION");
const juego4 = new juego(140, "Hife life", 4, "ACCION");
const juego5 = new juego(30, "Lost ark", 5, "ACCION");
//PUSHEANDO A SU ARREGLO RESPECTIVO
accion.push(juego1, juego2, juego3, juego4, juego5);

const juego6 = new juego(30, "Dota 2", 1, "MOBA");
const juego7 = new juego(15, "League of legends", 2, "MOBA");
const juego8 = new juego(22, "Paladins", 3, "MOBA");
const juego9 = new juego(35, "Lords mobile", 4, "MOBA");
const juego10 = new juego(34, "Smite", 5, "MOBA");
//PUSHEANDO A SU ARREGLO RESPECTIVO
moba.push(juego6, juego7, juego8, juego9, juego10);

const juego11 = new juego(32, "Apex Legends", 1, "AVENTURA");
const juego12 = new juego(145, "Lottus arc", 2, "AVENTURA");
const juego13 = new juego(36, "Raft", 3, "AVENTURA");
const juego14 = new juego(130, "God of war", 4, "AVENTURA");
const juego15 = new juego(20, "Forza horizon 5", 5, "AVENTURA");
//PUSHEANDO A SU ARREGLO RESPECTIVO
aventura.push(juego11, juego12, juego13, juego14, juego15);

function catalogo(id, objeto){
    let nuevoJuego = document.getElementById(id)
    nuevoJuego.innerHTML = objeto.nombreJuego
}

//moba
catalogo('dota2', juego6 )
catalogo('leagueofLeguends', juego7 )
catalogo('paladins', juego8 )
catalogo('lordsMobile', juego9 )
catalogo('smite', juego10 )

//aventura

catalogo('apexLegends', juego11)
