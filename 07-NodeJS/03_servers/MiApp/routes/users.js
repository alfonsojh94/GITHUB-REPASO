var express = require('express');
var router = express.Router();

// http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('Cualquier cosa');
});

// http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('Creo un nuevo usuario');
});

router.post('/create', (req, res) => {
  res.send('Ruta para crear usuarios');
})

module.exports = router;