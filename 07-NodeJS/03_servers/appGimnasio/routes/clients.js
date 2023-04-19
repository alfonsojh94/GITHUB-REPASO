const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Devuelve la lista de los clientes');
});

router.get('/new', (req, res) => {
    res.send('Devuelve el formulario para crear clientes');
});

router.get('/edit', (req, res) => {
    res.send('Formulario para actualizar cliente');
});

router.get('/delete', (req, res) => {
    res.send('Borra un cliente');
});

router.get('/:client_id', (req, res) => {
    console.log(req.params);

    res.send('Recupera el detalle de un cliente');
});

router.get('/:client_id/budget/:budget_id', (req, res) => {
    const { client_id, budget_id } = req.params;

    res.send('Cliente con presupuesto');
});

router.post('/create', (req, res) => {
    res.send('Crea un nuevo cliente');
});

router.post('/update', (req, res) => {
    res.send('Actualiza un cliente');
});

module.exports = router;