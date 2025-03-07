// Funciones generales


// Crear Dialog
function showDialog(message) {
  // Verificar si ya existe un diálogo en el documento y eliminarlo
  const existingDialog = document.getElementById("customDialog");
  if (existingDialog) {
    existingDialog.remove();
  }

  // Crear el contenedor del fondo
  const dialogBackdrop = document.createElement("div");
  dialogBackdrop.id = "customDialogBackdrop";
  dialogBackdrop.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "bg-gray-800",
    "bg-opacity-50",
    "flex",
    "items-center",
    "justify-center",
    "z-50"
  );

  // Crear el cuadro de diálogo
  const dialogBox = document.createElement("div");
  dialogBox.classList.add(
    "bg-white",
    "p-6",
    "rounded-lg",
    "shadow-lg",
    "w-96",
    "text-center"
  );

  // Agregar el mensaje al cuadro de dialogo
  const messageText = document.createElement("p");
  messageText.classList.add(
    "text-lg",
    "font-semibold",
    "text-gray-700",
    "mb-4"
  );
  messageText.textContent = message;

  // Crear el boton de cerrar
  const closeButton = document.createElement("button");
  closeButton.id = "closeDialog";
  closeButton.classList.add(
    "bg-blue-500",
    "text-white",
    "px-6",
    "py-2",
    "rounded-md",
    "hover:bg-blue-600",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-300"
  );
  closeButton.textContent = "Cerrar";

  // Agregar el mensaje y el boton al cuadro de dialogo
  dialogBox.appendChild(messageText);
  dialogBox.appendChild(closeButton);

  // Agregar el cuadro de dialogo al contenedor del fondo
  dialogBackdrop.appendChild(dialogBox);

  // Agregar el contenedor al body
  document.body.appendChild(dialogBackdrop);

  // Mostrar el diálogo (no es estrictamente necesario, pero así lo tenemos claro)
  dialogBackdrop.style.display = "flex";

  // Evento para cerrar el diálogo cuando se hace clic en el botón
  closeButton.addEventListener("click", () => {
    dialogBackdrop.remove();
  });
}

// Crear Toast
function showToast(messaje) {
  // Crear el contenedor del toast
  const toast = document.createElement("div");
  toast.classList.add(
    "fixed",
    "bottom-5",
    "right-5",
    "bg-green-500",
    "text-white",
    "p-4",
    "rounded-lg",
    "shadow-lg",
    "w-80",
    "text-center",
    "transition-opacity",
    "opacity-0"
  );

  // Crear el mensaje del toast
  const messageText = document.createElement("p");
  messageText.classList.add("text-lg", "font-semibold");
  messageText.textContent = messaje;

  // Agregar el mensaje al contenedor del toast
  toast.appendChild(messageText);

  // Agregar el toast al body
  document.body.appendChild(toast);

  // Mostrar el toast (cambiar la opacidad a 1 para hacerlo visible)
  setTimeout(() => {
    toast.classList.remove("opacity-0");
    toast.classList.add("opacity-100");
  }, 100);

  // Desaparecer el toast después de 3 segundos (3000ms)
  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");

    // Eliminar el toast del DOM después de la animación
    setTimeout(() => {
      toast.remove();
    }, 500); // Espera un poco para que termine la animación de desvanecimiento
  }, 3000);
}

// Mostrar errores debajo de un campo
function mostrarError(campo, mensaje) {
  // Obtener el input
  const inputField = document.getElementById(campo);

  // Revisar si ya hay un mensaje de error existente y eliminarlo
  const existingError = inputField.nextElementSibling;
  if (existingError && existingError.classList.contains("error-message")) {
    existingError.remove();
  }

  // Crear el div del mensaje de error
  const errorDiv = document.createElement("div");
  errorDiv.classList.add(
    "error-message",
    "text-red-500",
    "text-sm",
    "mt-1",
    "font-medium",
    "italic"
  );
  errorDiv.textContent = mensaje;

  // Insertar el mensaje despues del input
  inputField.after(errorDiv);
}

// Limpiar los mensajes de error
function limpiarErrores() {
  document
    .querySelectorAll(".error-message")
    .forEach((error) => error.remove());
}

// Limpiar el div de content
function clearContent() {
  const contentContainer = document.getElementById("content");

  // Eliminar todos los elementos hijos dentro de #content
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
}

// Limpiar campos de editar y de agregar
function limpiarCampos() {
  // Limpiar los valores de los campos del formulario
  document.getElementById("recipe_name").value = "";
  document.getElementById("cuisine_type").value = "";
  document.getElementById("difficulty_level").value = "";
  document.getElementById("preparation_time").value = "";
  document.getElementById("steps").value = "";
}

// Validar los valores de receta
function validarReceta() {
  limpiarErrores();

  let valido = true;

  let recipe_name = document.getElementById("recipe_name").value.trim();
  let cuisine_type = document.getElementById("cuisine_type").value.trim();
  let difficulty_level = document
    .getElementById("difficulty_level")
    .value.trim();
  let preparation_time = document
    .getElementById("preparation_time")
    .value.trim();
  let steps = document.getElementById("steps").value.trim();

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  // Validación Nombre de la receta
  if (!recipe_name) {
    mostrarError("recipe_name", "El nombre es obligatorio");
    valido = false;
  } else if (!nameRegex.test(recipe_name)) {
    mostrarError("recipe_name", "Solo se permiten letras y espacios");
    valido = false;
  }

  // Validación Tipo de cocina (opcional, pero si está presente debe ser válido)
  if (cuisine_type && !nameRegex.test(cuisine_type)) {
    mostrarError("cuisine_type", "Solo se permiten letras y espacios");
    valido = false;
  }

  // Validación Nivel de dificultad
  const difficulty = parseInt(difficulty_level);
  if (!difficulty_level) {
    mostrarError("difficulty_level", "El nivel de dificultad es obligatorio");
    valido = false;
  } else if (isNaN(difficulty) || difficulty < 1 || difficulty > 5) {
    mostrarError("difficulty_level", "Debe ser un número entre 1 y 5");
    valido = false;
  }

  // Validación Tiempo de preparación (opcional, pero si se ingresa debe ser mayor que 0)
  if (preparation_time && (isNaN(preparation_time) || preparation_time <= 0)) {
    mostrarError("preparation_time", "Debe ser un número mayor que 0");
    valido = false;
  }

  // Validación Pasos de la receta
  if (!steps) {
    mostrarError("steps", "Los pasos son obligatorios");
    valido = false;
  }

  return valido;
}
