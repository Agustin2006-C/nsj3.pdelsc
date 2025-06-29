//Importar Express y Path para enviar archivos de public
const express = require("express");
const path = require("path");

const app = express(); // <- Iniciar el servidor HTTP

//Middleware para acceder a la carpeta public
app.use(express.static(path.join(__dirname, "public")));

//Ruta para la raiz
app.get("/", (req, res) => {
  res.sendFile(path.join("index.html"));
});

//Inicia el servidor en localhost puerto 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
