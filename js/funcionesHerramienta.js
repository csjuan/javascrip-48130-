function CargarDatosJsonEnListaJuegos(datos){
    datos.forEach((juego) => {
      listaJuegos.push(juego);
    });
  }
  
  function mostrarListaObjetosenSeccionHTML(sectionID, lista, propiedaObjeto) {
    const elementoId = document.getElementById(`${sectionID}`); 
    elementoId.innerHTML = "";
    for (const listagenerada of lista) {

      elementoId.innerHTML += `
          <li value="${listagenerada[`${propiedaObjeto}`]}">
              <button class="filtro${listagenerada[`${propiedaObjeto}`]}
                  "id="filtro${listagenerada[`${propiedaObjeto}`]}">${listagenerada[`${propiedaObjeto}`]
        }
              </button>
          </li>
      `;
  
    }
  }
  
  const agregarAlCarrito = (id) => {
    const productoJuego = listaJuegos.find((juego) => juego.id === id);
    const juegoEnCarrito = carrito.find((juego) => juego.id === id);
    if (juegoEnCarrito) {
      juegoEnCarrito.cantidad++;
      console.log(`agrego  ${juegoEnCarrito.nombreJuego}`);
    } else {
      carrito.push(productoJuego);
      console.log(`agrego ${productoJuego.nombreJuego} `);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
    mostrarValorCarritoIcon();
    SubtotalPrecioCarrito();
  };
  
  function mostrarValorCarritoIcon() {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
    console.log("Productos:");
    console.log(carrito);
    actualizarValorCarrito();
  }
  
  function actualizarValorCarrito() {
    const iconNumCarrito = document.getElementById("iconNumCarrito");
    iconNumCarrito.innerText = carrito.length; 
  }
  
  const eliminarTodoElCarrito = () => {
    carrito = [];
    localStorage.clear();
    actualizarValorCarrito();
  };
  
  const eliminarObjetoDeCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(` elimino: ${producto.nombreJuego} `);
  };
  
  function SubtotalPrecioCarrito() {
    let CompraTotal = 0;
    carrito.forEach((juego) => {
      CompraTotal += juego.precio * juego.cantidad;
    });
    return CompraTotal;
  }
  
  function totalPrecioCarritos() {
    const valor = SubtotalPrecioCarrito();
    if (checkBoxEnvio.checked === true) {
      return valor + 300;
    } else {
      return valor;
    }
  }
  
  function LimpiarCarritoBtnClick() {
    const limpiarCarrito = document.getElementById("limpiarCarrito");
  
    limpiarCarrito.addEventListener("click", () => {
      eliminarTodoElCarrito();
      MostrarProductoEnCarrito();
      console.log("elimino los pruductos");
    });
  }
  
  function getPrecioTotal() {
    let precioDeCompra = JSON.parse(localStorage.getItem("precioDeCompra"));
  
    return precioDeCompra;
  }
  
  function maximoId() {
  
    let maximoId = 0;
    const listaDeIds = [];
    if (listaJuegos.length === 0) {
      maximoId = 0;
    } else {
      listaJuegos.forEach((element) => {
        const id = element.id;
        listaDeIds.push(id);
      });
      maximoId = Math.max(...listaDeIds); 
    }
    return maximoId;
  }