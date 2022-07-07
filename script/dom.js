
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
  constructor(precio, nombreJuego, idProducto, genero, img) {
    this.precio = precio;
    this.nombreJuego = nombreJuego;
    this.idProducto = idProducto;
    this.genero = genero;
    this.img = img;
  }

//CALCULANDO IGV DEL JUEVO A VENDER
  calcularTotal(igv) {
    
    this.igv = this.precio * igv;
    this.total = this.precio + this.igv
   return this.total ;
  }
  
}
// ARREGLOS A USAR PARA ALAMACENAR LOS JUEGOS POR CATEGORIA


const juego1 = new juego(600, "Moster hunter rise", 'moster', "ACCION",'assets/img/accion/mosterHunterRises.jpg');
const juego2 = new juego(42, "Neon White", 'neon', "ACCION", 'assets/img/accion/neonWhite.avif');
const juego3 = new juego(30, "Counter strike", 'counter', "ACCION", 'assets/img/accion/counterStrike.png');
const juego4 = new juego(140, "Hife life", 'hife', "ACCION", 'assets/img/accion/hifeLife.jpg');
const juego5 = new juego(30, "Lost ark", 'lost', "ACCION", 'assets/img/accion/lostArk.webp');
//PUSHEANDO A SU ARREGLO RESPECTIVO
accion.push(juego1, juego2, juego3, juego4, juego5);

const juego6 = new juego(30, "Dota 2", 'dota2', "MOBA", "assets/img/moba/dota2.jpg");
const juego7 = new juego(15, "League of legends", 'league', "MOBA", "assets/img/moba/leagueOfLeguends.jpg");
const juego8 = new juego(22, "Paladins", 'paladins', "MOBA", "assets/img/moba/paladins.jpg");
const juego9 = new juego(35, "Lords mobile", 'lords', "MOBA", "assets/img/moba/lordsMobile.jpg");
const juego10 = new juego(34, "Smite", 'smite', "MOBA", "assets/img/moba/smite.jpg");
//PUSHEANDO A SU ARREGLO RESPECTIVO
moba.push(juego6, juego7, juego8, juego9, juego10);

const juego11 = new juego(32, "Apex Legends", 'apex', "AVENTURA", "assets/img/aventura/apex-legends.jpg");
const juego12 = new juego(145, "Destiny 2", 'destiny', "AVENTURA", "assets/img/aventura/destiny2.jpg");
const juego13 = new juego(36, "Raft", 'raft', "AVENTURA", "assets/img/aventura/raft.jpg");
const juego14 = new juego(130, "God of war", 'god', "AVENTURA", "assets/img/aventura/godofWar.jpeg");
const juego15 = new juego(20, "Forza horizon 5", 'forza', "AVENTURA", "assets/img/aventura/forzaHorizon.jpg");
//PUSHEANDO A SU ARREGLO RESPECTIVO
aventura.push(juego11, juego12, juego13, juego14, juego15);


function crearJuego(idCategoria,arreglo){
  
  for (i of arreglo) {
    const crearJuego = document.getElementById(idCategoria);
    const juegosM = document.createElement('article');
    juegosM.classList.add('cardsJuegos')
    juegosM.innerHTML=`<div class="cardJuego">
    <img class="cardJuego__img" src="${i.img}" alt="${i.nombreJuego}">
    <h3 class="cardJuego__titulo">${i.nombreJuego}</h3>
    <p class="text-success fw-bold">Precio: S/${i.precio}</p> 
    <a href="pages/productos.html" id="${i.idProducto}" class="cardJuego__btnComprar">Comprar</a>
    </div>`
    crearJuego.append(juegosM);
    
  }
  
}
crearJuego('juegosMoba',moba)
crearJuego('juegosAventura',aventura)
crearJuego('juegosAccion', accion)






const compra = document.getElementById('dota2');
 compra.addEventListener('click', ()=>{
  let idproducto = document.getElementById('productos');
  idproducto.innerHTML =`<article id="producto">
            <div class="card mb-3" style="max-width: 940px;">
                <div class="row g-0">
                  <div class="col-md-8">
                    <img src="../assets/img/moba/dota2.jpg" class="img-fluid rounded-start" alt="">
                  </div>
                  <div class="col-md-4">
                    <div class="card-body">
                      <h5 class="card-title fw-bold text-primary">Card title</h5>
                      <p class="card-text">Nombre:</p>
                      <p class="card-text">Precio:</p>
                      <p class="card-text">Descripción:</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
        </article>` 
}
)


