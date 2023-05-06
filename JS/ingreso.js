// Formulario de Log in y Register

const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form")

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.email.value
  const password = loginForm.password.value

  if (email === "coderhouse@gmail.com" && password === "javascript") {
    swal({
      title: "Correcto!",
      text: "En instantes serás redirigido a tu Playlist",
      icon: "success",
      buttons: false,
      timer: 2000
    }).then(() => {
      window.location.href = "playlist.html"
    })
  } else {
    swal({
      title: "Error!",
      text: "Email o contraseña incorrectos!",
      icon: "error"
    })
  }
})
