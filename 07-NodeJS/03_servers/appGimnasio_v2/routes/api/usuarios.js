const { create, getByEmail } = require('../../models/usuario.model');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { createToken } = require('../../helpers/utils');
const { checkToken } = require('../../helpers/middlewares');

const router = require('express').Router();

router.get('/perfil', checkToken, (req, res) => {
    res.json(req.user);
});

router.post('/register',
    body('username')
        .isLength({ min: 3, max: 10 })
        .withMessage('El username debe tener entre 3 y 10 caracteres'),
    body('email')
        .exists()
        .withMessage('El campo email es obligatorio')
        .isEmail()
        .withMessage('El email debe ser correcto')
        .custom((value) => {
            return value.endsWith('@codehouse.academy');
        })
        .withMessage('El email debe pertenecer a codehouse academy'),
    body('password')
        .custom((value) => {
            const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
            return regExp.test(value);
        })
        .withMessage('La password debe contener: mayúscula, minúscula, un número y tamaño entre 4 y 8 caracteres')
    , async (req, res) => {

        // Comprobamos si existen errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
            //return res.json(errors.array());
        }

        // Antes de la inserción encriptamos la password
        req.body.password = bcrypt.hashSync(req.body.password, 11);

        const result = await create(req.body);
        res.json(result);
    });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Compruebo si el email existe en la BD
    const usuario = await getByEmail(email);
    if (!usuario) {
        return res.status(403).json({ error: 'Error en usuario y/o contraseña' });
        //return res.json({ error: 'Error en usuario y/o contraseña' });
    }

    // Compruebo si coinciden las password
    const iguales = bcrypt.compareSync(password, usuario.password);
    if (!iguales) {
        return res.status(403).json({ error: 'Error en usuario y/o contraseña' });
    }

    res.json({
        success: 'Login correcto',
        token: createToken(usuario)
    });
});

module.exports = router;