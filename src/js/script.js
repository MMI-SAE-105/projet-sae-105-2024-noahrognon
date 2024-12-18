const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
    menu.setAttribute('aria-hidden', expanded);
    menu.classList.toggle('active');
});
// Sélection des éléments du DOM
const carouselContent = document.querySelector('.carousel-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Variables pour gérer l'index
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Fonction pour déplacer le carousel
function updateCarousel() {
    const offset = -currentIndex * 100; // Calcule le décalage
    carouselContent.style.transform = `translateX(${offset}%)`;
}

// Bouton "Suivant"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Boucle vers le début
    updateCarousel();
});

// Bouton "Précédent"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Boucle vers la fin
    updateCarousel();
});

// Initialisation
updateCarousel();

const timelineContainer = document.querySelector('.timeline-container');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');
const scrollStep = 300; // Distance de défilement

rightButton.addEventListener('click', () => {
    timelineContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

leftButton.addEventListener('click', () => {
    timelineContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});
