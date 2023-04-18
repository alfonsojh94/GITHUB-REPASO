const express = require('express');

// Extraigo datos del fichero de entorno
require('dotenv').config();

const app = express();

// Rutas de la app
// GET localhost:3000/about
app.get('/about', (req, res) => {
    res.end('Página de About / Otra cosa');
});

// GET localhost:3000/users/new
app.get('/users/new', (req, res) => {
    res.end('Peticion GET /users/new');
});

// TODO: Tengo que hacer una ruta con POST
// POST localhost:3000/products/create
app.post('/products/create', (req, res) => {
    res.end('Petición POST /products/create');
});

// Cargo el puerto del fichero de entorno con process.env.PORT y si no existe pongo el puerto 3000 por defecto
// let PORT;
// if (process.env.PORT) {
//     PORT = process.env.PORT;
// } else {
//     PORT = 3000;
// }

// const PORT = process.env.PORT ? process.env.PORT : 3000;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});