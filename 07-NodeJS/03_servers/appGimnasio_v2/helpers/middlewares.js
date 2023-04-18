const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getById } = require('../models/usuario.model');

const checkToken = async (req, res, next) => {
    // 1 - Si el token viene incluido en la cabecera
    if (!req.headers['authorization']) {
        return res.json({ error: 'No has incluido la cabecera de autorización' });
    }

    // extraigo la propiedad authorization y lo guardo en una variable llamada token
    const { authorization: token } = req.headers

    // 2 - Si el token es correcto
    let obj;
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (error) {
        return res.json({ error: 'El token no tiene un formato válido' });
    }

    // 3 - Si el token está caducado
    if (dayjs().unix() > obj.expiresAt) {
        return res.json({ error: 'El token ha caducado' });
    }

    // La petición (req) tiene los permisos necesarios para poder acceder a las URLs de mi API
    const usuario = await getById(obj.userId)
    req.user = usuario;

    next();
}

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.json({ error: 'Debes ser administrador' });
    }
    next();
}

module.exports = {
    checkToken, checkAdmin
}