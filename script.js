const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image')


botonEnfoque.addEventListener('click', () => {
    cambiarElContexto('enfoque')
});

botonCorto.addEventListener('click', () => {
    cambiarElContexto('descanso-corto')
});

botonLargo.addEventListener('click', () => {
    cambiarElContexto('descanso-largo')
});
 function cambiarElContexto(contexto){
    html.setAttribute('data-contexto',contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`)
 }



