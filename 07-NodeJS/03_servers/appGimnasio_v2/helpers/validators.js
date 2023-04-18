const { validationResult } = require("express-validator");

const newClient = {
    email: {
        isEmail: {
            errorMessage: 'El campo email debe ser correcto'
        }
    },
    edad: {
        isInt: {
            errorMessage: 'La edad debe ser un número entero'
        },
        custom: {
            options: (value) => {
                return value >= 18 && value <= 65;
            },
            errorMessage: 'El valor de la edad debe estar entre 18 y 65'
        }
    }
}

const checkError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.mapped());
    }
    next();
}

module.exports = {
    newClient, checkError
}