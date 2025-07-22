document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-track .hero');
    let index = 0;

    function moveSlide() {
        index = (index + 1) % slides.length;
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 4000);

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = form.nombre.value.trim();
            const email = form.email.value.trim();
            const mensaje = form.mensaje.value.trim();

            if (!nombre || !email || !mensaje) {
                alert("Por favor completa todos los campos.");
                return;
            }

            const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                alert("Correo no válido.");
                return;
            }

            alert("Mensaje enviado con éxito. Nos pondremos en contacto pronto.");
            form.reset();
        });
    }
});

