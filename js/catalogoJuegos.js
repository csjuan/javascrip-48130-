class Genero {
  constructor(nombreGenero) {
    this.nombreGenero = nombreGenero;
  }
}
const listaGeneros = [];



class Plataforma {
  constructor(nombrePlataforma) {
    this.nombrePlataforma = nombrePlataforma;
  }
}
const listaPlataformas = [];



class Idioma {
  constructor(idioma) {
    this.idioma = idioma;
  }
}
const listaIdiomas = [];


class Juego {
  constructor(
    id,
    nombreJuego = "...",
    plataforma = "...",
    idioma = "...",
    genero = "...",
    tamano = "...",
    precio = "...",
    imagen = "...",
    descripcion = "..."
  ) {
    this.id = id;
    this.nombreJuego = nombreJuego;
    this.plataforma = plataforma;
    this.idioma = idioma;
    this.genero = genero;
    this.tamano = `${tamano} GB`;
    this.precio = precio.toFixed(2);
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.cantidad = 1;
  }

}

const listaJuegos = [];



const pc = new Plataforma("PC");
const playStation = new Plataforma("PLAYSTATION");

listaPlataformas.push(pc, playStation);


const multilenguaje = new Idioma("Multilenguaje");
const español = new Idioma("Español");
const Ingles = new Idioma("Ingles")

listaIdiomas.push(multilenguaje, español, Ingles);


const accion = new Genero("Acción");
const aventura = new Genero("Aventura");
const deportes = new Genero("Deportes");
const terror = new Genero("Terror");
const estrategia = new Genero("Estrategia");


listaGeneros.push(accion, aventura, deportes, terror, estrategia);


const catalogoJson = `json/catalogoJuegos.json`;