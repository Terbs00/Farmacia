document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    let isValid = true;

    // Limpiar errores anteriores
    document.querySelectorAll(".error").forEach((el) => (el.innerText = ""));

    // Validar nombre
    if (nombre === "") {
      document.getElementById("errorNombre").innerText = "El nombre es obligatorio.";
      isValid = false;
    }

    // Validar email
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      document.getElementById("errorEmail").innerText = "El correo es obligatorio.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("errorEmail").innerText = "Formato de correo inválido.";
      isValid = false;
    }

    // Validar mensaje
    if (mensaje.length < 10) {
      document.getElementById("errorMensaje").innerText = "El mensaje debe tener al menos 10 caracteres.";
      isValid = false;
    }

    if (isValid) {
      alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
      form.reset();
    }
  });
});
