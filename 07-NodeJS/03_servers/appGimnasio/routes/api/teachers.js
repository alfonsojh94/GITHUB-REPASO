const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Recupera todos los profesores');
});

router.post('/', (req, res) => {
    res.send('Crea un nuevo profesor');
});

module.exports = router;