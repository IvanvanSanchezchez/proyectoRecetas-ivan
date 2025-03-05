document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById("usernameOrEmail").value;
    const password = document.getElementById("password").value;

    // Validar los datos
    const validationError = validateLoginForm(usernameOrEmail, password);
    if (validationError) {
      showDialog(validationError);
      return;
    }

    // Fetch para logearnos
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirigir a la página principal si el login es exitoso
        window.location.href = "/principal";
      } else {
        // Si el servidor responde con un error
        showDialog("El usuario y la contraseña son incorrectos.");
      }
    } catch (error) {
      console.error("Error al realizar el login", error);
      showDialog("Error en el servidor, intenta más tarde.");
    }
  });

function validateLoginForm(usernameOrEmail, password) {
  if (usernameOrEmail.length < 3) {
    return "El nombre de usuario debe tener al menos 3 caracteres.";
  }

  // Validación de la contraseña (mínimo 6 caracteres)
  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }

  // Si todo está bien, retorna null (sin errores)
  return null;
}
