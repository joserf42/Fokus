const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const botonIniciarPausar = document.querySelector('#start-pause');
const textoIniciarPausar = document.querySelector('#start-pause span')

const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const audioPlay = new Audio('./sonidos/play.wav');
const audioPause = new Audio('./sonidos/pause.mp3');
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3');

let tiempoTranscurridoEnSegundos = 5;
let idIntervalo = null

musica.loop = true;

inputEnfoqueMusica.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

botonEnfoque.addEventListener('click', () => {
    cambiarElContexto('enfoque');
    botonEnfoque.classList.add('active');
});

botonCorto.addEventListener('click', () => {
    cambiarElContexto('descanso-corto');
    botonCorto.classList.add('active');
});

botonLargo.addEventListener('click', () => {
    cambiarElContexto('descanso-largo');
    botonLargo.classList.add('active');
});

function cambiarElContexto(contexto) {
    botones.forEach(function(boton) {
        boton.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`);

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `;
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            ¿Qué tal tomar un respiro?, <br> 
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `;
            break;
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie, <br>
                <strong class="app__title-strong">Haz una pausa larga.</strong>
            `;
            break;
        default:
            break;
    }
}

const cuentaRegresiva = () => {
    if(tiempoTranscurridoEnSegundos <= 0){
        audioTiempoFinalizado.play();
        alert('Tiempo final')
        reiniciar()
        return
    }
    textoIniciarPausar.textContent = "Pausar"
    tiempoTranscurridoEnSegundos -= 1;
    console.log("temporizador:" + tiempoTranscurridoEnSegundos);
};

botonIniciarPausar.addEventListener('click', iniciarPausar);

function iniciarPausar (){
    if (idIntervalo){
        audioPause.play();
        reiniciar()
        return
    }
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva,1000)
}
function reiniciar(){
    clearInterval(idIntervalo)
    idIntervalo = null
    textoIniciarPausar.textContent = "Comenzar"
}