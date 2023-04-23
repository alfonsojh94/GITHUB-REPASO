const { Router } = require('express');
const { getAll, getAllProfesores, create, getById, getByEdad, update, deleteById } = require('../../models/cliente.model');
const { raw } = require('mysql2');
const router = require('express').Router();


router.get('/', async (req, res) => {
    const result = await getAll();
    res.json(result);
    
});


// GET CLIENTE Definiendo PROMESA como ------> .Then() .catch()
// router.get('/', (req, res) => {
//     getAll()
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
    
// })

// GET PROFESORES Definiendo Promesa como ----------> .then() .catch()
// router.get('/', (req, res) => {
//     getAllProfesores()
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
    
// })


// // GET PROFESORES Definiendo Promesa como ----ASYNC-AWAIT ------> .try .catch()
// router.get('/', async (req, res) => {
//     try{
//         const result = await getAllProfesores()
//         res.json(result)
//     } catch(err){
//         res.json(err)
//     }
// })


// router.post('/',(req, res) => {
//     create(req.body)
//         .then(({ insertId }) => {
//             getById(insertId)
//                 .then((result) => {
//                     res.json(result)
//                 })
//                 .catch((err) => {
//                     res.json(err)
//                 })
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// });

router.get('/mayores/:edad',async (req, res) => {
    const { edad } = req.params
    const result = await getByEdad(edad)
    res.json(result)
})

router.post('/', async (req, res) => {
    try {
        //A partir de los datos que recibo dentro de la petición creo un nuevo registro en la tabla clientes.
        const result = await create(req.body)
        // A partir del ID que recibo de la creación anterior recupero el cliente correspondiente.
        const cliente = await getById(result.insertId)
        // Envío en formato JSON el cliente recuperado.
        res.json(cliente)
    } catch (err) {
        res.json(err)
    }
});



// router.post('/', (req,res) => {
//     create(req.body)
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
    
// })

router.put('/:clienteId',async (req, res) => {
    const { clienteId } = req.params;
    const result = await update(clienteId, req.body)
    res.json(result)
});

router.delete('/:clienteId',async (req, res) => {
    const { clienteId } = req.params
    const result = await deleteById(clienteId)
    res.json(result)
});



module.exports = router;