let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

function mudarSlide(movimento) {
    slides[slideIndex].classList.remove('ativa');
    slideIndex += movimento;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add('ativa');
}

menuToggle.addEventListener('click', () => {
    const menuAberto = menu.classList.toggle('menu-aberto');
    menuToggle.setAttribute('aria-expanded', menuAberto);
});

menu.addEventListener('click', (evento) => {
    if (evento.target.matches('a')) {
        menu.classList.remove('menu-aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});