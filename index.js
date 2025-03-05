const express = require("express");
const path = require("path");
const app = express();
const principalRoutes = require("./routes/principalRoute");
const loginRoutes = require("./routes/loginRoute");
const registroRoutes = require("./routes/registroRoute");
const recipeRoutes = require("./routes/recipeRoute");
const session = require("express-session");

const PORT = process.env.PORT || 3001;

// Configurar express-session
app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware para servir archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Rutas de la aplicación
app.use("/login", loginRoutes);
app.use("/registro", registroRoutes);
app.use("/principal", principalRoutes);
app.use("/recipe", recipeRoutes);
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
   
    res.clearCookie('connect.sid'); // Borrar la cookie de sesión
    res.redirect('/'); // Redirigir a la página de inicio o a donde prefieras
  });
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
