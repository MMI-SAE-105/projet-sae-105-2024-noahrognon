const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
    menu.setAttribute('aria-hidden', expanded);
    menu.classList.toggle('active');
});

const carouselContent = document.querySelector('.carousel-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

updateCarousel();

const timelineContainer = document.querySelector('.timeline-container');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');
const scrollStep = 300;

rightButton.addEventListener('click', () => {
    timelineContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

leftButton.addEventListener('click', () => {
    timelineContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});
