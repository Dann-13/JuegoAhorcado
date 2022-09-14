var palabrita;
let cantidadErrores = 0;
let cantidadAciertos = 0;
var palabras = [
    'manzana',
    'pera',
    'mango',
    'uvas',
    'banano',
    'cereza',
    'fresa',
    'manzana',
    'kiwi',
    'naranja',
    'sandia'
];
var botonIniciar = document.querySelector('#iniciarjuego');
var botonPalabra = document.querySelector('#botonPalabra');
var btn_letras = document.querySelectorAll("#letras button");
const img = id('imagen');

//mostrando el juego
function mostrarContenido() {
    document.getElementById('contenido-oculto').style.display = 'block';
    document.getElementById('contenedor-Botones').style.display = 'none';
}
botonIniciar.addEventListener("click", function (event) {
    mostrarContenido();
});

//Click en obtener Palabra O Iniciar Juego
botonPalabra.addEventListener("click", function (event) {
    imagen.src = 'img/img0.svg';
    botonPalabra.disabled = true;
    cantidadErrores = 0; //para que cada vez que vuelva a jugar inicie en 0
    cantidadAciertos = 0;
    var parrafo = id("palabraAdivinar");

    parrafo.innerHTML = '';

    var numPalabras = palabras.length;
    var valor_al_azar = obtenerRamdom(0, numPalabras)
    palabrita = palabras[valor_al_azar];
    console.log(palabrita);

    var cantidad_letras = palabrita.length;
    for (let i = 0; i < btn_letras.length; i++) { //servira para habilitar las letras cada ves que le demos click a obtener palabra
        btn_letras[i].disabled=false;
    }
    for (let i = 0; i < cantidad_letras; i++) {
        var span = document.createElement('span');
        parrafo.appendChild(span);
    }
});
//Para adivinar letras
for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener("click", click_letras)
}
function click_letras(event) {
    const spans = document.querySelectorAll("#palabraAdivinar span")
    const botonClick = event.target;
    botonClick.disabled = true;
    const letra = botonClick.innerHTML.toLowerCase();
    const palabra = palabrita.toLowerCase();

    let acerto = false;
    for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            //la variable i es la pocision de la letra, esto coincide con el
            //la pocision del span en el que tenemos que mostrar la letra
            spans[i].innerHTML = letra;
            cantidadAciertos++;
            acerto = true;
        }
    }
    if (acerto == false) {
        cantidadErrores++;
        const source = `img/img${cantidadErrores}.svg`;
        console.log(source)
        const img = id('imagen');
        img.src = source;

    }
    if (cantidadErrores == 7){
        id('resultado').innerHTML = "Perdiste la palabra era " + palabrita;
        botonPalabra.disabled = false;
        finalizarJuego()
    }else if(cantidadAciertos == palabrita.length){
        id('resultado').innerHTML = "Ganaste";
        botonPalabra.disabled = false;
        finalizarJuego()
    }
    console.log("la letra " + letra + " en la palabra " + "¿Existe? " + acerto);
}
//para finalizar juego
function finalizarJuego(){
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled=true;//si perdio o gano igual desabilita los botones para no seguir escribiendo
    }
    botonPalabra.disabled = false; //cuando termine el juego que me habilite obtener palabra
}
