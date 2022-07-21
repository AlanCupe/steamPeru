const accion = [];
const aventura = [];
const moba = [];
let carro = [];
const juegoAlmacenado = [];


//CREACION DE LA CLASE JUEGO
class juego {
  constructor(precio, nombreJuego, idProducto, genero, img, stock) {
    this.precio = precio;
    this.nombreJuego = nombreJuego;
    this.idProducto = idProducto;
    this.genero = genero;
    this.img = img;
    this.stock=stock;
    this.cantidad = 1;
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
juegoAlmacenado.push(juego1, juego2, juego3, juego4, juego5);

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
juegoAlmacenado.push(juego6, juego7, juego8, juego9, juego10);

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
juegoAlmacenado.push(juego11, juego12, juego13, juego14, juego15);

console.log(typeof localStorage.getItem('carro'))

    //obtengo los ids de los contenedores para poder usarlos luego
    const categoriaMoba = document.getElementById('juegosMoba');
    const categoriaAccion = document.getElementById('juegosAccion');
    const categoriaAventura = document.getElementById('juegosAventura');
    const precioTotal = document.getElementById('precioTotal');
    
    document.addEventListener('DOMContentLoaded',()=>{
      const nombreUser = document.getElementById('name').value;
      const password = document.getElementById('password');
      
      localStorage.setItem('usuario',nombreUser);
      
    


        typeof localStorage.getItem('carro')=='string' ?traerLocalStorage()  : null
    })
    const traerLocalStorage= ()=>{
      carro=JSON.parse(localStorage.getItem('carro')); 
      actualizarCarrito()
    }
    
//reccore mi array de juegos Almacenados y por cada iteracion va a crearme  una card con las propiedades de cada 1 de ellos. Luego cada card creada la adjunto a su respectiva seccion dependiendo su categoria o genero.
   juegoAlmacenado.map((producto) =>{
    const article = document.createElement('article');
    article.classList.add('juego')
    article.setAttribute("data-aos","fade-down")
    article.setAttribute("data-aos-easing","linear")
    article.setAttribute("data-aos-duration","700")
    
    article.innerHTML = ` <div class="cardJuego">
    <img class="cardJuego__img" src="${producto.img}" alt="${producto.nombreJuego}">
    <h3 class="cardJuego__titulo">${producto.nombreJuego}</h3>
    <p class="text-success fw-bold">Precio: S/${producto.precio}</p> 
    <p class="text-success fw-bold">Stock:${producto.stock}</p> 
    <button  id="${producto.idProducto}" class="cardJuego__btnAgregar">Agregar</button>
    </div>`
    let categoria = producto.genero;
    categoria =='MOBA' && categoriaMoba.prepend(article);
    categoria =='AVENTURA' && categoriaAventura.prepend(article);
    categoria =='ACCION' && categoriaAccion.prepend(article);
    // switch (categoria) {
    //     case 'MOBA':
    //         categoriaMoba.prepend(article);
    //         break;
    //     case 'AVENTURA':
    //         categoriaAventura.prepend(article);
    //         break;
    //     case 'ACCION':
    //         categoriaAccion.prepend(article);
    //         break;        
    //     default:
    //         break;
    // }
    //Asigno a cada  button de la card  un respectivo evento click    la cual va a llamar a la funcion agregarCarrito (). Esta funcion pedira por parametro el id que luego usaremos.
    const btn = document.getElementById(producto.idProducto)
    btn.addEventListener('click', ()=>{
        
       agregarCarrito(producto.idProducto)
      
    })
   })
   
 
//

   
 const agregarCarrito= (id)=> {
       // hacemos un find del arreglo de juegos  y el id que trae por parametro  va ser buscado. una vez encontrado nos devolver el objeto y luego lo pusheamos hacia el carro.

        let existe = carro.some(carrop =>carrop.idProducto == id)
       
       if(existe){
            carro.map(productoCarro => {
                if (productoCarro.idProducto ==id){ productoCarro.cantidad++}
            })
       }else{
        
        const item = juegoAlmacenado.find(juego=>juego.idProducto === id )
        carro.push(item);
         }
         swal({
          title: "Producto Agregado!",
          text: "En buena hora!",
          icon: "success",
          button: "Aceptar!",
        });
        //cada vez que se haga click en agregar  tambien se ejecutara la funcion actualizar carrito.
        actualizarCarrito();
      
      

 }


const eliminarDelCarrito= (e)=>{
        
        const id = e.target.getAttribute('id')
        
        const item = carro.find((productoCarro)=>{productoCarro.idProducto == id})
        
        
        console.log(item)
        const indice = carro.indexOf(item);
        
        carro.splice(indice, 1)
        actualizarCarrito();
}










 let carritoCont = document.getElementById('carritoContenedor');

let vaciarCarrito = document.getElementById('vaciarCarrito');

vaciarCarrito.addEventListener('click',()=>{
    carro.length = 0;
    actualizarCarrito();
})


 // cada vez que se ejecute actualizar carrita limpiara el contenedor  de todos los productos  luego  se le asignara todos los productos que esten pusheados en el arreglo 
 const actualizarCarrito = ()=>{
    

    carritoCont.innerHTML='';
    carro.map((productoCarro)=>{
     const tr = document.createElement('tr');
     tr.classList.add('juego');
     tr.innerHTML = `
     
     <th scope="row"><img src="${productoCarro.img}" alt="${productoCarro.nombreJuego}" width='400px'></th>
     <td><p>${productoCarro.nombreJuego}</p></td>
     <td><p>${productoCarro.cantidad}</p></td>
     <td><p>${productoCarro.precio}</p></td>
     <td><button type="button" class="btn-close eliminar" id="${productoCarro.idProducto}"></button></td>
   `
   carritoCont.appendChild(tr)
   localStorage.setItem('carro', JSON.stringify(carro));
   });
   const btnEliminar = document.querySelectorAll('.eliminar');
    
   btnEliminar.forEach(btn => {
        btn.addEventListener('click',eliminarDelCarrito)
       })
       const contador = document.getElementById('contador');
       contador.innerText = carro.length;
       precioTotal.innerText = 'S/ '+carro.reduce((acumulador,producto)=>acumulador + producto.precio, 0)
}





