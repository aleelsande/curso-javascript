
class admin {
    constructor(dni, contraseña) {
        this.dni = dni;
        this.contraseña = contraseña;
    }
}

class usuario {
    constructor(dni, contraseña) {
        this.dni = dni;
        this.contraseña = contraseña;
    }
}

let validacionU = false;
let validacionA = false;
const validacionAdmin = [];
const validacionUsuario = [];
const carrito = [];



const admin1 = new admin(39757778, 1234);
const admin2 = new admin(12345678, 1234);
const admin3 = new admin(87654321, 1234);
const admin4 = new admin(2, 2);
const usuario1 = new usuario(22222222, 1234);
const usuario2 = new usuario(33333333, 1234);
const usuario3 = new usuario(44444444, 1234);
const usuario4 = new usuario(1, 1);



validacionAdmin.push(admin1, admin2, admin3, admin4);
validacionUsuario.push(usuario1, usuario2, usuario3, usuario4);

















//creo objetos con constructora
class mueble {
    constructor(id, nombre, madera, peso, tamaño, precio, imagen,cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.madera = madera;
        this.peso = peso;
        this.tamaño = tamaño;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
    info(pruebaParentesis) {
        console.log(`este mueble tiene madera de ${this.madera}, pesa ${this.peso} kg, mide ${this.tamaño}m y cuesta un total de ${this.precio} pesos. ${pruebaParentesis} `)
    }

}


const productos = [];

const MesaEscandinava = new mueble(1, "Mesa Escandinava", "melamina", 2, 1.2, 15000, "./imagenes/mesa1.webp",1);
const MesaIndustrial = new mueble(2, "Mesa Industrial", "hierro", 5, 1.8, 25000, "./imagenes/escritorio amv.webp",1);
const MesaComedor = new mueble(3, "Mesa Comedor", "vintage", 4, 1.4, 8200, "./imagenes/mesa comedor.webp",1);
const MesaModerna = new mueble(4, "Mesa Moderna", "asia paraiso", 6, 1.4, 24000, "./imagenes/mesa moderna.webp",1);
const MesaAve = new mueble(5, "Mesa Ave", "melamina", 2, 0.6, 9000, "./imagenes/mesa ave.webp",1);
const SillaGarden = new mueble(6, "Silla Garden", "hierro", 2, 1.2, 8000, "./imagenes/silla garden.webp",1);
const SillaEscritorio = new mueble(7, "Silla Escritorio", "8214-hmv", 2, 1.2, 25000, "./imagenes/silla escritorio.webp",1);
const SillaGamer = new mueble(8, "Silla Gamer", "god game pro", 2, 1.2, 40000, "./imagenes/silla gamer.webp",1);
const SillaComedor = new mueble(9, "Silla Comedor", "abs madera", 2, 1.2, 20000, "./imagenes/silla comedor.webp",1);
const SillaEjecutivo = new mueble(10, "Silla Ejecutivo", "ergonomico gerencial", 2, 1.2, 40000, "./imagenes/sillon ejecutivo.webp",1);


const muebles = [
    MesaEscandinava,
    MesaIndustrial,
    MesaComedor,
    MesaModerna,
    MesaAve,
    SillaGarden,
    SillaEscritorio,
    SillaGamer,
    SillaComedor,
    SillaEjecutivo
];

for (const mueble of muebles) {
    productos.push({
        id: mueble.id,
        nombre: mueble.nombre,
        precio: mueble.precio,
        madera: mueble.madera,
        peso: mueble.peso,
        tamaño: mueble.tamaño,
        imagen: mueble.imagen,
        cantidad: mueble.cantidad
    });
}



































function creoUsuario(e) {
    e.preventDefault();
    let creandoUsuario = e.target;
    let ingresarDniNuevo = parseInt(creandoUsuario.children[0].value);
    let ingresarContraseñaNueva = parseInt(creandoUsuario.children[1].value);
    const nuevoUsuario = new usuario(ingresarDniNuevo, ingresarContraseñaNueva);
    if (nuevoUsuario.dni && nuevoUsuario.contraseña) {
        validacionUsuario.push(nuevoUsuario);
        console.log("usuario creado satisfactoriamente ");
    } else {
        console.log("error");
    }

    console.log(nuevoUsuario);
}
let elCreandoUsuario = document.getElementById("creandoUsuario");
elCreandoUsuario.addEventListener("submit", creoUsuario);













function validoUsuario(e) {
    e.preventDefault();
    let logginUsuario = e.target;
    let ingresarDni = parseInt(logginUsuario.children[0].value);
    let ingresarContraseña = parseInt(logginUsuario.children[1].value);
    const validarU = validacionUsuario.find((item) => item.dni === ingresarDni && item.contraseña === ingresarContraseña);

    console.log(validarU);
    if (validarU !== undefined) {
        console.log("usuario validado")
        validacionU = true;
        verProductos(productos);

    } else {
        console.log("error de validacion");
        validacionU = false;
    }
}
let elLogginUsuario = document.getElementById("logginUsuario");
elLogginUsuario.addEventListener("submit", validoUsuario);














function validoAdmin(e) {
    e.preventDefault();
    let logginAdmin = e.target;
    let ingresarDni = parseInt(logginAdmin.children[0].value);
    let ingresarContraseña = parseInt(logginAdmin.children[1].value);
    const validarA = validacionAdmin.find((item) => item.dni === ingresarDni && item.contraseña === ingresarContraseña);

    console.log(validarA);

    if (validarA !== undefined) {
        console.log("usuario validado")
        validacionA = true;

        pruebaMil();
        creoNuevoObjeto();
        verProductos(productos);



    } else {
        console.log("error de validacion");
    }
}
let elLogginAdmin = document.getElementById("logginAdmin");
elLogginAdmin.addEventListener("submit", validoAdmin);









function creoNuevoObjeto() {

    function nuevoObjeto(e) {
        e.preventDefault();
        let nuevoProducto = e.target;
        let ingresarIdNuevo = parseInt(nuevoProducto.children[1].value);
        let ingresarNombreNuevo = nuevoProducto.children[3].value;
        let ingresarMaderaNuevo = nuevoProducto.children[5].value;
        let ingresarPrecioNuevo = parseInt(nuevoProducto.children[7].value);
        let ingresarPesoNuevo = parseInt(nuevoProducto.children[9].value);
        let ingresarTamañoNuevo = parseInt(nuevoProducto.children[11].value);
        let ingresarImagenNuevo = nuevoProducto.children[13].value;
        const nuevosProductos = new mueble(ingresarIdNuevo, ingresarNombreNuevo, ingresarMaderaNuevo, ingresarPesoNuevo, ingresarTamañoNuevo, ingresarPrecioNuevo, ingresarImagenNuevo,1);
        productos.push(nuevosProductos);
        console.log("producto añadido ");
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    let elNuevoProducto = document.getElementById("nuevoProducto");
    elNuevoProducto.addEventListener("submit", nuevoObjeto);
}





















function pruebaMil() {


    function materealizoElForm() {
        // Crea los elementos <p> y <input> para cada campo y los agrega al formulario
        var form = document.getElementById("nuevoProducto");

        // Crea y agrega el elemento <p> para el ID
        var pId = document.createElement("p");
        pId.textContent = "ID";
        form.appendChild(pId);

        var inputId = document.createElement("input");
        inputId.type = "text";
        inputId.className = "inputNuevoProducto";
        form.appendChild(inputId);

        // Crea y agrega el elemento <p> para el nombre
        var pNombre = document.createElement("p");
        pNombre.textContent = "Nombre";
        form.appendChild(pNombre);

        var inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.className = "inputNuevoProducto";
        form.appendChild(inputNombre);

        // Crea y agrega el elemento <p> para el material
        var pMaterial = document.createElement("p");
        pMaterial.textContent = "Material";
        form.appendChild(pMaterial);

        var inputMaterial = document.createElement("input");
        inputMaterial.type = "text";
        inputMaterial.className = "inputNuevoProducto";
        form.appendChild(inputMaterial);

        // Crea y agrega el elemento <p> para el peso
        var pPeso = document.createElement("p");
        pPeso.textContent = "Peso";
        form.appendChild(pPeso);

        var inputPeso = document.createElement("input");
        inputPeso.type = "text";
        inputPeso.className = "inputNuevoProducto";
        form.appendChild(inputPeso);

        // Crea y agrega el elemento <p> para el tamaño
        var pTamaño = document.createElement("p");
        pTamaño.textContent = "Tamaño";
        form.appendChild(pTamaño);

        var inputTamaño = document.createElement("input");
        inputTamaño.type = "text";
        inputTamaño.className = "inputNuevoProducto";
        form.appendChild(inputTamaño);

        // Crea y agrega el elemento <p> para el precio
        var pPrecio = document.createElement("p");
        pPrecio.textContent = "Precio";
        form.appendChild(pPrecio);

        var inputPrecio = document.createElement("input");
        inputPrecio.type = "text";
        inputPrecio.className = "inputNuevoProducto";
        form.appendChild(inputPrecio);

        // Crea y agrega el elemento <p> para la imagen
        var pImagen = document.createElement("p");
        pImagen.textContent = "Imagen";
        form.appendChild(pImagen);

        var inputImagen = document.createElement("input");
        inputImagen.type = "text";
        inputImagen.className = "inputNuevoProducto";
        form.appendChild(inputImagen);


        var submitBtn = document.createElement("input");
        submitBtn.type = "submit";
        submitBtn.value = "Enviar";
        form.appendChild(submitBtn);
    }

    // Crea el elemento de botón
    var verForm = document.createElement("button");
    verForm.textContent = "crear nuevo producto";
    verForm.id = "verFormulario";

    // Añadir el botón al documento HTML
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(verForm);

    // Agregar evento click al botón
    verForm.addEventListener("click", materealizoElForm);

}





function verProductos() {
    function muestroTienda(productos) {
        let contenedor = document.getElementById("contenedores");

        for (const producto of productos) {
            let productoDiv = document.createElement("div");
            productoDiv.classList.add("tarjeta");

            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="Imagen del producto">
                <h3>${producto.nombre}</h3>
                <p>Material De Fabricacion: <b>${producto.madera}</b></p>
                <p>tamaño <b>${producto.tamaño}</b>     Id: <b>${producto.id}</b></p>
                <b>$ ${producto.precio}</b>
                <button id="boton${producto.id}">Agregar al Carrito</button>
            `;

            contenedor.appendChild(productoDiv);
            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', () => {
                agregarAlCarrito(producto.id);
            });
        }
    }

    // Recupera storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log(productos);

    // Crea elbotón
    var verForm = document.createElement("button");
    verForm.textContent = "Mostrar tienda";
    verForm.id = "mostrarTienda";

    // Añade el boton
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(verForm);

    // Agrega eventoal boton
    verForm.addEventListener("click", () => {
        muestroTienda(productos);
    });
}






function actualizarCarrito() {
    let aCarrito = '';
    carrito.forEach((producto) => {
      aCarrito += `
                <div class="">
                    
                    <div class="">
                        <h3 class=""> ${producto.nombre} </h3>
                        <p class=""> ${producto.precio} </p>
                        <button onClick = "eliminarDelCarrito(${producto.id})" class=""> Eliminar del Carrito </button>
                    </div>
                </div>
                `;
    });
  
    contenedorCarrito.innerHTML = aCarrito;
    calcularTotalCompra();
  }

  const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
  };


const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
  };
  
  





  
  const vaciarCarrito = document.getElementById('vaciarCarrito');
  vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
  });
  
  




  
  const totalCompra = document.getElementById('totalCompra');
  
  const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
  };