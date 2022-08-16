const accion = [];
const aventura = [];
const moba = [];
let carro = [];
let juegoAlmacenado = [];
let idObtenido = '';




//obtengo los ids de los contenedores para poder usarlos luego

const precioTotal = document.getElementById('precioTotal');
const juegosAll = document.querySelector('.juegosAll');

document.addEventListener('DOMContentLoaded', () => {
  typeof localStorage.getItem('carro') == 'string' ? traerLocalStorage() : console.log('No se pudo traer el LocalStorage')
})



const traerLocalStorage = () => {
  carro = JSON.parse(localStorage.getItem('carro'));
  actualizarCarrito()
}

//reccore mi array de juegos Almacenados y por cada iteracion va a crearme  una card con las propiedades de cada 1 de ellos. Luego cada card creada la adjunto a su respectiva seccion dependiendo su categoria o genero.
const build = (productos) => {
  const tituloMoba = document.createElement('h2');
  tituloMoba.classList.add('categoria');
  tituloMoba.innerText = 'Categoría - Moba';
  const seccionMoba = document.createElement('section');
  seccionMoba.classList.add('styleGame');
  seccionMoba.setAttribute("id", "juegosMoba");
  const tituloAccion = document.createElement('h2');
  tituloAccion.classList.add('categoria');
  tituloAccion.innerText = 'Categoría - Acción';
  const seccioAccion = document.createElement('section');
  seccioAccion.classList.add('styleGame');
  seccioAccion.setAttribute("id", "juegosAccion");
  const tituloAventura = document.createElement('h2');
  tituloAventura.classList.add('categoria');
  tituloAventura.innerText = 'Categoría - Aventura';
  const seccionAventura = document.createElement('section');
  seccionAventura.classList.add('styleGame');
  seccionAventura.setAttribute("id", "juegosAventura");

  juegosAll.append(tituloMoba, seccionMoba, tituloAccion, seccioAccion, tituloAventura, seccionAventura);

  const categoriaMoba = document.getElementById('juegosMoba');
  const categoriaAccion = document.getElementById('juegosAccion');
  const categoriaAventura = document.getElementById('juegosAventura');



  juegoAlmacenado = [...productos]

  juegoAlmacenado.map((producto) => {

    const article = document.createElement('article');
    article.classList.add('juego')
    article.setAttribute("data-aos", "fade-down")
    article.setAttribute("data-aos-easing", "linear")
    article.setAttribute("data-aos-duration", "700")

    const { precio, nombreJuego, idProducto, genero, img, stock } = producto
    article.innerHTML = ` <div class="cardJuego">
    <img class="cardJuego__img" src="${img}" alt="${nombreJuego}">
    <h3 class="cardJuego__titulo">${nombreJuego}</h3>
    <p class="text-success fw-bold">Precio: S/${precio}</p> 
    <p class="text-success fw-bold">Stock:${stock}</p> 
    <button  id="${idProducto}" class="cardJuego__btnAgregar">Agregar</button>
    </div>`
    let categoria = genero;
    categoria == 'MOBA' && categoriaMoba.prepend(article);
    categoria == 'AVENTURA' && categoriaAventura.prepend(article);
    categoria == 'ACCION' && categoriaAccion.prepend(article);

    //Asigno a cada  button de la card  un respectivo evento click    la cual va a llamar a la funcion agregarCarrito (). Esta funcion pedira por parametro el id que luego usaremos.
    const btn = document.getElementById(producto.idProducto)
    btn.addEventListener('click', () => {

      agregarCarrito(producto.idProducto)

    })
  })

}

const traerDeJSON = () => {
  fetch('./script/productos.json')

    .then(productos => productos.json())
    .then(juegos => {

      build(juegos);

    })


}
traerDeJSON();


//


