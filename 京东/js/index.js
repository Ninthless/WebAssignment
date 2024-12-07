const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    carouselItems[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}


dots.forEach((dot, index) => {
    dot.addEventListener('mouseenter', () => {
        stopAutoPlay();
        showSlide(index);
    });

    dot.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
});
startAutoPlay();