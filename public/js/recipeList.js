// Orden por defecto para ordenar
let currentSort = {
  columnIndex: -1,
  isAscending: true,
};

// Funcion para cargar la tabla
async function cargarRecetas(recipes = null) {
  try {
    if (!recipes) {
      // Si no se pasan recetas, hacer la petición al servidor
      const response = await fetch("/recipe/list");
      recipes = await response.json();
    }

    recipes = filtrarRecetas(recipes); // Filtrar las recetas según los filtros de búsqueda
    const contentContainer = document.getElementById("lista");

    // Eliminar todos los nodos hijos del contenedor sin usar innerHTML
    while (contentContainer.firstChild) {
      contentContainer.removeChild(contentContainer.firstChild);
    }

    // Crear la tabla
    const table = document.createElement("table");

    table.classList.add(
      "border-collapse",
      "table-auto",
      "text-left",
      "border",
      "border-gray-300",
      "divide-y",
      "divide-gray-200",
      "min-w-full",
      "bg-white",
      "min-w-full",
      "sm:text-sm"
    );

    // Crear encabezado de la tabla
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = [
      "Nombre",
      "Tipo",
      "Dificultad",
      "Tiempo",
      "Pasos",
      "Acciones",
    ];

    headers.forEach((headerText, index) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      th.classList.add(
        "px-6",
        "py-3",
        "text-xs",
        "font-medium",
        "text-gray-500",
        "uppercase",
        "tracking-wider",
        "bg-gray-100",
        "border-b",
        "border-gray-300"
      );

      th.addEventListener("click", () => {
        ordenarTabla(index, recipes);
      });

      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    const tbody = document.createElement("tbody");

    recipes.forEach((recipe) => {
      const row = document.createElement("tr");

      const tdName = document.createElement("td");
      tdName.textContent = recipe.recipe_name;
      tdName.classList.add(
        "px-6",
        "py-4",
        "whitespace-nowrap",
        "text-sm",
        "font-medium",
        "text-gray-900"
      ); // Estilo de las celdas
      row.appendChild(tdName);

      const tdType = document.createElement("td");
      tdType.textContent = recipe.cuisine_type;
      tdType.classList.add(
        "px-6",
        "py-4",
        "whitespace-nowrap",
        "text-sm",
        "text-gray-500"
      ); // Estilo de las celdas
      row.appendChild(tdType);

      const tdDifficulty = document.createElement("td");
      tdDifficulty.textContent = recipe.difficulty_level;
      tdDifficulty.classList.add(
        "px-6",
        "py-4",
        "whitespace-nowrap",
        "text-sm",
        "text-gray-500"
      ); // Estilo de las celdas
      row.appendChild(tdDifficulty);

      const tdTime = document.createElement("td");
      tdTime.textContent = recipe.preparation_time;
      tdTime.classList.add(
        "px-6",
        "py-4",
        "whitespace-nowrap",
        "text-sm",
        "text-gray-500"
      ); // Estilo de las celdas
      row.appendChild(tdTime);

      const tdSteps = document.createElement("td");
      tdSteps.textContent = recipe.steps;
      tdSteps.classList.add(
        "px-6",
        "py-4",
        "text-sm",
        "text-gray-500",
        "break-words"
      );
      tdSteps.style.maxHeight = "4.5rem";
      tdSteps.style.overflow = "hidden";
      tdSteps.style.textOverflow = "ellipsis";
      row.appendChild(tdSteps);

      // Crear la celda de acciones con botones de eliminar y modificar
      const tdActions = document.createElement("td");
      tdActions.classList.add(
        "px-6",
        "py-4",
        "whitespace-nowrap",
        "flex",
        "flex-col",
        "gap-2"
      );

      // Crear el botón de eliminar
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.classList.add(
        "bg-red-500",
        "text-white",
        "hover:bg-red-600",
        "px-4",
        "py-2",
        "rounded",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-red-400"
      );

      // Logica de borrar
      deleteButton.addEventListener("click", async () => {
        try {
          const response = await fetch(`/recipe/delete/${recipe.recipe_id}`, {
            method: "DELETE",
          });

          if (response.ok) {
            showToast("Receta eliminada exitosamente");
            cargarRecetas(); // Llamar la función nuevamente para actualizar la lista
          } else {
            showDialog("Error al eliminar la receta");
          }
        } catch (error) {
          console.error("Error al eliminar la receta:", error);
          showDialog("Hubo un problema al eliminar la receta");
        }
      });

      // Crear el botón de modificar
      const editButton = document.createElement("button");
      editButton.textContent = "Modificar";
      editButton.classList.add(
        "bg-yellow-400",
        "text-white",
        "hover:bg-yellow-500",
        "px-4",
        "py-2",
        "rounded",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-yellow-300"
      );

      // Funcion para editar directamente esa receta
      editButton.addEventListener("click", function () {
        showEditar(recipe.recipe_id);
      });

      tdActions.appendChild(editButton);
      tdActions.appendChild(deleteButton);
      row.appendChild(tdActions);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    contentContainer.appendChild(table); // Insertar la tabla en el contenedor
  } catch (error) {
    console.error("Error al obtener las recetas:", error);
    showDialog("Hubo un problema al cargar el listado");
  }
}

// Funcion para resetear los filtros de busqueda
document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("search_name").value = "";
  document.getElementById("search_type").value = "";
  document.getElementById("search_difficulty").value = "";
  document.getElementById("search_time").value = "";
  cargarRecetas();
});


// Funcion para filtrar la busqueda
function filtrarRecetas(recipes) {
  const nameFilter = document.getElementById("search_name").value.toLowerCase();
  const typeFilter = document.getElementById("search_type").value.toLowerCase();
  const difficultyFilter = document.getElementById("search_difficulty").value;
  const timeFilter = document.getElementById("search_time").value;

  const recipes_ordenadas = recipes.filter((recipe) => {
    const matchesName = recipe.recipe_name.toLowerCase().includes(nameFilter);
    const matchesType = recipe.cuisine_type.toLowerCase().includes(typeFilter);
    const matchesDifficulty = difficultyFilter
      ? recipe.difficulty_level === parseInt(difficultyFilter)
      : true;
    const matchesTime = timeFilter
      ? recipe.preparation_time <= parseInt(timeFilter)
      : true;

    return matchesName && matchesType && matchesDifficulty && matchesTime;
  });

  return recipes_ordenadas;
}

// Boton para buscar
document.getElementById("searchButton").addEventListener("click", () => {
  cargarRecetas();
});

// Función para ordenar las recetas según la columna seleccionada
function ordenarTabla(index, recipes) {
  if (currentSort.columnIndex === index) {
    // Si ya estaba ordenado por esta columna, invertimos el orden
    currentSort.isAscending = !currentSort.isAscending;
  } else {
    // Si es una columna diferente, comenzamos con orden ascendente
    currentSort.columnIndex = index;
    currentSort.isAscending = true;
  }

  // Ordenamos las recetas segun el índice de la columna y el tipo de datos
  const sortedRecipes = recipes.sort((a, b) => {
    let valA, valB;

    switch (index) {
      case 0: // Nombre
      case 1: // Tipo
        valA = a.recipe_name.toLowerCase();
        valB = b.recipe_name.toLowerCase();
        if (currentSort.isAscending) {
          return valA > valB ? 1 : valA < valB ? -1 : 0;
        } else {
          return valB > valA ? 1 : valB < valA ? -1 : 0;
        }

      case 2: // Dificultad
        valA = a.difficulty_level;
        valB = b.difficulty_level;
        return currentSort.isAscending ? valA - valB : valB - valA;

      case 3: // Tiempo
        valA = a.preparation_time;
        valB = b.preparation_time;
        return currentSort.isAscending ? valA - valB : valB - valA;

      default:
        return 0;
    }
  });

  cargarTablaOrdenada(sortedRecipes);
}


function cargarTablaOrdenada(sortedRecipes) {
  cargarRecetas(sortedRecipes);
}

cargarRecetas(); // Se tiene que mostrar inicialmente
