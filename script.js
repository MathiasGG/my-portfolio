let slideIndex = 0; // 
const slides = document.querySelectorAll('.slide');

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