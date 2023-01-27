const catalogoContenedor = document.getElementById("catalogoContenedor");
const menuCatalogo = document.getElementById("menuCatalogo");

function renderJuegoHTML(game) {
    const card = document.createElement("div");
    card.innerHTML += `
	<div class="card tarjeta animate__animated animate__fadeIn">
	<img src=${game.imagen} class="card-img-top imgCard" id="${game.nombreJuego}" type="button" alt=${game.nombreJuego}>
		<div class="card-body informacionTarjeta">
			<h2 class="card-title">${game.nombreJuego}</h2>
			<h4 class="card-title">Plataforma: ${game.plataforma}</h4>
			<h4 class="card-title">Género: ${game.genero}</h4>
			<h4 class="card-title">Idioma: ${game.idioma}</h4>
			<h4 class="card-title">Tamaño: ${game.tamano}</h4>
			<h5 class="card-title precioCard">ARS$${game.precio}</h5>
		<button class="btn btnAgregar" id="btnAgregarCarro${game.id}">Agregar <div class="iconBtnCarrito"><div/></button>    
		</div> 
	</div>`

    catalogoContenedor.appendChild(card);
    const btnAgregarCarro = document.getElementById(`btnAgregarCarro${game.id}`);
    btnAgregarCarro.addEventListener("click", () => {
        agregarAlCarrito(game.id);
        
        Toastify({
            text: `${game.nombreJuego} agregado al carrito`,
            duration: 1200,
            gravity: "bottom",
            position: "right",
            style:
            {
                background: "linear-gradient(to right, #3939394a, rgb(33 67 114))",
            }

        }).showToast();
    })

    const renderInfo = document.getElementById(`${game.nombreJuego}`);

    renderInfo.addEventListener("click", () => {
        Swal.fire({
            title: `${game.nombreJuego}`,
            html: `<p class="pDescripcionGame">${game.descripcion}</p>`,
            imageUrl: `${game.imagen}`,
            imageWidth: 202,
            imageHeight: 240,
            confirmButtonText: "X",
            background: `linear-gradient(20deg, #1b2838, #090f16)`,
            imageAlt: 'Custom image',
            color: '#9099a1',
            customClass: {
                confirmButton: 'btnDescripcionGame'
            },
            buttonsStyling: false,
        })
    })
}
function MostrarCatalogo(catalogoContenedor, propiedadObjeto, textoBuscador = '') {
    catalogoContenedor.innerHTML = ''; 
    const TextoMin = textoBuscador.toLowerCase();
    listaJuegos.forEach((listaGame) => {
        const nombreJuego = `${listaGame[`${propiedadObjeto}`]}`;
        const nombreJuegoMinuscula = nombreJuego.toLowerCase();
        if (nombreJuegoMinuscula.indexOf(TextoMin) !== -1) {
            renderJuegoHTML(listaGame);
        }
    })
    if (catalogoContenedor.innerHTML === '') {
        catalogoContenedor.innerHTML = `
        <div class="notFoundGame animate__animated animate__fadeIn">
            <h2>sin resultados</h2>
            <img src="img/broken.png" alt="">
        </div>`
    }
}

function BusquedaDeJuego() { 
    const barraBuscador = document.getElementById("barraBuscador");
    const textoBuscador = barraBuscador.value;
    MostrarCatalogo(catalogoContenedor, "nombreJuego", textoBuscador);
    barraBuscador.addEventListener('keyup', BusquedaDeJuego); 
}



