const router = require('express').Router();

const { getByProfesor } = require('../../models/cliente.model');
const { getAll, create, getById } = require('../../models/profesor.model');

router.get('/', async (req, res) => {
    // Recuperar todos los profesores
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

router.get('/clientes', async (req, res) => {
    // Recupero todos los profesores
    const profesores = await getAll();

    // Para cada profesor recupero sus clientes
    for (let profesor of profesores) {
        const clientes = await getByProfesor(profesor.id);
        profesor.clientes = clientes;
    }

    res.json(profesores);
})

router.post('/', async (req, res) => {
    try {
        const { insertId } = await create(req.body);
        const profesor = await getById(insertId);
        res.json(profesor);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;