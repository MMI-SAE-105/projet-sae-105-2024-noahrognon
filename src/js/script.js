const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
        menuBtn.setAttribute('aria-expanded', !expanded);
        menu.setAttribute('aria-hidden', expanded);
        menu.classList.toggle('active');
    });
}

const carouselContent = document.querySelector('.carousel-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

if (carouselContent && prevButton && nextButton) {
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
}

const timelineContainer = document.querySelector('.timeline-container');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');
const scrollStep = 300;

if (timelineContainer) {
    if (rightButton) {
        rightButton.addEventListener('click', () => {
            timelineContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });
    }

    if (leftButton) {
        leftButton.addEventListener('click', () => {
            timelineContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });
    }
}

const scrollToTopButton = document.getElementById("scrollToTop");

if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            scrollToTopButton.style.display = "flex";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
