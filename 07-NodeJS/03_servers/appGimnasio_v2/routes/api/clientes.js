const { getAll, getAllProfesores, create, getById } = require('../../models/cliente.model');
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


router.post('/',(req, res) => {
    create(req.body)
        .then(({ insertId }) => {
            getById(insertId)
                .then((result) => {
                    res.json(result)
                })
                .catch((err) => {
                    res.json(err)
                })
            
        })
        .catch()
    

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

router.put('/:clienteId', (req, res) => {
    res.send('Actualiza un cliente')
});

router.delete('/:clienteId', (req, res) => {
    res.send('Elimina a un cliente')
});



module.exports = router;