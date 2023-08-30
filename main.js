//Sistema simple de inventario, suma y resta stock Javier Ferre  Carmona  (JFC)


// Solicitud de identificación del usuario

let nombreUsuario;

do {
  nombreUsuario = prompt("Inversiones JFC, C.A. – Sistema de inventario, por favor introduzca su nombre");

  // Validación si el nombre es un string y no contiene números

  if (/^[A-Za-z]+$/.test(nombreUsuario)) {
    alert("Bienvenido " + nombreUsuario);
    break;
  } else {
    alert("Por favor, introduce un nombre válido (solo letras).");
  }
} while (true);

let opcion1 = "Ingresar Stock";
let opcion2 = "Restar Stock";

let intentos = 0;


do {
  
  // Muestra las opciones al usuario y pide su elección

  let eleccion = prompt(
    `${nombreUsuario}, ¿qué deseas hacer? Ingresa el número que corresponda a tu opción\nOpción 1: ${opcion1}\nOpción 2: ${opcion2}`
  );

  // Convierte la entrada del usuario a un número

  let eleccionNumero = parseInt(eleccion);

  // Valida si la elección es válida

  if (![1, 2].includes(eleccionNumero)) {
    alert("Opción no válida. Por favor ingresa sólo números, elige 1 ó 2.");
  } else {

    // Muestra el resultado de la elección

    if (eleccionNumero === 1) {
      alert(nombreUsuario + " has elegido " + opcion1);
    } else if (eleccionNumero === 2) {
      alert(nombreUsuario + " has elegido " + opcion2);
    } 
    break; // Rompe el ciclo después de una elección válida
  }

  intentos++;
} while (intentos < 3);


// Función para consultar y ejecutar las opciones

const consultarStock = () => {
  const productos = [
    { nombre: "Arroz blanco JFC", stock: 50 },
    { nombre: "Azúcar refinada JFC", stock: 40 },
    { nombre: "Leche en polvo JFC", stock: 10 }
  ];

  while (true) {
    const eleccion = parseInt(prompt(`${nombreUsuario}, elige una opción:\n1: Sumar Stock\n2: Restar Stock\n3: Salir`));

    if (eleccion === 1) {
      agregarStock(productos);
    } else if (eleccion === 2) {
      restarStock(productos);
    } else if (eleccion === 3) {
      alert(`${nombreUsuario}, el proceso ha terminado.`);
      break;
    } else {
      alert("Opción no válida.");
    }
  }
};

// Función para sumar cantidades al inventario

const agregarStock = (productos) => {
  let productosNumerados = "";
  for (let i = 0; i < productos.length; i++) {
    productosNumerados += `${i + 1}: ${productos[i].nombre}\n`;
  }

  const eleccionProducto = parseInt(prompt(`Elige un producto para agregar stock:\n${productosNumerados}`)) - 1;
  const productoElegido = productos[eleccionProducto];

  alert(`Producto seleccionado: ${productoElegido.nombre}\nStock actual: ${productoElegido.stock}`);
  
  const cantidadAgregar = parseInt(prompt("Ingresa la cantidad que deseas agregar:"));
  productoElegido.stock += cantidadAgregar;

  alert(`Stock actualizado:\n${productoElegido.nombre}: ${productoElegido.stock}`);
};

// Función para restar cantidades al inventario

const restarStock = (productos) => {
  let productosNumerados = "";
  for (let i = 0; i < productos.length; i++) {
    productosNumerados += `${i + 1}: ${productos[i].nombre}\n`;
  }

  const eleccionProducto = parseInt(prompt(`Elige un producto para restar stock:\n${productosNumerados}`)) - 1;
  const productoElegido = productos[eleccionProducto];

  alert(`Producto seleccionado: ${productoElegido.nombre}\nStock actual: ${productoElegido.stock}`);
  
  const cantidadRestar = parseInt(prompt("Ingresa la cantidad que deseas restar:"));
  productoElegido.stock -= cantidadRestar;

  alert(`Stock actualizado:\n${productoElegido.nombre}: ${productoElegido.stock}`);
};

// Llama a la función principal

consultarStock();

