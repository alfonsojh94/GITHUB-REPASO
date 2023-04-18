const router = require('express').Router();

router.get('/edit', (req, res) => {
    res.send('Ruta para la edición de productos');
});

router.put('/update', (req, res) => {
    res.send('Actualizo un producto');
});

module.exports = router;