import Pelicula from "./Pelicula.js";

var titulo = document.querySelector('#titulo');
var año = document.querySelector('#año');
var duracion = document.querySelector('#duracion');

document.querySelector('#btnAgregar')
.addEventListener('click', bnAgregar);

function bnAgregar() {
    let m1 = new Pelicula(titulo.value, Number
    (año.value), Number(duracion.value));
    
    m1.imprimir();
}