class Carousel {
    constructor({ containerSelector, dotSelector, interval = 5000 }) {
      this.carouselContainer = document.querySelector(containerSelector);
      this.slides = this.carouselContainer.querySelectorAll('img');
      this.dots = document.querySelectorAll(dotSelector);
      this.currentIndex = 0;
      this.totalSlides = this.slides.length;
      this.interval = interval;
      this.timer = null;
  
      this.init();
    }
  
    init() {
      this.updateSlide(0); // Инициализация первого слайда
      this.setupEventListeners();
      this.startCarousel();
    }
  
    updateSlide(index) {
      this.currentIndex = index;
      this.carouselContainer.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      this.updateDots();
    }
  
    updateDots() {
      this.dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === this.currentIndex);
      });
    }
  
    setupEventListeners() {
      this.dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const index = Number(dot.getAttribute('data-index'));
          this.updateSlide(index);
          this.resetTimer();
        });
      });
    }
  
    startCarousel() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateSlide(this.currentIndex);
      }, this.interval);
    }
  
    stopCarousel() {
      clearInterval(this.timer);
    }
  
    resetTimer() {
      this.stopCarousel();
      this.startCarousel();
    }
  }
  
export { Carousel };