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

const juego11 = new juego(32, "Apex legends", 1, "AVENTURA", "assets/img/aventura/apex-legends.jpg");
const juego12 = new juego(145, "Lottus arc", 2, "AVENTURA", "assets/img/aventura/lotus");
const juego13 = new juego(36, "Raft", 3, "AVENTURA");
const juego14 = new juego(130, "God of war", 4, "AVENTURA");
const juego15 = new juego(20, "Forza horizon 5", 5, "AVENTURA");
//PUSHEANDO A SU ARREGLO RESPECTIVO
aventura.push(juego11, juego12, juego13, juego14, juego15);

let ordenar;
let confirmacion;
let catalogoOrdenado;
let i = 0;

// FUCION PARA EMPEZAR LA COMPRA
function compra() {
  const elegir = prompt(`ver catalogo por:
  1. Categorias.
  2. Orden Alfabetico.
  `) 
if (elegir ==  '1' ) {
  let catalogo =
  prompt(`******************************STEAM PERU*******************************
  
  Tenemos los siguientes juegos:
  CATEGORIAS
  ---------------------------------
  1.ACCION.
  2.MOBA.
  3.AVENTURA.
  ---------------------------------
  `);
let opcion = "";


switch (catalogo) {
  case "1":
    let catalogoAccion = "Categoria Accion Tenemos los siguientes:";
    accion.forEach((element) => {
      catalogoAccion += `\n ${element.idProducto} : ${element.nombreJuego}`;
    });

    opcion = prompt(catalogoAccion);
    compraAccion(opcion);
    break;
  case "2":
    let catalogoMoba = "Categoria MOBA Tenemos los siguientes:";
    moba.forEach((element) => {
      catalogoMoba += `\n ${element.idProducto} : ${element.nombreJuego}`;
    });

    opcion = prompt(catalogoMoba);
    compraMoba(opcion);

    break;
  case "3":
    let catalogoAventura = "Categoria AVENTURA Tenemos los siguientes:";
    aventura.forEach((element) => {
      catalogoAventura += `\n ${element.idProducto} : ${element.nombreJuego}`;
    });

    opcion = prompt(catalogoAventura);
    compraAventura(opcion);
    break;

  default:
    alert("LAS OPCIONES ACEPTABLES SON  1 - 2 Ó 3");
    compra();
    break;
}

//
} if(elegir == '2'){
  ordenar = (accion).filter((value)=>{
    return value.nombreJuego.includes('A',0) ==true
     
 })
 ordenar.forEach(element => {
        catalogoOrdenado+=`${element.nombreJuego}\n`  
 });
 ordenar = (moba).filter((value)=>{
  return value.nombreJuego.includes('A',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
  return value.nombreJuego.includes('A',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('B',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('B',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('B',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('C',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('C',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('C',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('D',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('D',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('D',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('E',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('E',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('E',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('F',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('F',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('F',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('G',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('G',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('G',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('H',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('H',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('H',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('I',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('I',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('I',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('J',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('J',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('J',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('K',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('K',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('K',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('L',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('L',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('L',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('M',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('M',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('M',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('N',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('N',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('N',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('O',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('O',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('O',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('P',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('P',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('P',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('Q',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('Q',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('Q',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('R',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('R',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('R',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('S',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('S',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('S',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('T',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('T',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('T',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('V',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('V',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('V',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('V',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('V',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('V',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('W',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('W',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('W',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('X',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('X',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('X',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('Y',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('Y',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('Y',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});

ordenar = (accion).filter((value)=>{
  return value.nombreJuego.includes('Z',0) ==true
   
})
ordenar.forEach(element => {
      catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (moba).filter((value)=>{
return value.nombreJuego.includes('Z',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
ordenar = (aventura).filter((value)=>{
return value.nombreJuego.includes('Z',0) ==true
 
})
ordenar.forEach(element => {
    catalogoOrdenado+=`${element.nombreJuego}\n`  
});
let catalogoSort ='';

console.log(ordenar)
  
  prueba = catalogoOrdenado.split("\n")
      prueba.shift()
      prueba.pop();

prueba.forEach((elem,i) => {
      
      catalogoSort += `${i + 1} ${elem}\n` 
 });
   const  pedirJuego = prompt(catalogoSort)
    comprarABC(pedirJuego)

}

}
function comprarABC(resultado){
  switch (resultado) {
    case '1':
     compraAccion('3')
      break;
    case '2':
      compraMoba('1')
      break;   
    case '3':
      compraAventura('5')
      break;
    case '4':
      compraAventura('4')   
      break;
    case '5':
      compraAccion('4') 
      break;
    case '6':
      compraAccion('5')  
      break;
    case '7':
      compraMoba('2')
      break;
    case '8':
      compraMoba('4')
      break;
    case '9':
      compraAventura('2')
      break; 
    case '10':
      compraAccion('1')
      break;
    case '11':
      compraAccion('2')
      break;
    case '12':
      compraMoba('3')
      break;
    case '13': 
      compraAventura('3')
      break;
    case '14': 
      compraMoba('5')
      break;
    case '15':
      compraAccion('2')        
      break;
    default:
      break;
  }
}

// DESPUES DE ELEJIR EL JUEGO PASAMOS A MOSTRARLE AL USUARIO EL COSTO SUBTOTAL Y TOTAL Y LE PEDIMOS SI QUIERE CONFIRMAR LA COMPRA. SEGUN LA CATEGORIA DEL JUEGO EN ESTE CASO  ACCION
function compraAccion(opcion) {
  switch (opcion) {
    case "1":
            confirmacion = prompt (`El precio subtotal es S/ ${accion[0].precio} y el precio Total + IGV es ${juego1.calcularTotal(0.18)} por el Juego: ${accion[0].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO`)
            
            if(confirmacion == '1'){
              factura.push(juego1.calcularTotal(0.18));
              productos =`${accion[0].nombreJuego} es  ${juego1.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
             }
            confirmacionCompra(confirmacion);


      break;
    case "2":
        confirmacion = prompt (`El precio total es S/ ${accion[1].precio} y el precio Total + IGV es ${juego2.calcularTotal(0.18)}  por el Juego: ${accion[1].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
        if(confirmacion == '1'){
          factura.push(juego2.calcularTotal(0.18));
          productos =`${accion[1].nombreJuego} es  ${juego2.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
         }
        confirmacionCompra(confirmacion);

       
      break;
    case "3":
        confirmacion = prompt (`El precio total es S/ ${accion[2].precio} y el precio Total + IGV es ${juego3.calcularTotal(0.18)}  por el Juego: ${accion[2].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
        

        if(confirmacion == '1'){
          factura.push(juego3.calcularTotal(0.18));
          productos =`${accion[2].nombreJuego} es  ${juego3.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
         }
         confirmacionCompra(confirmacion);
      break;
    case "4":
        confirmacion = prompt (`El precio total es S/ ${accion[3].precio} y el precio Total + IGV es ${juego4.calcularTotal(0.18)}  por el Juego: ${accion[3].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
        
        if(confirmacion == '1'){
          factura.push(juego4.calcularTotal(0.18));
          productos =`${accion[3].nombreJuego} es  ${juego4.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
         }
         confirmacionCompra(confirmacion);

      break;
    case "5":
        confirmacion = prompt (`El precio total es S/ ${accion[4].precio} y el precio Total + IGV es ${juego5.calcularTotal(0.18)}  por el Juego: ${accion[4].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
        
        if(confirmacion == '1'){
          factura.push(juego5.calcularTotal(0.18));
          productos =`${accion[4].nombreJuego} es  ${juego5.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
         }
         confirmacionCompra(confirmacion);

      break;

    default:
        alert('No se reconoce esta opción!')
            compra();
      break;
  }
}


// DESPUES DE ELEJIR EL JUEGO PASAMOS A MOSTRARLE AL USUARIO EL COSTO SUBTOTAL Y TOTAL Y LE PEDIMOS SI QUIERE CONFIRMAR LA COMPRA. SEGUN LA CATEGORIA DEL JUEGO EN ESTE CASO  MOBA
function compraMoba(opcion) {
    switch (opcion) {
      case "1":
              confirmacion = prompt (`El precio total es S/ ${moba[0].precio} y el precio Total + IGV es ${juego6.calcularTotal(0.18)}  por el Juego: ${moba[0].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
              
              if(confirmacion == '1'){
                factura.push(juego6.calcularTotal(0.18));
                productos =`${moba[0].nombreJuego} es  ${juego6.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
               }
               confirmacionCompra(confirmacion);

        break;
      case "2":
          confirmacion = prompt (`El precio total es S/ ${moba[1].precio} y el precio Total + IGV es ${juego7.calcularTotal(0.18)}  por el Juego: ${moba[1].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
          

          if(confirmacion == '1'){
            factura.push(juego7.calcularTotal(0.18));
            productos =`${moba[1].nombreJuego} es  ${juego7.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
           confirmacionCompra(confirmacion);
        break;
      case "3":
          confirmacion = prompt (`El precio total es S/ ${moba[2].precio} y el precio Total + IGV es ${juego8.calcularTotal(0.18)}  por el Juego: ${moba[2].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
          

          if(confirmacion == '1'){
            factura.push(juego8.calcularTotal(0.18));
            productos =`${moba[2].nombreJuego} es  ${juego8.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
           confirmacionCompra(confirmacion);
        break;
      case "4":
          confirmacion = prompt (`El precio total es S/ ${moba[3].precio} y el precio Total + IGV es ${juego9.calcularTotal(0.18)}  por el Juego: ${moba[3].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
          

          if(confirmacion == '1'){
            factura.push(juego9.calcularTotal(0.18));
            productos =`${moba[3].nombreJuego} es  ${juego9.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
           confirmacionCompra(confirmacion);
        break;
      case "5":
          confirmacion = prompt (`El precio total es ${moba[4].precio} y el precio Total + IGV es ${juego10.calcularTotal(0.18)}  por el Juego: ${moba[4].nombreJuego} \n ¿Quieres confirmar la compra? \n 1. SI \n 2. NO `)
          

          if(confirmacion == '1'){
            factura.push(juego10.calcularTotal(0.18));
            productos =`${moba[4].nombreJuego} es  ${juego10.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
           confirmacionCompra(confirmacion);

        break;
  
      default:
        alert('No se reconoce esta opción!')
            compra();
        break;
    }
  }


  // DESPUES DE ELEJIR EL JUEGO PASAMOS A MOSTRARLE AL USUARIO EL COSTO SUBTOTAL Y TOTAL Y LE PEDIMOS SI QUIERE CONFIRMAR LA COMPRA. SEGUN LA CATEGORIA DEL JUEGO EN ESTE CASO  AVENTURA
  function compraAventura(opcion) {
    switch (opcion) {
      case "1":
              confirmacion = prompt (`El precio total es S/ ${aventura[0].precio} y el precio Total + IGV es ${juego11.calcularTotal(0.18)}  por el Juego: ${aventura[0].nombreJuego} \n ¿Quieres confirmar la compra?\n 1. SI \n 2. NO `)
              

              if(confirmacion == '1'){
                factura.push(juego11.calcularTotal(0.18));
                productos =`${aventura[0].nombreJuego} es  ${juego11.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
               }
               confirmacionCompra(confirmacion);           
        break;
      case "2":
          confirmacion = prompt (`El precio total es S/ ${aventura[1].precio} y el precio Total + IGV es ${juego12.calcularTotal(0.18)}  por el Juego: ${aventura[1].nombreJuego} \n ¿Quieres confirmar la compra?\n 1. SI \n 2. NO `)
          
          if(confirmacion == '1'){
            factura.push(juego12.calcularTotal(0.18));
            productos =`${aventura[1].nombreJuego} es  ${juego12.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
           confirmacionCompra(confirmacion);

        break;
      case "3":
          confirmacion = prompt (`El precio total es S/ ${aventura[2].precio} y el precio Total + IGV es ${juego13.calcularTotal(0.18)}  por el Juego: ${aventura[2].nombreJuego} \n ¿Quieres confirmar la compra?\n 1. SI \n 2. NO`)
          
          if(confirmacion == '1'){
            factura.push(juego13.calcularTotal(0.18));
            productos =`${aventura[2].nombreJuego} es  ${juego13.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
           confirmacionCompra(confirmacion);

        break;
      case "4":
          confirmacion = prompt (`El precio total es S/ ${aventura[3].precio} y el precio Total + IGV es ${juego14.calcularTotal(0.18)}  por el Juego: ${aventura[3].nombreJuego} \n ¿Quieres confirmar la compra?\n 1. SI \n 2. NO `)
          if(confirmacion == '1'){
            factura.push(juego14.calcularTotal(0.18));
            productos =`${aventura[3].nombreJuego} es  ${juego14.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
          confirmacionCompra(confirmacion);

          
        break;
      case "5":
          confirmacion = prompt (`El precio total es S/ ${aventura[4].precio} y el precio Total + IGV es ${juego15.calcularTotal(0.18)}  por el Juego: ${aventura[4].nombreJuego} \n ¿Quieres confirmar la compra?\n 1. SI \n 2. NO `)
         

          if(confirmacion == '1'){
            factura.push(juego15.calcularTotal(0.18));
            productos =`${aventura[4].nombreJuego} es  ${juego15.calcularTotal(0.18)}` 
              juegoComprado.push(productos);
           }
           confirmacionCompra(confirmacion);
        break;
  
      default:
            alert('No se reconoce esta opción!')
            compra();
        break;
    }
  }
  
function confirmacionCompra(respuesta){
    switch (respuesta) {
        case '1':
            alert('COMPRA REALIZADA CON EXITO');
            const nextShop = prompt('Quiere seguir comprando? \n 1.si \n 2.no');
            if(nextShop == '1'){
                compra();
            }else if(nextShop == '2') {
                    
              let cadena ='JUEGOS COMPRADOS: \n';
              for(let i = 0; i<factura.length; i++  ){
                sum +=factura[i];  
              }
                    juegoComprado.forEach((element,id) => {
                     cadena +=` ${id + 1}.  ${element}\n`
                                        });
                   
                  alert(cadena + 'El Total es '+ sum);
                
            }else{
                alert('No se reconoce esta opción')
                compra();
            }
            
            break;
            case '2':
                alert('Volvamos al catálogo :3')
                compra();
                break;
    
        default:
            break;
    }
}
compra();

