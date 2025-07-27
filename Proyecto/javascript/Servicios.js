document.addEventListener("DOMContentLoaded", () => {
  const logoImg = document.querySelector(".logo img");
  if (logoImg) {
    logoImg.style.borderRadius = "50%";
    logoImg.style.border = "3px solid white";
    logoImg.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    logoImg.style.objectFit = "cover";
  }

  const header = document.querySelector("header");
  if (header) {
    header.style.backgroundColor = "#e0f4f1"; // opcional
  }

  const titulo = document.querySelector(".logo h1");
  if (titulo) {
    titulo.style.fontSize = "1.8rem";
    titulo.style.color = "#008080";
  }

  const servicios = document.querySelectorAll(".servicios-lista li");
  servicios.forEach((item) => {
    item.style.backgroundColor = "#ffffffaa"; // ligero semitransparente
    item.style.borderRadius = "8px";
  });
});
