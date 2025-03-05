const express = require("express");
const path = require("path");
const app = express();
const principalRoutes = require("./routes/principalRoute");
const loginRoutes = require("./routes/loginRoute");
const registroRoutes = require("./routes/registroRoute");
const recipeRoutes = require("./routes/recipeRoute");
const session = require("express-session");

// Require

const PORT = process.env.PORT || 3001;

// Configurar express-session
app.use(
  session({
    secret: "d57b68c3a1b96f7b4e2a27c9b8e5f29c27e573f5e30c47fb6d23cbb27d5c1583",
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
    res.clearCookie('connect.sid'); // Borrar la sesion
    res.redirect('/'); 
  });
});

// Middleware para manejar rutas no encontradas 
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