function renderFiltroCatalogoHTML() {
    const filt = document.createElement("ul");
    filt.innerHTML += `
        <li  id="btnGTodos" class="liFiltro">
            <div type="button"class="TitulosFiltros"><h2>TODOS</h2>
        </div>
        </li>
        <li class="liFiltro">
            <div  id="btnGPlataforma" class="TitulosFiltros" type="button">
                <h2>PLATAFORMA</h2>
                <img id="flechaGiroPLat" class="flechaUp" src="img/flechaUp.png" alt="Flecha" width="20px">
            </div>
            <section >
            <ul id="seccionPlataforma" class="seccionFiltro">
                <li><div id="btnGPC" type="button">PC</div></li>
                <li ><div id="btnGPlay" type="button">PlayStation</div></li>
            </ul>
            </section>
        </li>
        <li class="liFiltro">
            <div id="btnGGenero" class="TitulosFiltros" type="button">
                <h2>GENERO</h2>
                <img id="flechaGiroGenero" class="flechaUp" src="img/flechaUp.png" alt="Flecha" width="20px">
            </div>
            <section>
            <ul id="seccionGenero"  class="seccionFiltro">
                <li><div id="btnGAccion" type="button">Acción</div></li>
                <li><div id="btnGAventura" type="button">Aventura</div></li>
                <li><div id="btnGDeportes" type="button">Deportes</div></li>
                <li><div id="btnGTerror" type="button">Terror</div></li>
                <li><div id="btnGEstrategia" type="button">Estrategia</div></li>  
            </ul>
            </section>
        </li>
        <li class="liFiltro">
            <div id="btnGIdioma" class="TitulosFiltros" type="button">
            <h2>IDIOMA</h2>
            <img id="flechaGiroIdoma" class="flechaUp" src="img/flechaUp.png" alt="Flecha" width="20px">
            </div>
            <section  >
            <ul id="seccionIdioma" class="seccionFiltro">
                <li><div id="btnGIngles" type="button">Ingles</div></li>
                <li><div id="btnGEspañol" type="button">Español</div></li>
              
            </ul>
            </section>
        </li> 
    `
    menuCatalogo.appendChild(filt);
    const btnGPlataforma = document.getElementById("btnGPlataforma");
    btnGPlataforma.addEventListener("click", () => {
        const seccionPlataforma = document.getElementById("seccionPlataforma");
        const flechaGiroPLat = document.getElementById("flechaGiroPLat");
        flechaGiroPLat.classList.toggle("giroFlecha_toggle");
        seccionPlataforma.classList.toggle("desocultar_toggle");
        removerClaseListaToogle(seccionIdioma);
        removerClaseListaToogle(seccionGenero);
    });
    const btnGGenero = document.getElementById("btnGGenero");
    btnGGenero.addEventListener("click", () => {
        const seccionGenero = document.getElementById("seccionGenero");
        const flechaGiroGenero = document.getElementById("flechaGiroGenero");
        flechaGiroGenero.classList.toggle("giroFlecha_toggle");
        seccionGenero.classList.toggle("desocultar_toggle");
        removerClaseListaToogle(seccionPlataforma);
        removerClaseListaToogle(seccionIdioma);
    });
    const btnGIdioma = document.getElementById("btnGIdioma");

    btnGIdioma.addEventListener("click", () => {
        const seccionIdioma = document.getElementById("seccionIdioma");
        const flechaGiroIdoma = document.getElementById("flechaGiroIdoma");
        flechaGiroIdoma.classList.toggle("giroFlecha_toggle");
        seccionIdioma.classList.toggle("desocultar_toggle");
        removerClaseListaToogle(seccionPlataforma);
        removerClaseListaToogle(seccionGenero);
    });

}

function filtrarJuegoPor(valorId, propiedadObjeto, filtro = "") {
    valorId = document.getElementById(valorId);
    valorId.addEventListener("click", () => {
        MostrarCatalogo(catalogoContenedor, propiedadObjeto, filtro);
    })
}
function removerClaseListaToogle(ValorId) {
    const clasu = ValorId.classList; 
    clasu.remove("desocultar_toggle");

}

function EjecutarFiltroCatalogo() {

    renderFiltroCatalogoHTML(); 

    filtrarJuegoPor("btnGTodos", "nombreJuego"); 
    filtrarJuegoPor("btnGPC", "plataforma", "pc");
    filtrarJuegoPor("btnGPlay", "plataforma", "playstation");
    filtrarJuegoPor("btnGAccion", "genero", "acción");
    filtrarJuegoPor("btnGAventura", "genero", "aventura");
    filtrarJuegoPor("btnGDeportes", "genero", "deportes");
    filtrarJuegoPor("btnGTerror", "genero", "terror");
    filtrarJuegoPor("btnGEstrategia", "genero", "estrategia");
    filtrarJuegoPor("btnGIngles", "idioma", "ingles");
    filtrarJuegoPor("btnGEspañol", "idioma", "español");


}


async function EjecutarCatalogoYBarraBusqueda() {
    const respuesta = await fetch(catalogoJson);
    const datosDeCatalogoJson = await respuesta.json();
    CargarDatosJsonEnListaJuegos(datosDeCatalogoJson);
    BusquedaDeJuego();
  }


EjecutarCatalogoYBarraBusqueda();
EjecutarFiltroCatalogo(); 
mostrarValorCarritoIcon();