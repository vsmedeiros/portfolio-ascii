let currentIndex = 0;

function moveCarousel(step) {
  const items = document.querySelectorAll(".carousel-item");
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  } else if (currentIndex >= items.length) {
    currentIndex = 0;
  }

  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
