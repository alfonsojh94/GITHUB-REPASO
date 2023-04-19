const router = require('express').Router();

router.get('/', (req, res) => {
    db.query('select * from clientes', (err, result) => {
        res.json(result)
    })

});

router.post('/', (req, res) => {
    res.send('Crea un nuevo cliente en la BD')
});

router.put('/:clienteId', (req, res) => {
    res.send('Actualiza un cliente')
});

router.delete('/:clienteId', (req, res) => {
    res.send('Elimina a un cliente')
});



module.exports = router;