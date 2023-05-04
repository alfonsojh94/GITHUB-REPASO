const { getAll } = require('../../models/cliente.model');

const router = require('express').Router();

router.get('/register',(req, res) => {
    res.send('Register')
    
});

router.get('/login', (req, res) => {
    res.send("login")
});



module.exports = router; 

