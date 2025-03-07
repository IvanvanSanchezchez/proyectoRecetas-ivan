function showAgregar() {
  clearContent();

  // Crear un nuevo formulario dinámicamente
  const addRecipeForm = document.createElement("form");
  addRecipeForm.id = "recipeForm";
  addRecipeForm.classList.add(
    "space-y-4",
    "p-6",
    "max-w-2xl",
    "mx-auto",
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "opacity-0",
    "transform",
    "translate-y-10",
    "transition-all",
    "duration-500"
  );

  // Crear el título
  const title = document.createElement("h2");
  title.textContent = "Agregar Receta";
  title.classList.add("text-2xl", "font-semibold", "text-center", "mb-4");
  addRecipeForm.appendChild(title);

  // Crear el campo de nombre de receta
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "recipe_name");
  nameLabel.textContent = "Nombre de la receta:";
  nameLabel.classList.add("block", "font-medium", "text-gray-700");
  addRecipeForm.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "recipe_name");
  nameInput.setAttribute("name", "recipe_name");
  nameInput.setAttribute("placeholder", "Ejemplo: Pasta Carbonara");
  nameInput.required = true;
  nameInput.classList.add(
    "w-full",
    "px-4",
    "py-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-400",
    "focus:border-blue-400"
  );
  addRecipeForm.appendChild(nameInput);

  // Crear el campo de tipo de cocina
  const typeLabel = document.createElement("label");
  typeLabel.setAttribute("for", "cuisine_type");
  typeLabel.textContent = "Tipo de cocina:";
  typeLabel.classList.add("block", "font-medium", "text-gray-700");
  addRecipeForm.appendChild(typeLabel);
  const typeInput = document.createElement("input");
  typeInput.setAttribute("type", "text");
  typeInput.setAttribute("id", "cuisine_type");
  typeInput.setAttribute("name", "cuisine_type");
  typeInput.setAttribute("placeholder", "Ejemplo: Italiana, Mexicana...");
  typeInput.classList.add(
    "w-full",
    "px-4",
    "py-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-400",
    "focus:border-blue-400"
  );
  addRecipeForm.appendChild(typeInput);

  // Crear el campo de nivel de dificultad
  const difficultyLabel = document.createElement("label");
  difficultyLabel.setAttribute("for", "difficulty_level");
  difficultyLabel.textContent = "Nivel de dificultad (1-5):";
  difficultyLabel.classList.add("block", "font-medium", "text-gray-700");
  addRecipeForm.appendChild(difficultyLabel);
  const difficultyInput = document.createElement("input");
  difficultyInput.setAttribute("type", "number");
  difficultyInput.setAttribute("id", "difficulty_level");
  difficultyInput.setAttribute("name", "difficulty_level");
  difficultyInput.setAttribute("min", "1");
  difficultyInput.setAttribute("max", "5");
  difficultyInput.setAttribute("placeholder", "Ejemplo: 3");
  difficultyInput.required = true;
  difficultyInput.classList.add(
    "w-full",
    "px-4",
    "py-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-400",
    "focus:border-blue-400"
  );
  addRecipeForm.appendChild(difficultyInput);

  // Crear el campo de tiempo de preparación
  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "preparation_time");
  timeLabel.textContent = "Tiempo de preparación (minutos):";
  timeLabel.classList.add("block", "font-medium", "text-gray-700");
  addRecipeForm.appendChild(timeLabel);
  const timeInput = document.createElement("input");
  timeInput.setAttribute("type", "number");
  timeInput.setAttribute("id", "preparation_time");
  timeInput.setAttribute("name", "preparation_time");
  timeInput.setAttribute("placeholder", "Ejemplo: 30");
  timeInput.classList.add(
    "w-full",
    "px-4",
    "py-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-400",
    "focus:border-blue-400"
  );
  addRecipeForm.appendChild(timeInput);

  // Crear el campo de pasos
  const stepsLabel = document.createElement("label");
  stepsLabel.setAttribute("for", "steps");
  stepsLabel.textContent = "Pasos de la receta:";
  stepsLabel.classList.add("block", "font-medium", "text-gray-700");
  addRecipeForm.appendChild(stepsLabel);
  const stepsTextarea = document.createElement("textarea");
  stepsTextarea.setAttribute("id", "steps");
  stepsTextarea.setAttribute("name", "steps");
  stepsTextarea.setAttribute("rows", "4");
  stepsTextarea.setAttribute("cols", "50");
  stepsTextarea.setAttribute(
    "placeholder",
    "Ejemplo: 1. Cocinar la pasta. 2. Preparar la salsa..."
  );
  stepsTextarea.required = true;
  stepsTextarea.classList.add(
    "w-full",
    "px-4",
    "py-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-400",
    "focus:border-blue-400"
  );
  addRecipeForm.appendChild(stepsTextarea);

  // Crear los botones de limpiar y enviar
  const clearButton = document.createElement("button");
  clearButton.setAttribute("type", "button");
  clearButton.setAttribute("id", "clearCrearButton");
  clearButton.textContent = "Limpiar campos";
  clearButton.classList.add(
    "bg-gray-300",
    "text-gray-700",
    "hover:bg-gray-400",
    "px-4",
    "py-2",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-gray-500"
  );
  addRecipeForm.appendChild(clearButton);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Añadir receta";
  submitButton.classList.add(
    "bg-blue-500",
    "text-white",
    "hover:bg-blue-700",
    "px-6",
    "py-2",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-400"
  );
  addRecipeForm.appendChild(submitButton);

  // Agregar el formulario al contenedor del contenido
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(addRecipeForm);

  // Aplicar la animación después de que el formulario se haya añadido al DOM
  setTimeout(() => {
    addRecipeForm.classList.remove("opacity-0", "translate-y-10");
    addRecipeForm.classList.add("opacity-100", "translate-y-0");
  }, 100);

  // Configurar el evento de submit
  addRecipeForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validarReceta()) {
      return;
    }

    const recipeData = {
      recipe_name: nameInput.value,
      cuisine_type: typeInput.value,
      difficulty_level: difficultyInput.value,
      preparation_time: timeInput.value,
      steps: stepsTextarea.value,
    };

    // Fetch para añadir la receta
    try {
      const response = await fetch("/recipe/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      const data = await response.json();

      if (data.success) {
        addRecipeForm.reset();
        cargarRecetas();
        showDialog("Receta agregada exitosamente");
      } else {
        showDialog(data.message);
      }
    } catch (error) {
      console.error("Error al enviar la receta:", error);
      showDialog("Hubo un problema con la solicitud.");
    }
  });

  // Configurar el botón "Limpiar campos"
  clearButton.addEventListener("click", () => {
    addRecipeForm.reset();
  });
}


document.getElementById("btnAgregar").addEventListener("click", showAgregar);


// Boton para cerrar sesion
document
  .getElementById("logoutButton")
  .addEventListener("click", async function () {
    try {
      const response = await fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/login";
      } else {
        console.error("Error al cerrar sesión.");
      }
    } catch (error) {
      console.error("Error al realizar la petición de cerrar sesión:", error);
    }
  });
