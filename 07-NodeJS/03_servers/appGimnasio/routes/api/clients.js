const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.query);

    const { page, limit = 10 } = req.query;
    console.log(page, limit)

    res.send('Devuelve todos los clientes');
});

router.post('/', (req, res) => {
    console.log(req.body);

    const { name, address } = req.body;
    console.log(name, address);

    res.send('Creamos un cliente');
});

module.exports = router;