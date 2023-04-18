const { getAll, create, getById, getByEdad, update, deleteById } = require('../../models/cliente.model');
const { checkSchema } = require('express-validator');
const { newClient, checkError } = require('../../helpers/validators');

const router = require('express').Router();

// router.get('/', (req, res) => {
//     getAll()
//         .then(result => res.json(result))
//         .catch(err => res.json(err));
// });

router.get('/', async (req, res) => {
    console.log(req);
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json(err.message);
    }
});

router.get('/mayores/:edad', async (req, res) => {
    const { edad } = req.params;
    const result = await getByEdad(edad);
    res.json(result);
});

router.get('/:clienteId', async (req, res) => {
    try {
        const { clienteId } = req.params;
        const cliente = await getById(clienteId);
        res.json(cliente);
    } catch (err) {
        res.json(err);
    }
});

// Inserto un nuevo cliente y retorno el cliente generado
// router.post('/', (req, res) => {
//     create(req.body)
//         .then(result => {
//             // Recuperar el cliente por ID
//             // select * from clientes where id = 1221;
//             getById(result.insertId)
//                 .then(result => res.json(result))
//                 .catch(err => res.json(err));
//         })
//         .catch(err => res.json(err));
// });

router.post('/',
    checkSchema(newClient),
    checkError,
    async (req, res) => {
        try {
            // A partir de los datos que recibo dentro de la petición
            // creo un nuevo registro en la tabla clientes
            const result = await create(req.body);
            // A partir del ID que recibo de la creación anterior
            // recupero el cliente correspondiente
            const cliente = await getById(result.insertId)
            // Envío en formato JSON el cliente recuperado
            res.json(cliente);
        } catch (err) {
            res.json(err);
        }
    });

router.put('/:clienteId', async (req, res) => {
    const { clienteId } = req.params;
    const result = await update(clienteId, req.body);
    res.json(result);
});

router.delete('/:clienteId', async (req, res) => {
    const { clienteId } = req.params;
    const result = await deleteById(clienteId);
    res.json(result);
});

module.exports = router;