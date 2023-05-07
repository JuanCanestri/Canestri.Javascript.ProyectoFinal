// Formulario de Log in y Register

// Obtener referencias a los elementos necesarios
const btnLogin = document.getElementById("btnLogin");
const emailInput = document.querySelector(".formulario input[type='email']");
const passwordInput = document.querySelector(".formulario input[type='password']");

// Agregar el evento click al botón de inicio de sesión
btnLogin.addEventListener("click", function(event) {
  event.preventDefault();

  // Verificar si el email y la contraseña son correctos
  if (emailInput.value === "coderhouse@gmail.com" && passwordInput.value === "javascript") {
    // Mostrar alerta de éxito
    swal({
      title: "¡Bienvenido!",
      text: "¡En un instante será redirigido a su Playlist!",
      icon: "success",
      button: ": )",
    }).then(() => {
      // Redireccionar al usuario a la página de Playlist
      window.location.href = "playlist.html";
    });
  } else {
    // Mostrar alerta de error
    swal({
      title: "¡Error!", 
      text: "El email o la contraseña son incorrectos", 
      icon: "error",
      button: ": (",
    });
  }
});