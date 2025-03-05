const { Sequelize } = require("sequelize");
const bcrypt = require("bcryptjs");

// Require

// Conexión a SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // Archivo donde se almacenará la base de datos
});

// Sincronizar el modelo con la base de datos (sin borrar las tablas)
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Base de datos sincronizada.");

    // Insertar datos de ejemplo después de la sincronización
    insertSampleData();
    insertDefaultUser();
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });

module.exports = sequelize;

// Función para insertar datos de ejemplo
async function insertSampleData() {
  const Recipe = require("./recipe");

  try {
    // Insertar ejemplos de recetas
    await Recipe.bulkCreate([
      {
        recipe_name: "Paella Valenciana",
        cuisine_type: "Española",
        difficulty_level: 4,
        preparation_time: 60,
        steps:
          "1. Sofreír los mariscos.\n2. Cocinar el arroz con el caldo.\n3. Añadir los ingredientes restantes.\n4. Dejar reposar antes de servir.",
      },
      {
        recipe_name: "Spaghetti Carbonara",
        cuisine_type: "Italiana",
        difficulty_level: 3,
        preparation_time: 30,
        steps:
          "1. Cocer la pasta.\n2. Freír el tocino.\n3. Mezclar con el huevo y el queso.\n4. Incorporar la pasta cocida y servir.",
      },
      {
        recipe_name: "Sushi Rolls",
        cuisine_type: "Japonesa",
        difficulty_level: 5,
        preparation_time: 90,
        steps:
          "1. Preparar el arroz de sushi.\n2. Cortar los ingredientes.\n3. Hacer los rolls con algas nori.\n4. Cortar en piezas y servir.",
      },
      {
        recipe_name: "Tacos al Pastor",
        cuisine_type: "Mexicana",
        difficulty_level: 4,
        preparation_time: 120,
        steps:
          "1. Marinar la carne con achiote y especias.\n2. Cocinar la carne en el trompo.\n3. Cortar en tiras finas y servir en tortillas.\n4. Añadir piña, cilantro y cebolla.",
      },
      {
        recipe_name: "Croissants",
        cuisine_type: "Francesa",
        difficulty_level: 4,
        preparation_time: 180,
        steps:
          "1. Preparar la masa y dejar reposar.\n2. Estirar la masa y añadir mantequilla.\n3. Enrollar y formar los croissants.\n4. Hornear hasta que estén dorados.",
      },
    ]);

    console.log("Datos de ejemplo insertados correctamente.");
  } catch (err) {
    console.error("Error al insertar datos de ejemplo:", err);
  }
}

// Función para insertar el usuario por defecto
async function insertDefaultUser() {
  const User = require("./user");
  try {
    
    const existingUser = await User.findOne({
      where: { email: "admin@admin.com" },
    });
    if (!existingUser) {
      // Encriptar la contraseña antes de almacenarla
      const hashedPassword = await bcrypt.hash("123456", 10); // Encriptamos la contraseña

      // Crear el usuario por defecto si no existe
      await User.create({
        username: "admin",
        password: hashedPassword, 
        email: "admin@admin.com",
      });
      console.log("Usuario por defecto insertado correctamente.");
    } else {
      console.log("El usuario por defecto ya existe.");
    }
  } catch (err) {
    console.error("Error al insertar el usuario por defecto:", err);
  }
}
