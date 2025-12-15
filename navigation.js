let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
const progressFill = document.getElementById('progressFill');

function updateSlide() {
    slides.forEach(s => s.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
    progressFill.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }
});

updateSlide();
