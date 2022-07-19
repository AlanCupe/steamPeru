const accion = [];
const aventura = [];
const moba = [];
const carro = [];
const juegoalmacenado = [];

//CREACION DE LA CLASE JUEGO
class juego {
  constructor(precio, nombreJuego, idProducto, genero, img, stock) {
    this.precio = precio;
    this.nombreJuego = nombreJuego;
    this.idProducto = idProducto;
    this.genero = genero;
    this.img = img;
    this.stock=stock;
  }

  //CALCULANDO IGV DEL JUEVO A VENDER
  calcularTotal(igv) {
    this.igv = this.precio * igv;
    this.total = this.precio + this.igv;
    return this.total;
  }
}
// ARREGLOS A USAR PARA ALAMACENAR LOS JUEGOS POR CATEGORIA

const juego1 = new juego(
  600,
  "Moster hunter rise",
  "moster",
  "ACCION",
  "assets/img/accion/mosterHunterRises.jpg",
  100
);
const juego2 = new juego(
  42,
  "Neon White",
  "neon",
  "ACCION",
  "assets/img/accion/neonWhite.avif",100
);
const juego3 = new juego(
  30,
  "Counter strike",
  "counter",
  "ACCION",
  "assets/img/accion/counterStrike.png",100
);
const juego4 = new juego(
  140,
  "Hife life",
  "hife",
  "ACCION",
  "assets/img/accion/hifeLife.jpg",100
);
const juego5 = new juego(
  30,
  "Lost ark",
  "lost",
  "ACCION",
  "assets/img/accion/lostArk.webp",100
);
//PUSHEANDO A SU ARREGLO RESPECTIVO
accion.push(juego1, juego2, juego3, juego4, juego5);

const juego6 = new juego( 30,"Dota 2","dota2","MOBA","assets/img/moba/dota2.jpg",100);
const juego7 = new juego(15,"League of legends","league","MOBA","assets/img/moba/leagueOfLeguends.jpg",100
);
const juego8 = new juego(
  22,
  "Paladins",
  "paladins",
  "MOBA",
  "assets/img/moba/paladins.jpg",100
);
const juego9 = new juego(
  35,
  "Lords mobile",
  "lords",
  "MOBA",
  "assets/img/moba/lordsMobile.jpg",100
);
const juego10 = new juego(
  34,
  "Smite",
  "smite",
  "MOBA",
  "assets/img/moba/smite.jpg",100
);
//PUSHEANDO A SU ARREGLO RESPECTIVO
moba.push(juego6, juego7, juego8, juego9, juego10);

const juego11 = new juego(
  32,
  "Apex Legends",
  "apex",
  "AVENTURA",
  "assets/img/aventura/apex-legends.jpg",100
);
const juego12 = new juego(
  145,
  "Destiny 2",
  "destiny",
  "AVENTURA",
  "assets/img/aventura/destiny2.jpg",100
);
const juego13 = new juego(
  36,
  "Raft",
  "raft",
  "AVENTURA",
  "assets/img/aventura/raft.jpg",100
);
const juego14 = new juego(
  130,
  "God of war",
  "god",
  "AVENTURA",
  "assets/img/aventura/godofWar.jpeg",100
);
const juego15 = new juego(
  20,
  "Forza horizon 5",
  "forza",
  "AVENTURA",
  "assets/img/aventura/forzaHorizon.jpg",100
);
//PUSHEANDO A SU ARREGLO RESPECTIVO
aventura.push(juego11, juego12, juego13, juego14, juego15);



function crearJuego(arreglo, categoria){
    let container ='';
    const seccion = document.getElementById(categoria);
    arreglo.map((juego)=>{
        container +=`<article class="juegos">
        <div class="cardJuego">
    <img class="cardJuego__img" src="${juego.img}" alt="${juego.nombreJuego}">
    <h3 class="cardJuego__titulo">${juego.nombreJuego}</h3>
    <p class="text-success fw-bold">Precio: S/${juego.precio}</p> 
    <p class="text-success fw-bold">Stock:${juego.stock}</p> 
    <button  id="${juego.idProducto}" class="cardJuego__btnComprar">Comprar</button>
    </div>
    </article>`
      
       
    
    })
    seccion.innerHTML = container;


    let botones = document.querySelectorAll('.cardJuego__btnComprar');
    botones.forEach((btn) => btn.addEventListener('click', comprar));

   

}
let carritoContenedor='';
let result
carritoContenedor = document.getElementById('carritoContenedor') ;

function verCarro(array){
    let producto='';
    let contenedor='';
   
   
        array.map((productoArray=>{
            producto = JSON.parse(localStorage.getItem(productoArray.idProducto))||'[]'
            juegoalmacenado.push(producto);
          result = juegoalmacenado.filter((juegoal) =>juegoal !=='[]'&& juegoal.cantidad)
           

            
            
        }))
        result.map(rest =>{
            contenedor += `
            <tr>
            <th scope="row"><img src="${rest.img}" alt="${rest.nombre}" width='200px'></th>
            <td><p>${rest.nombre}</p></td>
            <td><p>${rest.cantidad}</p></td>
            <td><p>${rest.precio}</p></td>
            <td><button type="button" class="btn-close"></button></td>
          </tr>`
             
        })
       
            carritoContenedor.innerHTML = contenedor;
        console.log(result)
        
       
   
        
    
}
function comprar(e){
    const id = e.target.getAttribute('id');
    const busqueda =accion.find((juego)=>juego.idProducto == id)||moba.find((juego)=>juego.idProducto == id)||aventura.find((juego)=>juego.idProducto == id);
    if(carro.some((productoCarro)=> productoCarro.id == busqueda.idProducto )){
        const posicion = carro.findIndex( posicion => posicion.id==busqueda.idProducto)
        carro[posicion].cantidad = carro[posicion].cantidad + 1;
        console.log (carro)
    }else{
        carro.push({
            id:busqueda.idProducto,
            img:busqueda.img,
            nombre:busqueda.nombreJuego,
            cantidad:1,
            precio:busqueda.precio,
            
        });
    }

        carro.map( producto=>localStorage.setItem(producto.id, JSON.stringify(producto)));
   
        verCarro(accion);
        verCarro(moba);
        verCarro(aventura);
   
   
}

const verCarrito = document.getElementById('verCarrito');
verCarrito.addEventListener('click',()=>{
 
    
})
const closeModal=document.getElementById('close');
closeModal.addEventListener('click', ()=>{
    rest = '';
    carritoContenedor='';

})

crearJuego(moba,'juegosMoba')
crearJuego(aventura,'juegosAventura')
crearJuego(accion,'juegosAccion')