const agregarCarrito = (id) => {
  // hacemos un find del arreglo de juegos  y el id que trae por parametro  va ser buscado. una vez encontrado nos devolver el objeto y luego lo pusheamos hacia el carro.

  let existe = carro.some(carrop => carrop.idProducto == id)

  if (existe) {
    carro.map(productoCarro => {
      if (productoCarro.idProducto == id) {
        productoCarro.cantidad++;
        productoCarro.precio += productoCarro.precio
      }
    })
  } else {

    const item = juegoAlmacenado.find(juego => juego.idProducto === id)
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


const eliminarDelCarrito = (e) => {

  idObtenido = e.target.getAttribute('id');

  const busqueda = carro.findIndex(producto => producto.idProducto == idObtenido)
  carro.splice(busqueda, 1);


  actualizarCarrito();
}










let carritoCont = document.getElementById('carritoContenedor');

let vaciarCarrito = document.getElementById('vaciarCarrito');

vaciarCarrito.addEventListener('click', () => {
  carro.length = 0;
  actualizarCarrito();
})


// cada vez que se ejecute actualizar carrita limpiara el contenedor  de todos los productos  luego  se le asignara todos los productos que esten pusheados en el arreglo 
const actualizarCarrito = () => {


  carritoCont.innerHTML = '';
  carro.map(productoCarro => {
    const tr = document.createElement('tr');
    tr.classList.add('juego');
    const { precio, nombreJuego, idProducto, img, cantidad } = productoCarro;
    tr.innerHTML = `
     
     <th scope="row"><img src="${img}" alt="${nombreJuego}" width='400px'></th>
     <td><p>${nombreJuego}</p></td>
     <td><p>${cantidad}</p></td>
     <td><p>${precio}</p></td>
     <td><button type="button" class="btn-close eliminar" id="${idProducto}"></button></td>
   `
    carritoCont.appendChild(tr)
    localStorage.setItem('carro', JSON.stringify(carro));
  });
  const btnEliminar = document.querySelectorAll('.eliminar');

  btnEliminar.forEach(btn => {
    btn.addEventListener('click', eliminarDelCarrito)
  })
  const contador = document.getElementById('contador');
  contador.innerText = carro.length;
  precioTotal.innerText = 'S/ ' + carro.reduce((acumulador, producto) => acumulador + producto.precio, 0)
}
const buildFiltrados = (arreglo) => {
  juegosAll.innerHTML = "";
  const section = document.createElement('section');
  section.classList.add('styleGame')

  arreglo.map(juego => {
    const { nombreJuego, img, stock, idProducto, precio } = juego
    const article = document.createElement("article")
    article.innerHTML = ` <div class="cardJuego">
    <img class="cardJuego__img" src="${img}" alt="${nombreJuego}">
    <h3 class="cardJuego__titulo">${nombreJuego}</h3>
    <p class="text-success fw-bold">Precio: S/${precio}</p> 
    <p class="text-success fw-bold">Stock:${stock}</p> 
    <button  id="${idProducto}" class="cardJuego__btnAgregar">Agregar</button>
    </div>`
    section.append(article)
    juegosAll.append(section);
    const btn = document.getElementById(idProducto)
    btn.addEventListener('click', () => {

      agregarCarrito(idProducto)

    })
  })


}


const filtrarJuegos = () => {
  const valueFilter = (filtro.value.trim().replace(" ", "")).toLowerCase();

  const filtroJuegos = juegoAlmacenado.filter(juego => {
    const { nombreJuego } = juego
    return (nombreJuego.replace(" ", "").toLowerCase()).includes(valueFilter) == true;



  })

  valueFilter.length > 0 && buildFiltrados(filtroJuegos);
  valueFilter.length <= 0 && (juegosAll.innerHTML = "");
  valueFilter.length <= 0 && traerDeJSON();
  console.log(typeof (valueFilter))




  // const lista = juegoAlmacenado.filter(juego=> juego.nombreJuego = "valueFilter" )
  console.log(valueFilter);
}


const filtro = document.querySelector('#search');
filtro.addEventListener('input', filtrarJuegos);

