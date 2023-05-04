const { getAll, create, getById } = require('../../models/profesor.model');

const router = require('express').Router();

// GET Obtener toda la lista de profesores
router.get('/', async (req, res) => {
    try {
        const result = await getAll()
        res.json(result)
    } catch(err) {
        res.json(err)
    }
    
});

// GET Obtengo profesor por ID
router.get('/:profesorId', async (req, res) => {
    try {
        const { profesorId } = req.params
        const profesor = await getById(profesorId)
        res.json(profesor)
        
    } catch (err) {
        res.json(err)
    }
});

router.get('/clientes', (req, res) => {
    // Necesitamos obtener todos los profesores
    const profesores = this.getAll();

    // Para cada profesor recupero su cliente
    for (let profesor of profesores) {
        console.log(profesor);
        const clientes = getByProfesor(profesor.id);
    }
});

// POST Crear un profesor y devolverlo.
router.post('/',async (req, res) => {
    try {
        const result = await create(req.body)
        const profesor = await getById(result.insertId)
        res.json(result)
    } catch (err) {
        res.json(err)
    }
});

router.put('/:profesorId', (req, res) => {
    res.send('Actualiza a un Profesor')
});

router.delete('/:profesorId', (req, res) => {
    res.send('Borra a un Profesor')
});


module.exports = router;