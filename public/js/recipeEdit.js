

// Funcion para mostrar la seccion de editar, se le pasa un id para mostrar los valores de una receta
function showEditar(recipeId) {
  clearContent();

  // Crear un nuevo formulario dinámicamente para editar
  const editRecipeForm = document.createElement("form");
  editRecipeForm.id = "editRecipeForm";
  editRecipeForm.classList.add(
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
  title.textContent = "Editar Receta";
  title.classList.add("text-2xl", "font-semibold", "text-center", "mb-4"); 
  editRecipeForm.appendChild(title);

  // Crear el campo de nombre de receta
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "recipe_name");
  nameLabel.textContent = "Nombre de la receta:";
  nameLabel.classList.add("block", "font-medium", "text-gray-700"); 
  editRecipeForm.appendChild(nameLabel);
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
  editRecipeForm.appendChild(nameInput);

  // Crear el campo de tipo de cocina
  const typeLabel = document.createElement("label");
  typeLabel.setAttribute("for", "cuisine_type");
  typeLabel.textContent = "Tipo de cocina:";
  typeLabel.classList.add("block", "font-medium", "text-gray-700");
  editRecipeForm.appendChild(typeLabel);
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
  editRecipeForm.appendChild(typeInput);

  // Crear el campo de nivel de dificultad
  const difficultyLabel = document.createElement("label");
  difficultyLabel.setAttribute("for", "difficulty_level");
  difficultyLabel.textContent = "Nivel de dificultad (1-5):";
  difficultyLabel.classList.add("block", "font-medium", "text-gray-700");
  editRecipeForm.appendChild(difficultyLabel);
  const difficultyInput = document.createElement("input");
  difficultyInput.setAttribute("type", "number");
  difficultyInput.setAttribute("id", "difficulty_level");
  difficultyInput.setAttribute("name", "difficulty_level");
  difficultyInput.setAttribute("placeholder", "Ejemplo: 3");
  difficultyInput.setAttribute("min", "1");
  difficultyInput.required = true;
  difficultyInput.setAttribute("max", "5");

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
  editRecipeForm.appendChild(difficultyInput);

  // Crear el campo de tiempo de preparación
  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "preparation_time");
  timeLabel.textContent = "Tiempo de preparación (minutos):";
  timeLabel.classList.add("block", "font-medium", "text-gray-700");
  editRecipeForm.appendChild(timeLabel);
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
  editRecipeForm.appendChild(timeInput);

  // Crear el campo de pasos
  const stepsLabel = document.createElement("label");
  stepsLabel.setAttribute("for", "steps");
  stepsLabel.textContent = "Pasos de la receta:";
  stepsLabel.classList.add("block", "font-medium", "text-gray-700");
  editRecipeForm.appendChild(stepsLabel);
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
  editRecipeForm.appendChild(stepsTextarea);

  // Crear los botones de limpiar y enviar
  const clearButton = document.createElement("button");
  clearButton.setAttribute("type", "button");
  clearButton.setAttribute("id", "clearEditButton");
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
  editRecipeForm.appendChild(clearButton);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Actualizar receta";
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
  editRecipeForm.appendChild(submitButton);

  // Agregar el formulario al contenedor del contenido
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(editRecipeForm);

  // Cargar los datos de la receta para editar
  loadRecipeForEdit(recipeId);

  // Configurar el evento de submit
  editRecipeForm.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    if (!validarReceta()) {
      return;
    }

    const updatedRecipeData = {
      recipe_name: document.getElementById("recipe_name").value,
      cuisine_type: document.getElementById("cuisine_type").value,
      difficulty_level: document.getElementById("difficulty_level").value,
      preparation_time: document.getElementById("preparation_time").value,
      steps: document.getElementById("steps").value,
    };

    // Fetch par actualizar en la base de datos
    try {
      const response = await fetch(`/recipe/update/${recipeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipeData),
      });

      const data = await response.json();
      if (response.ok) {
        showToast("Receta actualizada correctamente");
        cargarRecetas();
      } else {
        showDialog(data.message);
      }
    } catch (error) {
      console.error("Error al actualizar la receta:", error);
      showDialog("Hubo un problema al actualizar la receta.");
    }
  });

  // Timeout para animacion
  setTimeout(() => {
    editRecipeForm.classList.remove("opacity-0", "translate-y-10");
    editRecipeForm.classList.add("opacity-100", "translate-y-0");
  }, 100);

  // Configurar el botón "Limpiar campos"
  document.getElementById("clearEditButton").addEventListener("click", () => {
    editRecipeForm.reset();
  });
}


// Cargar valores de la receta
async function loadRecipeForEdit(recipeId) {
  try {

    // Traemos exactamente esa tarea
    const response = await fetch(`/recipe/${recipeId}`);

    const recipe = await response.json();

    if (response.ok) {
      document.getElementById("recipe_name").value = recipe.recipe_name;
      document.getElementById("cuisine_type").value = recipe.cuisine_type;
      document.getElementById("difficulty_level").value =
        recipe.difficulty_level;
      document.getElementById("preparation_time").value =
        recipe.preparation_time;
      document.getElementById("steps").value = recipe.steps;
    } else {
      showDialog("Error al cargar la receta: " + recipe.message);
    }
  } catch (error) {
    console.error("Error al cargar la receta:", error);
    showDialog("Hubo un problema al obtener la receta.");
  }
}

// Cargamos el select para elegir la receta
async function cargarRecetasParaSeleccionar() {
  try {
    clearContent();
    const response = await fetch("/recipe/list");
    const recipes = await response.json();

    if (response.ok) {
      const select = document.createElement("select");
      select.setAttribute("id", "recipeSelect");
      select.setAttribute("name", "recipe");

      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Selecciona una receta";
      select.appendChild(defaultOption);

      // Crear las opciones para cada receta
      recipes.forEach((recipe) => {
        const option = document.createElement("option");
        option.value = recipe.recipe_id; 
        option.textContent = recipe.recipe_name; 
        select.appendChild(option);
      });

      // Crear el contenedor y añadir el select
      const contentContainer = document.getElementById("content");
      contentContainer.innerHTML = ""; // Limpiar el contenido previo
      const label = document.createElement("label");
      label.setAttribute("for", "recipeSelect");
      label.textContent = "Selecciona una receta para editar:";
      contentContainer.appendChild(label);
      contentContainer.appendChild(select);

      // Configurar el evento para seleccionar una receta
      select.addEventListener("change", (event) => {
        const recipeId = event.target.value;

        if (recipeId) {
          showEditar(recipeId); // Llamamos a la función showEditar con el id de la receta seleccionada
        }
      });
    } else {
      showDialog("Error al cargar las recetas.");
    }
  } catch (error) {
    console.error("Error al obtener las recetas:", error);
    showDialog("Hubo un problema al obtener las recetas.");
  }
}

document
  .getElementById("btnModificar")
  .addEventListener("click", cargarRecetasParaSeleccionar);
