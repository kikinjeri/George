const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");

// Duplicate slides to allow seamless continuous scroll
const slides = Array.from(slider.children);
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  slider.appendChild(clone);
});

// Pause on hover
sliderContainer.addEventListener("mouseenter", () => {
  slider.style.animationPlayState = 'paused';
});
sliderContainer.addEventListener("mouseleave", () => {
  slider.style.animationPlayState = 'running';
});
