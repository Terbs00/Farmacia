document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track .hero');
  let index = 0;

  function moveToSlide(i) {
    index = i;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    carouselTrack.style.transform = `translateX(-${index * 100}vw)`;
  }

  // Auto movimiento cada 4 segundos
 // setInterval(() => {
    //moveToSlide(index + 1);
  //}, 4000);

  // Controles manuales (si los agregas al HTML)
  const btnNext = document.querySelector('.btn-next');
  const btnPrev = document.querySelector('.btn-prev');

  if (btnNext) {
    btnNext.addEventListener('click', () => moveToSlide(index + 1));
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => moveToSlide(index - 1));
  }
});
