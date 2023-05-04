const router = require('express').Router();

const apiClientesRouter = require('./api/clientes');
const apiProfesoresRouter = require('./api/profesores');
const apiUsuarioRouter = require('./api/usuarios');

router.use('/clientes', apiClientesRouter);
router.use('/profesores', apiProfesoresRouter);
router.use('/usuarios', apiUsuarioRouter);

module.exports = router;